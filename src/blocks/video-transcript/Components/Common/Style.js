import { getAspectRatioCss, getSplitWidths } from '../../utils/functions';

const Style = ({ attributes, id }) => {
	const {
		highlightColor = '#EEF3FF',
		highlightTextColor = '#136EF5',
		transcriptFontSize = 15,
		transcriptLineHeight = 1.6,
		timestampColor = '#888888',
		panelBg = '#ffffff',
		panelBorderRadius = 8,
		panelBorderColor = '#e5e7eb',
		searchBg = '#f9fafb',
		searchBorderColor = '#e5e7eb',
		cueHoverBg = '#f3f4f6',
		panelHeaderBg = '#f9fafb',
		panelHeaderTextColor = '#374151',
		cueTextColor = '#374151',
		cuePadding = 12,
		aspectRatio = '16:9',
		containerMaxWidth = '960px',
		layout = 'side-by-side',
		videoSplitRatio = '60-40',
	} = attributes;

	const sel = `#${id}`;
	const arCss = getAspectRatioCss(aspectRatio);
	const splits = getSplitWidths(videoSplitRatio, layout);

	return (
		<style>{`
${sel} {
  max-width: ${containerMaxWidth};
  margin-left: auto;
  margin-right: auto;
}

${sel} .vpbt-layout-wrapper {
  display: flex;
  gap: 16px;
  align-items: flex-start;
}

${sel} .vpbt-layout-wrapper.vpbt-layout-stacked {
  flex-direction: column;
}

${sel} .vpbt-layout-wrapper.vpbt-layout-side-by-side,
${sel} .vpbt-layout-wrapper.vpbt-layout-transcript-left {
  flex-direction: row;
}

${sel} .vpbt-layout-wrapper.vpbt-layout-transcript-left .vpbt-video-col {
  order: 2;
}

${sel} .vpbt-layout-wrapper.vpbt-layout-transcript-left .vpbt-transcript-col {
  order: 1;
}

${sel} .vpbt-layout-wrapper.vpbt-layout-side-by-side .vpbt-video-col,
${sel} .vpbt-layout-wrapper.vpbt-layout-transcript-left .vpbt-video-col {
  width: ${splits.video};
  flex-shrink: 0;
}

${sel} .vpbt-layout-wrapper.vpbt-layout-side-by-side .vpbt-transcript-col,
${sel} .vpbt-layout-wrapper.vpbt-layout-transcript-left .vpbt-transcript-col {
  width: ${splits.transcript};
  flex-shrink: 0;
}

${sel} .vpbt-layout-wrapper.vpbt-layout-stacked .vpbt-video-col,
${sel} .vpbt-layout-wrapper.vpbt-layout-stacked .vpbt-transcript-col {
  width: 100%;
}

${sel} .vpbt-video-wrapper {
  position: relative;
  width: 100%;
  aspect-ratio: ${arCss};
  background: #000;
  border-radius: ${panelBorderRadius}px;
  overflow: hidden;
}

${sel} .vpbt-video-wrapper video,
${sel} .vpbt-video-wrapper iframe {
  width: 100%;
  height: 100%;
  display: block;
  border: none;
}

${sel} .vpbt-transcript-panel {
  background: ${panelBg};
  border: 1px solid ${panelBorderColor};
  border-radius: ${panelBorderRadius}px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

${sel} .vpbt-transcript-header {
  background: ${panelHeaderBg};
  color: ${panelHeaderTextColor};
  padding: 10px 14px;
  font-size: 13px;
  font-weight: 600;
  border-bottom: 1px solid ${panelBorderColor};
  text-transform: uppercase;
  letter-spacing: 0.04em;
}

${sel} .vpbt-search-wrap {
  padding: 8px 10px;
  border-bottom: 1px solid ${panelBorderColor};
  background: ${searchBg};
}

${sel} .vpbt-search-input {
  width: 100%;
  padding: 7px 10px;
  border: 1px solid ${searchBorderColor};
  border-radius: 4px;
  font-size: 13px;
  background: #fff;
  box-sizing: border-box;
  outline: none;
}

${sel} .vpbt-search-input:focus {
  border-color: ${highlightTextColor};
  box-shadow: 0 0 0 2px ${highlightColor};
}

${sel} .vpbt-cues-list {
  overflow-y: auto;
  flex: 1;
  padding: 0;
  margin: 0;
  list-style: none;
}

${sel} .vpbt-cue {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  padding: ${cuePadding}px 14px;
  cursor: pointer;
  font-size: ${transcriptFontSize}px;
  line-height: ${transcriptLineHeight};
  color: ${cueTextColor};
  border-bottom: 1px solid ${panelBorderColor}40;
  transition: background 0.15s ease;
}

${sel} .vpbt-cue:last-child {
  border-bottom: none;
}

${sel} .vpbt-cue:hover {
  background: ${cueHoverBg};
}

${sel} .vpbt-cue.vpbt-cue--active {
  background: ${highlightColor};
  color: ${highlightTextColor};
}

${sel} .vpbt-cue.vpbt-cue--active .vpbt-cue-timestamp {
  color: ${highlightTextColor};
  opacity: 0.75;
}

${sel} .vpbt-cue.vpbt-cue--hidden {
  display: none;
}

${sel} .vpbt-cue-timestamp {
  flex-shrink: 0;
  font-size: 12px;
  font-variant-numeric: tabular-nums;
  color: ${timestampColor};
  padding-top: 2px;
  min-width: 38px;
}

${sel} .vpbt-cue-text {
  flex: 1;
}

${sel} .vpbt-no-results {
  padding: 16px 14px;
  color: #9ca3af;
  font-size: 13px;
  text-align: center;
}

@media (max-width: 640px) {
  ${sel} .vpbt-layout-wrapper.vpbt-layout-side-by-side,
  ${sel} .vpbt-layout-wrapper.vpbt-layout-transcript-left {
    flex-direction: column;
  }

  ${sel} .vpbt-layout-wrapper .vpbt-video-col,
  ${sel} .vpbt-layout-wrapper .vpbt-transcript-col {
    width: 100% !important;
    order: unset !important;
  }
}
		`}</style>
	);
};

export default Style;
