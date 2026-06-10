import { useState } from "react";
import { __ } from "@wordpress/i18n";
import {
  PanelBody,
  TextControl,
  TextareaControl,
  ToggleControl,
  SelectControl,
  RangeControl,
  Button,
  __experimentalNumberControl as NumberControl,
} from "@wordpress/components";
import { InlineMediaUpload } from "../../../../../../../../bpl-tools/Components";
import {
  layoutOptions,
  sourceTypeOptions,
  aspectRatioOptions,
} from "../../../../utils/options";
import {
  detectSourceType,
  getYoutubeId,
  getVimeoId,
  makeId,
  parseTimeToSeconds,
  formatTime,
} from "../../../../utils/functions";

const ensureMediaId = (type, url) => {
  if (type === "youtube") return getYoutubeId(url);
  if (type === "vimeo") return getVimeoId(url);
  return "";
};

const General = ({ attributes, setAttributes }) => {
  const {
    items = [],
    layout,
    autoAdvance,
    autoAdvanceDelay,
    startIndex,
    loopQueue,
    shuffle,
    showChapters,
    showSearch,
    showDuration,
    showThumbnails,
    showDescription,
    showCounter,
    showWatchedCheckmarks,
    rememberProgress,
    progressStorageKey,
    deepLinkEnabled,
    queueTitle,
    queueWidth,
    queueMaxHeight,
    aspectRatio,
    customAspect,
    emitSchema,
    playlistName,
  } = attributes;

  const [openIndex, setOpenIndex] = useState(0);

  const updateItem = (index, patch) => {
    const next = items.map((it, i) => (i === index ? { ...it, ...patch } : it));
    setAttributes({ items: next });
  };

  const updateItemSource = (index, patch) => {
    const next = items.map((it, i) =>
      i === index ? { ...it, source: { ...(it.source || {}), ...patch } } : it,
    );
    setAttributes({ items: next });
  };

  const removeItem = (index) => {
    const next = items.filter((_, i) => i !== index);
    setAttributes({ items: next });
  };

  const moveItem = (index, delta) => {
    const newIndex = index + delta;
    if (newIndex < 0 || newIndex >= items.length) return;
    const next = [...items];
    const [item] = next.splice(index, 1);
    next.splice(newIndex, 0, item);
    setAttributes({ items: next });
  };

  const addItem = () => {
    const next = [
      ...items,
      {
        id: makeId(),
        title: __("New video", "video-player-block"),
        description: "",
        source: { type: "mp4", url: "", mediaId: "" },
        poster: "",
        duration: "",
        badge: "",
        chapters: [],
      },
    ];
    setAttributes({ items: next });
    setOpenIndex(next.length - 1);
  };

  const updateChapter = (itemIndex, chapterIndex, patch) => {
    const item = items[itemIndex];
    if (!item) return;
    const chapters = Array.isArray(item.chapters) ? [...item.chapters] : [];
    chapters[chapterIndex] = { ...chapters[chapterIndex], ...patch };
    updateItem(itemIndex, { chapters });
  };

  const addChapter = (itemIndex) => {
    const item = items[itemIndex];
    if (!item) return;
    const chapters = Array.isArray(item.chapters) ? [...item.chapters] : [];
    chapters.push({ time: 0, label: __("Untitled chapter", "video-player-block") });
    updateItem(itemIndex, { chapters });
  };

  const removeChapter = (itemIndex, chapterIndex) => {
    const item = items[itemIndex];
    if (!item) return;
    const chapters = (item.chapters || []).filter((_, i) => i !== chapterIndex);
    updateItem(itemIndex, { chapters });
  };

  return (
    <>
      <PanelBody
        className="bPlPanelBody"
        title={__("Playlist Items", "video-player-block")}
        initialOpen={true}>
        <div className="vpb-video-playlist-editor">
          {items.map((item, index) => {
            const isOpen = index === openIndex;
            const src = item.source || { type: "mp4", url: "", mediaId: "" };
            return (
              <div
                key={item.id || index}
                className={`vpb-vp-item-row ${isOpen ? "is-open" : "is-collapsed"}`}>
                <div className="vpb-vp-item-head">
                  <span className="vpb-vp-item-title">
                    {`${index + 1}. ${item.title || __("Untitled", "video-player-block")}`}
                  </span>
                  <div className="vpb-vp-item-actions">
                    <Button
                      isSmall
                      icon="arrow-up-alt2"
                      label={__("Move up", "video-player-block")}
                      onClick={() => moveItem(index, -1)}
                      disabled={index === 0}
                    />
                    <Button
                      isSmall
                      icon="arrow-down-alt2"
                      label={__("Move down", "video-player-block")}
                      onClick={() => moveItem(index, 1)}
                      disabled={index === items.length - 1}
                    />
                    <Button
                      isSmall
                      icon={isOpen ? "arrow-up" : "arrow-down"}
                      label={
                        isOpen
                          ? __("Collapse", "video-player-block")
                          : __("Expand", "video-player-block")
                      }
                      onClick={() => setOpenIndex(isOpen ? -1 : index)}
                    />
                    <Button
                      isSmall
                      isDestructive
                      icon="trash"
                      label={__("Remove", "video-player-block")}
                      onClick={() => removeItem(index)}
                    />
                  </div>
                </div>

                {isOpen && (
                  <div className="vpb-vp-item-body">
                    <TextControl
                      label={__("Title", "video-player-block")}
                      value={item.title || ""}
                      onChange={(val) => updateItem(index, { title: val })}
                    />

                    <TextareaControl
                      label={__("Description", "video-player-block")}
                      value={item.description || ""}
                      onChange={(val) =>
                        updateItem(index, { description: val })
                      }
                      rows={2}
                    />

                    <SelectControl
                      label={__("Source Type", "video-player-block")}
                      value={src.type || "mp4"}
                      options={sourceTypeOptions}
                      onChange={(val) =>
                        updateItemSource(index, {
                          type: val,
                          mediaId: ensureMediaId(val, src.url || ""),
                        })
                      }
                    />

                    <TextControl
                      label={__("Video URL", "video-player-block")}
                      value={src.url || ""}
                      onChange={(val) => {
                        const detected = detectSourceType(val);
                        updateItemSource(index, {
                          url: val,
                          type: detected,
                          mediaId: ensureMediaId(detected, val),
                        });
                      }}
                      placeholder="https://..."
                    />

                    {(src.type === "youtube" ||
                      src.type === "vimeo" ||
                      src.type === "mux") && (
                      <TextControl
                        label={__("Media ID", "video-player-block")}
                        value={src.mediaId || ""}
                        onChange={(val) =>
                          updateItemSource(index, { mediaId: val })
                        }
                        help={__(
                          "Auto-detected from URL where possible. For Mux, this is the playback ID.",
                          "video-player-block",
                        )}
                      />
                    )}

                    <InlineMediaUpload
                      label={__("Poster / Thumbnail", "video-player-block")}
                      value={item.poster || ""}
                      types={["image"]}
                      onChange={(val) => updateItem(index, { poster: val })}
                    />

                    <TextControl
                      label={__("Duration (display)", "video-player-block")}
                      value={item.duration || ""}
                      onChange={(val) => updateItem(index, { duration: val })}
                      placeholder="e.g. 4:32"
                    />

                    <TextControl
                      label={__("Badge (optional)", "video-player-block")}
                      value={item.badge || ""}
                      onChange={(val) => updateItem(index, { badge: val })}
                      placeholder={__("NEW, HLS, Premiere…", "video-player-block")}
                    />

                    {/* Chapters editor */}
                    <div>
                      <label
                        style={{
                          display: "block",
                          fontWeight: 600,
                          fontSize: 12,
                          margin: "12px 0 6px",
                        }}>
                        {__("Chapters", "video-player-block")}
                      </label>
                      <p
                        style={{
                          margin: "0 0 8px",
                          fontSize: 11,
                          fontStyle: "italic",
                          color: "#757575",
                        }}>
                        {__(
                          "Chapters work best with HTML5 / MP4 (self-hosted) videos.",
                          "video-player-block",
                        )}
                      </p>
                      {(item.chapters || []).map((ch, ci) => (
                        <div className="vpb-vp-chapter-row" key={ci}>
                          <TextControl
                            label={__("Time", "video-player-block")}
                            value={
                              typeof ch.time === "number"
                                ? formatTime(ch.time)
                                : ch.time || ""
                            }
                            onChange={(val) =>
                              updateChapter(index, ci, {
                                time: parseTimeToSeconds(val),
                              })
                            }
                            placeholder="0:00"
                          />
                          <TextControl
                            label={__("Label", "video-player-block")}
                            value={ch.label || ""}
                            onChange={(val) =>
                              updateChapter(index, ci, { label: val })
                            }
                          />
                          <Button
                            isSmall
                            isDestructive
                            icon="no-alt"
                            label={__("Remove chapter", "video-player-block")}
                            onClick={() => removeChapter(index, ci)}
                          />
                        </div>
                      ))}
                      <Button
                        variant="secondary"
                        icon="plus"
                        onClick={() => addChapter(index)}>
                        {__("Add Chapter", "video-player-block")}
                      </Button>
                    </div>
                  </div>
                )}
              </div>
            );
          })}

          <Button
            variant="secondary"
            className="vpb-vp-add"
            icon="plus"
            onClick={addItem}>
            {__("Add Video", "video-player-block")}
          </Button>
        </div>
      </PanelBody>

      <PanelBody
        className="bPlPanelBody"
        title={__("Layout", "video-player-block")}
        initialOpen={false}>

        <SelectControl
          label={__("Layout", "video-player-block")}
          value={layout}
          options={layoutOptions}
          onChange={(val) => setAttributes({ layout: val })}
        />

        <SelectControl
          label={__("Aspect Ratio", "video-player-block")}
          value={aspectRatio}
          options={aspectRatioOptions}
          onChange={(val) => setAttributes({ aspectRatio: val })}
        />

        {aspectRatio === "custom" && (
          <TextControl
            label={__("Custom Aspect (e.g. 5/4)", "video-player-block")}
            value={customAspect}
            onChange={(val) => setAttributes({ customAspect: val })}
          />
        )}

        <RangeControl
          label={__("Queue Width (%)", "video-player-block")}
          value={queueWidth}
          min={20}
          max={50}
          onChange={(val) => setAttributes({ queueWidth: val })}
          help={__(
            "Width of the queue panel in side layouts.",
            "video-player-block",
          )}
        />

        <RangeControl
          label={__("Queue Max Height (px)", "video-player-block")}
          value={queueMaxHeight}
          min={240}
          max={1200}
          step={20}
          onChange={(val) => setAttributes({ queueMaxHeight: val })}
        />
      </PanelBody>

      <PanelBody
        className="bPlPanelBody"
        title={__("Playback Behavior", "video-player-block")}
        initialOpen={false}>
        <NumberControl
          label={__("Start Index", "video-player-block")}
          value={startIndex}
          min={0}
          max={Math.max(0, items.length - 1)}
          onChange={(val) =>
            setAttributes({ startIndex: parseInt(val || 0, 10) })
          }
          help={__(
            "Which item to load first (0-based). Stored progress and deep links take priority.",
            "video-player-block",
          )}
        />

        <ToggleControl
          label={__("Auto-advance to next item", "video-player-block")}
          checked={!!autoAdvance}
          onChange={(val) => setAttributes({ autoAdvance: val })}
        />

        <RangeControl
          label={__("Auto-advance Delay (seconds)", "video-player-block")}
          value={autoAdvanceDelay}
          min={0}
          max={20}
          onChange={(val) => setAttributes({ autoAdvanceDelay: val })}
          help={__(
            "Countdown shown before next item starts. 0 = immediate.",
            "video-player-block",
          )}
          disabled={!autoAdvance}
        />

        <ToggleControl
          label={__("Loop queue", "video-player-block")}
          checked={!!loopQueue}
          onChange={(val) => setAttributes({ loopQueue: val })}
        />

        <ToggleControl
          label={__("Shuffle on load", "video-player-block")}
          checked={!!shuffle}
          onChange={(val) => setAttributes({ shuffle: val })}
        />
      </PanelBody>

      <PanelBody
        className="bPlPanelBody"
        title={__("Queue UI", "video-player-block")}
        initialOpen={false}>
        <TextControl
          label={__("Queue Title", "video-player-block")}
          value={queueTitle}
          onChange={(val) => setAttributes({ queueTitle: val })}
        />
        <ToggleControl
          label={__("Show search filter", "video-player-block")}
          checked={!!showSearch}
          onChange={(val) => setAttributes({ showSearch: val })}
        />
        <ToggleControl
          label={__("Show thumbnails", "video-player-block")}
          checked={!!showThumbnails}
          onChange={(val) => setAttributes({ showThumbnails: val })}
        />
        <ToggleControl
          label={__("Show duration badge", "video-player-block")}
          checked={!!showDuration}
          onChange={(val) => setAttributes({ showDuration: val })}
        />
        <ToggleControl
          label={__("Show description", "video-player-block")}
          checked={!!showDescription}
          onChange={(val) => setAttributes({ showDescription: val })}
        />
        <ToggleControl
          label={__("Show item counter", "video-player-block")}
          checked={!!showCounter}
          onChange={(val) => setAttributes({ showCounter: val })}
        />
        <ToggleControl
          label={__("Show watched checkmarks", "video-player-block")}
          checked={!!showWatchedCheckmarks}
          onChange={(val) => setAttributes({ showWatchedCheckmarks: val })}
        />
        <ToggleControl
          label={__("Show chapter list under active item", "video-player-block")}
          checked={!!showChapters}
          onChange={(val) => setAttributes({ showChapters: val })}
        />
      </PanelBody>

      <PanelBody
        className="bPlPanelBody"
        title={__("Progress & Deep Links", "video-player-block")}
        initialOpen={false}>
        <ToggleControl
          label={__("Remember progress (localStorage)", "video-player-block")}
          checked={!!rememberProgress}
          onChange={(val) => setAttributes({ rememberProgress: val })}
          help={__(
            "Persist the current item, position, and watched state in the visitor's browser.",
            "video-player-block",
          )}
        />
        <TextControl
          label={__("Progress storage key", "video-player-block")}
          value={progressStorageKey}
          onChange={(val) => setAttributes({ progressStorageKey: val })}
          placeholder={__("Defaults to block client id", "video-player-block")}
          help={__(
            "Namespace for localStorage. Use the same key across pages to share progress.",
            "video-player-block",
          )}
        />
        <ToggleControl
          label={__("Deep links (#video=…&t=…)", "video-player-block")}
          checked={!!deepLinkEnabled}
          onChange={(val) => setAttributes({ deepLinkEnabled: val })}
          help={__(
            "Read and write the active item index and timestamp in the URL hash.",
            "video-player-block",
          )}
        />
      </PanelBody>

      <PanelBody
        className="bPlPanelBody"
        title={__("SEO / Schema", "video-player-block")}
        initialOpen={false}>
        <TextControl
          label={__("Playlist Name", "video-player-block")}
          value={playlistName}
          onChange={(val) => setAttributes({ playlistName: val })}
        />
        <ToggleControl
          label={__("Emit ItemList + VideoObject JSON-LD", "video-player-block")}
          checked={!!emitSchema}
          onChange={(val) => setAttributes({ emitSchema: val })}
        />
      </PanelBody>
    </>
  );
};

export default General;
