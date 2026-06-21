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
  aspectRatioOptions,
  sourceTypeOptions,
  snapBehaviorOptions,
  preloadStrategyOptions,
  ctaStyleOptions,
  ctaPositionOptions,
} from "../../../../utils/options";
import {
  detectSourceType,
  makeId,
  parseHashtags,
} from "../../../../utils/functions";

const General = ({ attributes, setAttributes }) => {
  const {
    reels = [],
    layout,
    aspectRatio,
    autoplayOnVisible,
    autoplayThreshold,
    startMuted,
    loopClips,
    showProgressBar,
    showCaption,
    showAuthor,
    showCTA,
    ctaPosition,
    showHashtags,
    showActionRail,
    showCounter,
    snapBehavior,
    swipeGestures,
    keyboardNavigation,
    preloadStrategy,
    gridColumns = { desktop: 4, tablet: 3, mobile: 2 },
    thumbnailHoverPreview,
    deepLinkHash,
    seoJsonLd,
    feedName,
    maxClipsPerPage,
    loadMoreLabel,
    containerHeight,
    feedMaxWidth,
  } = attributes;

  const [openIndex, setOpenIndex] = useState(0);

  const updateReel = (index, patch) => {
    const next = reels.map((r, i) => (i === index ? { ...r, ...patch } : r));
    setAttributes({ reels: next });
  };

  const removeReel = (index) => {
    const next = reels.filter((_, i) => i !== index);
    setAttributes({ reels: next });
  };

  const moveReel = (index, delta) => {
    const newIndex = index + delta;
    if (newIndex < 0 || newIndex >= reels.length) return;
    const next = [...reels];
    const [reel] = next.splice(index, 1);
    next.splice(newIndex, 0, reel);
    setAttributes({ reels: next });
  };

  const addReel = () => {
    const next = [
      ...reels,
      {
        id: makeId(),
        source: "mp4",
        url: "",
        poster: "",
        title: __("New reel", "video-player-block"),
        caption: "",
        authorName: "",
        authorAvatar: "",
        ctaLabel: "",
        ctaUrl: "",
        ctaStyle: "solid",
        hashtags: [],
        durationSec: 0,
      },
    ];
    setAttributes({ reels: next });
    setOpenIndex(next.length - 1);
  };

  return (
    <>
      <PanelBody
        className="bPlPanelBody"
        title={__("Reels", "video-player-block")}
        initialOpen={true}>
        <div className="vpb-video-reels-editor">
          {reels.map((reel, index) => {
            const isOpen = index === openIndex;
            return (
              <div
                key={reel.id || index}
                className={`vpb-vr-item-row ${isOpen ? "is-open" : "is-collapsed"}`}>
                <div className="vpb-vr-item-head">
                  <span className="vpb-vr-item-title">
                    {`${index + 1}. ${reel.title || __("Untitled", "video-player-block")}`}
                  </span>
                  <div className="vpb-vr-item-actions">
                    <Button
                      isSmall
                      icon="arrow-up-alt2"
                      label={__("Move up", "video-player-block")}
                      onClick={() => moveReel(index, -1)}
                      disabled={index === 0}
                    />
                    <Button
                      isSmall
                      icon="arrow-down-alt2"
                      label={__("Move down", "video-player-block")}
                      onClick={() => moveReel(index, 1)}
                      disabled={index === reels.length - 1}
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
                      onClick={() => removeReel(index)}
                    />
                  </div>
                </div>

                {isOpen && (
                  <div className="vpb-vr-item-body">
                    <SelectControl
                      label={__("Source Type", "video-player-block")}
                      value={reel.source || "mp4"}
                      options={sourceTypeOptions}
                      onChange={(val) => updateReel(index, { source: val })}
                    />

                    <InlineMediaUpload
                      label={__("Video URL", "video-player-block")}
                      value={reel.url || ""}
                      types={["video"]}
                      onChange={(val) =>
                        updateReel(index, {
                          url: val,
                          source: detectSourceType(val),
                        })
                      }
                      placeholder="https://..."
                      help={
                        reel.source === "youtube" || reel.source === "vimeo"
                          ? __(
                              "YouTube/Vimeo previews are muted in the editor — sound plays on the published page.",
                              "video-player-block",
                            )
                          : undefined
                      }
                    />

                    <InlineMediaUpload
                      label={__("Poster / Cover image", "video-player-block")}
                      value={reel.poster || ""}
                      types={["image"]}
                      onChange={(val) => updateReel(index, { poster: val })}
                    />

                    <TextControl
                      label={__("Title", "video-player-block")}
                      value={reel.title || ""}
                      onChange={(val) => updateReel(index, { title: val })}
                    />

                    <TextareaControl
                      label={__("Caption", "video-player-block")}
                      value={reel.caption || ""}
                      onChange={(val) => updateReel(index, { caption: val })}
                      rows={2}
                    />

                    <TextControl
                      label={__("Author Name", "video-player-block")}
                      value={reel.authorName || ""}
                      onChange={(val) =>
                        updateReel(index, { authorName: val })
                      }
                    />

                    <InlineMediaUpload
                      label={__("Author Avatar", "video-player-block")}
                      value={reel.authorAvatar || ""}
                      types={["image"]}
                      onChange={(val) =>
                        updateReel(index, { authorAvatar: val })
                      }
                    />

                    <TextControl
                      label={__("CTA Label", "video-player-block")}
                      value={reel.ctaLabel || ""}
                      onChange={(val) => updateReel(index, { ctaLabel: val })}
                      placeholder={__("Shop now, Learn more…", "video-player-block")}
                    />

                    <TextControl
                      label={__("CTA URL", "video-player-block")}
                      value={reel.ctaUrl || ""}
                      onChange={(val) => updateReel(index, { ctaUrl: val })}
                      placeholder="https://..."
                    />

                    <SelectControl
                      label={__("CTA Style", "video-player-block")}
                      value={reel.ctaStyle || "solid"}
                      options={ctaStyleOptions}
                      onChange={(val) => updateReel(index, { ctaStyle: val })}
                    />

                    <TextControl
                      label={__("Hashtags (comma or space separated)", "video-player-block")}
                      value={(reel.hashtags || []).join(" ")}
                      onChange={(val) =>
                        updateReel(index, { hashtags: parseHashtags(val) })
                      }
                      placeholder="reels shorts viral"
                    />
                  </div>
                )}
              </div>
            );
          })}

          <Button
            variant="secondary"
            className="vpb-vr-add"
            icon="plus"
            onClick={addReel}>
            {__("Add Reel", "video-player-block")}
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

        <RangeControl
          label={__("Container Height (px)", "video-player-block")}
          value={containerHeight}
          min={360}
          max={1100}
          step={10}
          onChange={(val) => setAttributes({ containerHeight: val })}
        />

        <RangeControl
          label={__("Feed Max Width (px)", "video-player-block")}
          value={feedMaxWidth}
          min={280}
          max={720}
          step={10}
          onChange={(val) => setAttributes({ feedMaxWidth: val })}
          help={__(
            "Cap on the feed/strip width. Grid mode fills the whole block.",
            "video-player-block",
          )}
        />

        {layout === "grid-then-fullscreen" && (
          <>
            <RangeControl
              label={__("Grid columns (desktop)", "video-player-block")}
              value={gridColumns.desktop}
              min={1}
              max={6}
              onChange={(val) =>
                setAttributes({
                  gridColumns: { ...gridColumns, desktop: val },
                })
              }
            />
            <RangeControl
              label={__("Grid columns (tablet)", "video-player-block")}
              value={gridColumns.tablet}
              min={1}
              max={5}
              onChange={(val) =>
                setAttributes({ gridColumns: { ...gridColumns, tablet: val } })
              }
            />
            <RangeControl
              label={__("Grid columns (mobile)", "video-player-block")}
              value={gridColumns.mobile}
              min={1}
              max={4}
              onChange={(val) =>
                setAttributes({ gridColumns: { ...gridColumns, mobile: val } })
              }
            />
            <ToggleControl
              label={__("Hover preview on grid tiles", "video-player-block")}
              checked={!!thumbnailHoverPreview}
              onChange={(val) =>
                setAttributes({ thumbnailHoverPreview: val })
              }
              help={__(
                "Mute-play the first few seconds of a clip when hovering its grid tile.",
                "video-player-block",
              )}
            />
          </>
        )}
      </PanelBody>

      <PanelBody
        className="bPlPanelBody"
        title={__("Playback Behavior", "video-player-block")}
        initialOpen={false}>
        <ToggleControl
          label={__("Autoplay when in view", "video-player-block")}
          checked={!!autoplayOnVisible}
          onChange={(val) => setAttributes({ autoplayOnVisible: val })}
        />
        <RangeControl
          label={__("Visibility threshold (%)", "video-player-block")}
          value={autoplayThreshold}
          min={20}
          max={100}
          onChange={(val) => setAttributes({ autoplayThreshold: val })}
          disabled={!autoplayOnVisible}
          help={__(
            "How much of a clip must be in view before it starts playing.",
            "video-player-block",
          )}
        />
        <ToggleControl
          label={__("Start muted (recommended)", "video-player-block")}
          checked={!!startMuted}
          onChange={(val) => setAttributes({ startMuted: val })}
          help={__(
            "Browsers block autoplay with sound — keep this on for reliable autoplay.",
            "video-player-block",
          )}
        />
        <ToggleControl
          label={__("Loop each clip", "video-player-block")}
          checked={!!loopClips}
          onChange={(val) => setAttributes({ loopClips: val })}
        />
        <SelectControl
          label={__("Snap behavior", "video-player-block")}
          value={snapBehavior}
          options={snapBehaviorOptions}
          onChange={(val) => setAttributes({ snapBehavior: val })}
        />
        <ToggleControl
          label={__("Swipe gestures (touch)", "video-player-block")}
          checked={!!swipeGestures}
          onChange={(val) => setAttributes({ swipeGestures: val })}
        />
        <ToggleControl
          label={__("Keyboard navigation (Arrow keys)", "video-player-block")}
          checked={!!keyboardNavigation}
          onChange={(val) => setAttributes({ keyboardNavigation: val })}
        />
        <SelectControl
          label={__("Preload strategy", "video-player-block")}
          value={preloadStrategy}
          options={preloadStrategyOptions}
          onChange={(val) => setAttributes({ preloadStrategy: val })}
          help={__(
            "Controls how aggressively upcoming clips load.",
            "video-player-block",
          )}
        />
      </PanelBody>

      <PanelBody
        className="bPlPanelBody"
        title={__("Overlays & UI", "video-player-block")}
        initialOpen={false}>
        <ToggleControl
          label={__("Progress bar", "video-player-block")}
          checked={!!showProgressBar}
          onChange={(val) => setAttributes({ showProgressBar: val })}
        />
        <ToggleControl
          label={__("Caption / title overlay", "video-player-block")}
          checked={!!showCaption}
          onChange={(val) => setAttributes({ showCaption: val })}
        />
        <ToggleControl
          label={__("Author pill", "video-player-block")}
          checked={!!showAuthor}
          onChange={(val) => setAttributes({ showAuthor: val })}
        />
        <ToggleControl
          label={__("Hashtags", "video-player-block")}
          checked={!!showHashtags}
          onChange={(val) => setAttributes({ showHashtags: val })}
        />
        <ToggleControl
          label={__("CTA button", "video-player-block")}
          checked={!!showCTA}
          onChange={(val) => setAttributes({ showCTA: val })}
        />
        <SelectControl
          label={__("CTA position", "video-player-block")}
          value={ctaPosition}
          options={ctaPositionOptions}
          onChange={(val) => setAttributes({ ctaPosition: val })}
          disabled={!showCTA}
        />
        <ToggleControl
          label={__("Right action rail (Like / Share / Mute)", "video-player-block")}
          checked={!!showActionRail}
          onChange={(val) => setAttributes({ showActionRail: val })}
        />
        <ToggleControl
          label={__("Clip counter (1 / N)", "video-player-block")}
          checked={!!showCounter}
          onChange={(val) => setAttributes({ showCounter: val })}
        />
      </PanelBody>

      <PanelBody
        className="bPlPanelBody"
        title={__("Pagination & Deep Links", "video-player-block")}
        initialOpen={false}>
        <NumberControl
          label={__("Max clips per page (0 = no cap)", "video-player-block")}
          value={maxClipsPerPage}
          min={0}
          onChange={(val) =>
            setAttributes({ maxClipsPerPage: parseInt(val || 0, 10) })
          }
        />
        <TextControl
          label={__("Load more label", "video-player-block")}
          value={loadMoreLabel}
          onChange={(val) => setAttributes({ loadMoreLabel: val })}
          disabled={!maxClipsPerPage}
        />
        <ToggleControl
          label={__("Sync current clip to URL hash (#reel=…)", "video-player-block")}
          checked={!!deepLinkHash}
          onChange={(val) => setAttributes({ deepLinkHash: val })}
        />
      </PanelBody>

      <PanelBody
        className="bPlPanelBody"
        title={__("SEO / Schema", "video-player-block")}
        initialOpen={false}>
        <TextControl
          label={__("Feed Name", "video-player-block")}
          value={feedName}
          onChange={(val) => setAttributes({ feedName: val })}
        />
        <ToggleControl
          label={__("Emit ItemList + VideoObject JSON-LD", "video-player-block")}
          checked={!!seoJsonLd}
          onChange={(val) => setAttributes({ seoJsonLd: val })}
        />
      </PanelBody>
    </>
  );
};

export default General;
