import { __ } from '@wordpress/i18n';
import {
	PanelBody,
	RangeControl,
	ColorPicker,
} from '@wordpress/components';

const ColorField = ({ label, value, onChange }) => (
	<div style={{ marginBottom: '12px' }}>
		<label style={{ display: 'block', fontSize: '11px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '6px', color: '#1e1e1e' }}>
			{label}
		</label>
		<ColorPicker
			color={value}
			onChange={onChange}
			enableAlpha={false}
		/>
	</div>
);

const Style = ({ attributes, setAttributes }) => {
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
	} = attributes;

	return (
		<>
			{/* Typography */}
			<PanelBody
				className="bPlPanelBody"
				title={__('Typography', 'video-player-block')}
				initialOpen={true}
			>
				<RangeControl
					label={__('Font Size (px)', 'video-player-block')}
					value={transcriptFontSize}
					min={11}
					max={24}
					step={1}
					onChange={(val) => setAttributes({ transcriptFontSize: val })}
				/>

				<div className="mt15">
					<RangeControl
						label={__('Line Height', 'video-player-block')}
						value={transcriptLineHeight}
						min={1}
						max={2.5}
						step={0.05}
						onChange={(val) => setAttributes({ transcriptLineHeight: val })}
					/>
				</div>

				<div className="mt15">
					<RangeControl
						label={__('Cue Padding (px)', 'video-player-block')}
						value={cuePadding}
						min={4}
						max={32}
						step={2}
						onChange={(val) => setAttributes({ cuePadding: val })}
					/>
				</div>
			</PanelBody>

			{/* Panel Appearance */}
			<PanelBody
				className="bPlPanelBody"
				title={__('Panel Appearance', 'video-player-block')}
				initialOpen={false}
			>
				<RangeControl
					label={__('Border Radius (px)', 'video-player-block')}
					value={panelBorderRadius}
					min={0}
					max={24}
					step={1}
					onChange={(val) => setAttributes({ panelBorderRadius: val })}
				/>

				<div className="mt15">
					<ColorField
						label={__('Panel Background', 'video-player-block')}
						value={panelBg}
						onChange={(val) => setAttributes({ panelBg: val })}
					/>
				</div>

				<ColorField
					label={__('Panel Border Color', 'video-player-block')}
					value={panelBorderColor}
					onChange={(val) => setAttributes({ panelBorderColor: val })}
				/>

				<ColorField
					label={__('Header Background', 'video-player-block')}
					value={panelHeaderBg}
					onChange={(val) => setAttributes({ panelHeaderBg: val })}
				/>

				<ColorField
					label={__('Header Text Color', 'video-player-block')}
					value={panelHeaderTextColor}
					onChange={(val) => setAttributes({ panelHeaderTextColor: val })}
				/>
			</PanelBody>

			{/* Cue Colors */}
			<PanelBody
				className="bPlPanelBody"
				title={__('Cue Colors', 'video-player-block')}
				initialOpen={false}
			>
				<ColorField
					label={__('Cue Text Color', 'video-player-block')}
					value={cueTextColor}
					onChange={(val) => setAttributes({ cueTextColor: val })}
				/>

				<ColorField
					label={__('Active Cue Background', 'video-player-block')}
					value={highlightColor}
					onChange={(val) => setAttributes({ highlightColor: val })}
				/>

				<ColorField
					label={__('Active Cue Text Color', 'video-player-block')}
					value={highlightTextColor}
					onChange={(val) => setAttributes({ highlightTextColor: val })}
				/>

				<ColorField
					label={__('Cue Hover Background', 'video-player-block')}
					value={cueHoverBg}
					onChange={(val) => setAttributes({ cueHoverBg: val })}
				/>

				<ColorField
					label={__('Timestamp Color', 'video-player-block')}
					value={timestampColor}
					onChange={(val) => setAttributes({ timestampColor: val })}
				/>
			</PanelBody>

			{/* Search Bar */}
			<PanelBody
				className="bPlPanelBody"
				title={__('Search Bar', 'video-player-block')}
				initialOpen={false}
			>
				<ColorField
					label={__('Search Background', 'video-player-block')}
					value={searchBg}
					onChange={(val) => setAttributes({ searchBg: val })}
				/>

				<ColorField
					label={__('Search Border Color', 'video-player-block')}
					value={searchBorderColor}
					onChange={(val) => setAttributes({ searchBorderColor: val })}
				/>
			</PanelBody>
		</>
	);
};

export default Style;
