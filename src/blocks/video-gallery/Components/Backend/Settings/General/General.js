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
} from "@wordpress/components";
import { InlineMediaUpload } from "../../../../../../../../bpl-tools/Components";
import {
  layoutOptions,
  aspectRatioOptions,
  sourceOptions,
  playerEngineOptions,
  playbackModeOptions,
  filterStyleOptions,
} from "../../../../utils/options";
import { detectSource, makeId } from "../../../../utils/functions";

const General = ({ attributes, setAttributes }) => {
  const {
    videos = [],
    layout,
    columns = {},
    gap,
    aspectRatio,
    customAspect,
    playerEngine,
    playbackMode,
    showFilters,
    filterStyle,
    showTitle,
    showDuration,
    showDescription,
    showPlayIcon,
    autoplayNext,
    loop,
    lazyLoad,
    carouselSettings = {},
    emptyStateText,
  } = attributes;

  const [openIndex, setOpenIndex] = useState(0);

  const cols = { desktop: 3, tablet: 2, mobile: 1, ...columns };
  const cs = {
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 5000,
    showArrows: true,
    showDots: true,
    infinite: true,
    ...carouselSettings,
  };

  const updateColumns = (key, val) =>
    setAttributes({ columns: { ...cols, [key]: val } });

  const updateCarousel = (key, val) =>
    setAttributes({ carouselSettings: { ...cs, [key]: val } });

  const updateVideo = (index, key, val) => {
    const next = videos.map((v, i) => (i === index ? { ...v, [key]: val } : v));
    setAttributes({ videos: next });
  };

  const removeVideo = (index) => {
    const next = videos.filter((_, i) => i !== index);
    setAttributes({ videos: next });
  };

  const moveVideo = (index, delta) => {
    const newIndex = index + delta;
    if (newIndex < 0 || newIndex >= videos.length) return;
    const next = [...videos];
    const [item] = next.splice(index, 1);
    next.splice(newIndex, 0, item);
    setAttributes({ videos: next });
  };

  const addVideo = () => {
    const next = [
      ...videos,
      {
        id: makeId(),
        title: __("New video", "video-player-block"),
        description: "",
        source: "mp4",
        url: "",
        poster: "",
        duration: "",
        category: "",
        chapters: [],
      },
    ];
    setAttributes({ videos: next });
    setOpenIndex(next.length - 1);
  };

  return (
    <>
      <PanelBody
        className="bPlPanelBody"
        title={__("Gallery Items", "video-player-block")}
        initialOpen={true}
      >
        <div className="vpb-video-gallery-editor">
          {videos.map((video, index) => {
            const isOpen = index === openIndex;
            return (
              <div
                key={video.id || index}
                className={`vpb-vg-item-row ${isOpen ? "is-open" : "is-collapsed"}`}
              >
                <div className="vpb-vg-item-head">
                  <span className="vpb-vg-item-title">
                    {`${index + 1}. ${video.title || __("Untitled", "video-player-block")}`}
                  </span>
                  <div className="vpb-vg-item-actions">
                    <Button
                      isSmall
                      icon="arrow-up-alt2"
                      label={__("Move up", "video-player-block")}
                      onClick={() => moveVideo(index, -1)}
                      disabled={index === 0}
                    />
                    <Button
                      isSmall
                      icon="arrow-down-alt2"
                      label={__("Move down", "video-player-block")}
                      onClick={() => moveVideo(index, 1)}
                      disabled={index === videos.length - 1}
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
                      onClick={() => removeVideo(index)}
                    />
                  </div>
                </div>

                {isOpen && (
                  <div className="vpb-vg-item-body">
                    <TextControl
                      label={__("Title", "video-player-block")}
                      value={video.title || ""}
                      onChange={(val) => updateVideo(index, "title", val)}
                    />

                    <TextareaControl
                      label={__("Description", "video-player-block")}
                      value={video.description || ""}
                      onChange={(val) =>
                        updateVideo(index, "description", val)
                      }
                      rows={2}
                    />

                    <SelectControl
                      label={__("Source", "video-player-block")}
                      value={video.source || "mp4"}
                      options={sourceOptions}
                      onChange={(val) => updateVideo(index, "source", val)}
                    />

                    <TextControl
                      label={__("Video URL", "video-player-block")}
                      value={video.url || ""}
                      onChange={(val) => {
                        updateVideo(index, "url", val);
                        // Auto-detect source on paste
                        const detected = detectSource(val);
                        if (detected && detected !== video.source) {
                          updateVideo(index, "source", detected);
                        }
                      }}
                      placeholder="https://..."
                    />

                    <InlineMediaUpload
                      label={__("Poster / Thumbnail", "video-player-block")}
                      value={video.poster || ""}
                      types={["image"]}
                      onChange={(val) => updateVideo(index, "poster", val)}
                    />

                    <TextControl
                      label={__("Duration (display)", "video-player-block")}
                      value={video.duration || ""}
                      onChange={(val) => updateVideo(index, "duration", val)}
                      placeholder="e.g. 4:32"
                    />

                    <TextControl
                      label={__("Category", "video-player-block")}
                      value={video.category || ""}
                      onChange={(val) => updateVideo(index, "category", val)}
                      help={__(
                        "Used by the filter bar above the gallery.",
                        "video-player-block",
                      )}
                    />
                  </div>
                )}
              </div>
            );
          })}

          <Button
            variant="secondary"
            className="vpb-vg-add"
            icon="plus"
            onClick={addVideo}
          >
            {__("Add Video", "video-player-block")}
          </Button>
        </div>
      </PanelBody>

      <PanelBody
        className="bPlPanelBody"
        title={__("Layout", "video-player-block")}
        initialOpen={false}
      >
        <SelectControl
          label={__("Layout", "video-player-block")}
          value={layout}
          options={layoutOptions}
          onChange={(val) => setAttributes({ layout: val })}
        />

        <RangeControl
          label={__("Desktop columns", "video-player-block")}
          value={cols.desktop}
          min={1}
          max={6}
          onChange={(val) => updateColumns("desktop", val)}
        />
        <RangeControl
          label={__("Tablet columns", "video-player-block")}
          value={cols.tablet}
          min={1}
          max={4}
          onChange={(val) => updateColumns("tablet", val)}
        />
        <RangeControl
          label={__("Mobile columns", "video-player-block")}
          value={cols.mobile}
          min={1}
          max={3}
          onChange={(val) => updateColumns("mobile", val)}
        />

        <RangeControl
          label={__("Gap (px)", "video-player-block")}
          value={gap}
          min={0}
          max={64}
          onChange={(val) => setAttributes({ gap: val })}
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
      </PanelBody>

      <PanelBody
        className="bPlPanelBody"
        title={__("Playback", "video-player-block")}
        initialOpen={false}
      >
        <SelectControl
          label={__("Player Engine", "video-player-block")}
          value={playerEngine}
          options={playerEngineOptions}
          onChange={(val) => setAttributes({ playerEngine: val })}
          help={__(
            "The engine used inside the in-page player. Default uses the bundled Plyr/HTML5 player.",
            "video-player-block",
          )}
        />

        <SelectControl
          label={__("Playback Mode", "video-player-block")}
          value={playbackMode}
          options={playbackModeOptions}
          onChange={(val) => setAttributes({ playbackMode: val })}
        />

        <ToggleControl
          label={__("Autoplay next video", "video-player-block")}
          checked={!!autoplayNext}
          onChange={(val) => setAttributes({ autoplayNext: val })}
        />

        <ToggleControl
          label={__("Loop playlist", "video-player-block")}
          checked={!!loop}
          onChange={(val) => setAttributes({ loop: val })}
        />

        <ToggleControl
          label={__("Lazy-load thumbnails", "video-player-block")}
          checked={!!lazyLoad}
          onChange={(val) => setAttributes({ lazyLoad: val })}
        />
      </PanelBody>

      <PanelBody
        className="bPlPanelBody"
        title={__("Filters", "video-player-block")}
        initialOpen={false}
      >
        <ToggleControl
          label={__("Show category filters", "video-player-block")}
          checked={!!showFilters}
          onChange={(val) => setAttributes({ showFilters: val })}
        />
        <SelectControl
          label={__("Filter style", "video-player-block")}
          value={filterStyle}
          options={filterStyleOptions}
          onChange={(val) => setAttributes({ filterStyle: val })}
        />
        <TextControl
          label={__("Empty state text", "video-player-block")}
          value={emptyStateText}
          onChange={(val) => setAttributes({ emptyStateText: val })}
        />
      </PanelBody>

      <PanelBody
        className="bPlPanelBody"
        title={__("Tile Metadata", "video-player-block")}
        initialOpen={false}
      >
        <ToggleControl
          label={__("Show title", "video-player-block")}
          checked={!!showTitle}
          onChange={(val) => setAttributes({ showTitle: val })}
        />
        <ToggleControl
          label={__("Show description", "video-player-block")}
          checked={!!showDescription}
          onChange={(val) => setAttributes({ showDescription: val })}
        />
        <ToggleControl
          label={__("Show duration", "video-player-block")}
          checked={!!showDuration}
          onChange={(val) => setAttributes({ showDuration: val })}
        />
        <ToggleControl
          label={__("Show play icon", "video-player-block")}
          checked={!!showPlayIcon}
          onChange={(val) => setAttributes({ showPlayIcon: val })}
        />
      </PanelBody>

      {layout === "carousel" && (
        <PanelBody
          className="bPlPanelBody"
          title={__("Carousel Settings", "video-player-block")}
          initialOpen={false}
        >
          <RangeControl
            label={__("Slides to show", "video-player-block")}
            value={cs.slidesToShow}
            min={1}
            max={6}
            onChange={(val) => updateCarousel("slidesToShow", val)}
          />
          <RangeControl
            label={__("Slides to scroll", "video-player-block")}
            value={cs.slidesToScroll}
            min={1}
            max={6}
            onChange={(val) => updateCarousel("slidesToScroll", val)}
          />
          <ToggleControl
            label={__("Autoplay", "video-player-block")}
            checked={!!cs.autoplay}
            onChange={(val) => updateCarousel("autoplay", val)}
          />
          <RangeControl
            label={__("Autoplay speed (ms)", "video-player-block")}
            value={cs.autoplaySpeed}
            min={1000}
            max={15000}
            step={500}
            onChange={(val) => updateCarousel("autoplaySpeed", val)}
          />
          <ToggleControl
            label={__("Infinite loop", "video-player-block")}
            checked={!!cs.infinite}
            onChange={(val) => updateCarousel("infinite", val)}
          />
          <ToggleControl
            label={__("Show arrows", "video-player-block")}
            checked={!!cs.showArrows}
            onChange={(val) => updateCarousel("showArrows", val)}
          />
          <ToggleControl
            label={__("Show dots", "video-player-block")}
            checked={!!cs.showDots}
            onChange={(val) => updateCarousel("showDots", val)}
          />
        </PanelBody>
      )}
    </>
  );
};

export default General;
