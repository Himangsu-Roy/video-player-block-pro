import { __ } from '@wordpress/i18n';
import {
	PanelBody,
	TextControl,
	TextareaControl,
	ToggleControl,
	SelectControl,
	RangeControl,
	Button,
	__experimentalUnitControl as UnitControl,
} from '@wordpress/components';
import { MediaUpload, MediaUploadCheck } from '@wordpress/block-editor';
import {
	layoutOptions,
	aspectRatioOptions,
	videoSourceOptions,
	splitRatioOptions,
} from '../../../../utils/options';
import { formatTime } from '../../../../utils/functions';

const General = ({ attributes, setAttributes }) => {
	const {
		videoSource = 'url',
		videoUrl = '',
		posterUrl = '',
		aspectRatio = '16:9',
		transcriptEntries = [],
		layout = 'side-by-side',
		transcriptHeight = 420,
		showSearch = true,
		searchPlaceholder = 'Search transcript...',
		autoScroll = true,
		showTimestamps = true,
		seoJsonLd = true,
		containerMaxWidth = '960px',
		videoTitle = '',
		videoDescription = '',
		uploadDate = '',
		videoSplitRatio = '60-40',
	} = attributes;

	const updateEntry = (index, field, value) => {
		const next = transcriptEntries.map((e, i) =>
			i === index ? { ...e, [field]: value } : e
		);
		setAttributes({ transcriptEntries: next });
	};

	const addEntry = () => {
		const last = transcriptEntries[transcriptEntries.length - 1];
		const start = last ? last.endTime : 0;
		const newEntry = {
			id: `cue-${Date.now()}`,
			startTime: start,
			endTime: start + 5,
			text: '',
		};
		setAttributes({ transcriptEntries: [...transcriptEntries, newEntry] });
	};

	const removeEntry = (index) => {
		const next = transcriptEntries.filter((_, i) => i !== index);
		setAttributes({ transcriptEntries: next });
	};

	const moveEntry = (from, to) => {
		if (to < 0 || to >= transcriptEntries.length) return;
		const next = [...transcriptEntries];
		const [item] = next.splice(from, 1);
		next.splice(to, 0, item);
		setAttributes({ transcriptEntries: next });
	};

	return (
		<>
			{/* Video Source */}
			<PanelBody
				className="bPlPanelBody"
				title={__('Video Source', 'video-player-block')}
				initialOpen={true}
			>
				<SelectControl
					label={__('Source Type', 'video-player-block')}
					value={videoSource}
					options={videoSourceOptions}
					onChange={(val) => setAttributes({ videoSource: val })}
				/>

				<TextControl
					className="mt15"
					label={__('Video URL', 'video-player-block')}
					value={videoUrl}
					placeholder="https://example.com/video.mp4"
					onChange={(val) => setAttributes({ videoUrl: val })}
					help={videoSource === 'youtube'
						? __('Paste the YouTube watch URL or shortened URL.', 'video-player-block')
						: videoSource === 'vimeo'
							? __('Paste the Vimeo video URL.', 'video-player-block')
							: __('Direct URL to your MP4/WebM/OGG file.', 'video-player-block')
					}
				/>

				{(videoSource === 'url' || videoSource === 'self') && (
					<>
						<div className="mt15">
							<TextControl
								label={__('Poster Image URL', 'video-player-block')}
								value={posterUrl}
								placeholder="https://example.com/poster.jpg"
								onChange={(val) => setAttributes({ posterUrl: val })}
							/>
						</div>
						<MediaUploadCheck>
							<MediaUpload
								onSelect={(media) => setAttributes({ posterUrl: media.url })}
								allowedTypes={['image']}
								render={({ open }) => (
									<Button
										className="mt5"
										variant="secondary"
										onClick={open}
									>
										{__('Select Poster from Library', 'video-player-block')}
									</Button>
								)}
							/>
						</MediaUploadCheck>
					</>
				)}

				<div className="mt15">
					<SelectControl
						label={__('Aspect Ratio', 'video-player-block')}
						value={aspectRatio}
						options={aspectRatioOptions}
						onChange={(val) => setAttributes({ aspectRatio: val })}
					/>
				</div>
			</PanelBody>

			{/* Layout */}
			<PanelBody
				className="bPlPanelBody"
				title={__('Layout', 'video-player-block')}
				initialOpen={false}
			>
				<SelectControl
					label={__('Layout', 'video-player-block')}
					value={layout}
					options={layoutOptions}
					onChange={(val) => setAttributes({ layout: val })}
				/>

				{layout !== 'stacked' && (
					<div className="mt15">
						<SelectControl
							label={__('Column Split', 'video-player-block')}
							value={videoSplitRatio}
							options={splitRatioOptions}
							onChange={(val) => setAttributes({ videoSplitRatio: val })}
							help={__('Video width vs. transcript width.', 'video-player-block')}
						/>
					</div>
				)}

				<div className="mt15">
					<UnitControl
						label={__('Container Max Width', 'video-player-block')}
						value={containerMaxWidth}
						onChange={(val) => setAttributes({ containerMaxWidth: val || '960px' })}
						units={[
							{ value: 'px', label: 'px', default: 960 },
							{ value: '%', label: '%', default: 100 },
							{ value: 'vw', label: 'vw', default: 100 },
						]}
					/>
				</div>

				<div className="mt15">
					<RangeControl
						label={__('Transcript Panel Height (px)', 'video-player-block')}
						value={transcriptHeight}
						min={200}
						max={800}
						step={10}
						onChange={(val) => setAttributes({ transcriptHeight: val })}
					/>
				</div>
			</PanelBody>

			{/* Transcript Options */}
			<PanelBody
				className="bPlPanelBody"
				title={__('Transcript Options', 'video-player-block')}
				initialOpen={false}
			>
				<ToggleControl
					label={__('Show Search Bar', 'video-player-block')}
					checked={showSearch}
					onChange={(val) => setAttributes({ showSearch: val })}
				/>

				{showSearch && (
					<TextControl
						label={__('Search Placeholder Text', 'video-player-block')}
						value={searchPlaceholder}
						onChange={(val) => setAttributes({ searchPlaceholder: val })}
					/>
				)}

				<ToggleControl
					label={__('Auto-Scroll to Active Cue', 'video-player-block')}
					checked={autoScroll}
					onChange={(val) => setAttributes({ autoScroll: val })}
				/>

				<ToggleControl
					label={__('Show Timestamps', 'video-player-block')}
					checked={showTimestamps}
					onChange={(val) => setAttributes({ showTimestamps: val })}
				/>
			</PanelBody>

			{/* SEO / Structured Data */}
			<PanelBody
				className="bPlPanelBody"
				title={__('SEO & Structured Data', 'video-player-block')}
				initialOpen={false}
			>
				<ToggleControl
					label={__('Inject VideoObject JSON-LD', 'video-player-block')}
					checked={seoJsonLd}
					onChange={(val) => setAttributes({ seoJsonLd: val })}
					help={__('Adds structured data so Google can index your video and transcript.', 'video-player-block')}
				/>

				{seoJsonLd && (
					<>
						<TextControl
							className="mt15"
							label={__('Video Title', 'video-player-block')}
							value={videoTitle}
							onChange={(val) => setAttributes({ videoTitle: val })}
							placeholder={__('My Awesome Video', 'video-player-block')}
						/>
						<TextareaControl
							label={__('Video Description', 'video-player-block')}
							value={videoDescription}
							onChange={(val) => setAttributes({ videoDescription: val })}
							rows={3}
						/>
						<TextControl
							label={__('Upload Date (YYYY-MM-DD)', 'video-player-block')}
							value={uploadDate}
							onChange={(val) => setAttributes({ uploadDate: val })}
							placeholder="2024-01-15"
						/>
					</>
				)}
			</PanelBody>

			{/* Transcript Cues Editor */}
			<PanelBody
				className="bPlPanelBody"
				title={__('Transcript Cues', 'video-player-block')}
				initialOpen={true}
			>
				<p style={{ fontSize: '12px', color: '#666', marginBottom: '12px' }}>
					{__('Each cue is a block of text synced to a time range in the video. Click a cue on the frontend to jump to that moment.', 'video-player-block')}
				</p>

				{transcriptEntries.map((entry, index) => (
					<div
						key={entry.id || index}
						style={{
							marginBottom: '12px',
							padding: '10px',
							border: '1px solid #ddd',
							borderRadius: '4px',
							background: '#fafafa',
						}}
					>
						<div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
							<strong style={{ fontSize: '12px', color: '#555' }}>
								{__('Cue', 'video-player-block')} #{index + 1}
								{' '}
								<span style={{ color: '#888', fontWeight: 'normal' }}>
									({formatTime(entry.startTime)} – {formatTime(entry.endTime)})
								</span>
							</strong>
							<div style={{ display: 'flex', gap: '4px' }}>
								<Button
									isSmall
									variant="tertiary"
									disabled={index === 0}
									onClick={() => moveEntry(index, index - 1)}
									aria-label={__('Move up', 'video-player-block')}
								>
									↑
								</Button>
								<Button
									isSmall
									variant="tertiary"
									disabled={index === transcriptEntries.length - 1}
									onClick={() => moveEntry(index, index + 1)}
									aria-label={__('Move down', 'video-player-block')}
								>
									↓
								</Button>
								<Button
									isSmall
									isDestructive
									onClick={() => removeEntry(index)}
									aria-label={__('Remove cue', 'video-player-block')}
								>
									✕
								</Button>
							</div>
						</div>

						<div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px', marginBottom: '8px' }}>
							<TextControl
								label={__('Start (sec)', 'video-player-block')}
								type="number"
								min={0}
								step={0.1}
								value={entry.startTime}
								onChange={(val) => updateEntry(index, 'startTime', parseFloat(val) || 0)}
							/>
							<TextControl
								label={__('End (sec)', 'video-player-block')}
								type="number"
								min={0}
								step={0.1}
								value={entry.endTime}
								onChange={(val) => updateEntry(index, 'endTime', parseFloat(val) || 0)}
							/>
						</div>

						<TextareaControl
							label={__('Text', 'video-player-block')}
							value={entry.text}
							rows={2}
							onChange={(val) => updateEntry(index, 'text', val)}
						/>
					</div>
				))}

				<Button
					variant="secondary"
					style={{ width: '100%', justifyContent: 'center' }}
					onClick={addEntry}
				>
					+ {__('Add Cue', 'video-player-block')}
				</Button>
			</PanelBody>
		</>
	);
};

export default General;
