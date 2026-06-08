import { useState, useRef, useEffect, useCallback } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import { formatTime, findActiveCueIndex, getAspectRatioCss } from '../../utils/functions';

/**
 * Build the embeddable video element (native or iframe).
 */
const VideoElement = ({ videoSource, videoUrl, posterUrl, aspectRatio, onRef }) => {
	const arCss = getAspectRatioCss(aspectRatio);

	if (videoSource === 'youtube') {
		const ytId = extractYouTubeId(videoUrl);
		const src = ytId
			? `https://www.youtube-nocookie.com/embed/${ytId}?enablejsapi=1&origin=${encodeURIComponent(window.location.origin)}`
			: '';
		return (
			<iframe
				ref={onRef}
				src={src}
				title={__('Video', 'video-player-block')}
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
				allowFullScreen
				style={{ width: '100%', height: '100%', border: 'none' }}
			/>
		);
	}

	if (videoSource === 'vimeo') {
		const vimeoId = extractVimeoId(videoUrl);
		const src = vimeoId ? `https://player.vimeo.com/video/${vimeoId}?api=1` : '';
		return (
			<iframe
				ref={onRef}
				src={src}
				title={__('Video', 'video-player-block')}
				allow="autoplay; fullscreen; picture-in-picture"
				allowFullScreen
				style={{ width: '100%', height: '100%', border: 'none' }}
			/>
		);
	}

	// self-hosted or direct URL
	return (
		<video
			ref={onRef}
			src={videoUrl}
			poster={posterUrl || undefined}
			controls
			playsInline
			style={{ width: '100%', height: '100%', display: 'block', backgroundColor: '#000' }}
		/>
	);
};

const extractYouTubeId = (url) => {
	if (!url) return '';
	const m = url.match(/(?:youtube\.com\/(?:watch\?v=|embed\/|shorts\/)|youtu\.be\/)([a-zA-Z0-9_-]{11})/);
	return m ? m[1] : '';
};

const extractVimeoId = (url) => {
	if (!url) return '';
	const m = url.match(/vimeo\.com\/(\d+)/);
	return m ? m[1] : '';
};

const TranscriptPlayer = ({ attributes, isEditor = false }) => {
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
	} = attributes;

	const [currentTime, setCurrentTime] = useState(0);
	const [searchQuery, setSearchQuery] = useState('');
	const videoRef = useRef(null);
	const cueRefs = useRef({});

	const isNativeVideo = videoSource !== 'youtube' && videoSource !== 'vimeo';

	// Listen to timeupdate on native video elements
	useEffect(() => {
		if (!isNativeVideo) return;
		const el = videoRef.current;
		if (!el) return;

		const onTimeUpdate = () => setCurrentTime(el.currentTime);
		el.addEventListener('timeupdate', onTimeUpdate);
		return () => el.removeEventListener('timeupdate', onTimeUpdate);
	}, [isNativeVideo, videoUrl]);

	const activeCueIndex = findActiveCueIndex(transcriptEntries, currentTime);

	// Auto-scroll the active cue into view
	useEffect(() => {
		if (!autoScroll || activeCueIndex < 0) return;
		const entry = transcriptEntries[activeCueIndex];
		if (!entry) return;
		const el = cueRefs.current[entry.id];
		if (el && el.scrollIntoView) {
			el.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
		}
	}, [activeCueIndex, autoScroll, transcriptEntries]);

	const handleCueClick = useCallback((entry) => {
		if (isNativeVideo && videoRef.current) {
			videoRef.current.currentTime = entry.startTime;
			videoRef.current.play().catch(() => {});
		}
		// For YouTube/Vimeo, postMessage API would be needed; skip in editor
	}, [isNativeVideo]);

	const filteredEntries = searchQuery.trim()
		? transcriptEntries.filter((e) =>
			e.text.toLowerCase().includes(searchQuery.toLowerCase())
		)
		: transcriptEntries;

	const layoutClass = `vpbt-layout-${layout}`;

	return (
		<div className={`vpbt-layout-wrapper ${layoutClass}`}>
			{/* Video Column */}
			<div className="vpbt-video-col">
				<div className="vpbt-video-wrapper">
					<VideoElement
						videoSource={videoSource}
						videoUrl={videoUrl}
						posterUrl={posterUrl}
						aspectRatio={aspectRatio}
						onRef={videoRef}
					/>
				</div>
			</div>

			{/* Transcript Column */}
			<div className="vpbt-transcript-col">
				<div className="vpbt-transcript-panel">
					<div className="vpbt-transcript-header">
						{__('Transcript', 'video-player-block')}
					</div>

					{showSearch && (
						<div className="vpbt-search-wrap">
							<input
								type="search"
								className="vpbt-search-input"
								placeholder={searchPlaceholder}
								value={searchQuery}
								onChange={(e) => setSearchQuery(e.target.value)}
								aria-label={__('Search transcript', 'video-player-block')}
							/>
						</div>
					)}

					<ul
						className="vpbt-cues-list"
						style={{ maxHeight: layout === 'stacked' ? `${transcriptHeight}px` : `${transcriptHeight}px` }}
						role="list"
						aria-label={__('Video transcript', 'video-player-block')}
					>
						{filteredEntries.length === 0 && (
							<li className="vpbt-no-results">
								{__('No results found.', 'video-player-block')}
							</li>
						)}
						{filteredEntries.map((entry, idx) => {
							const isActive = activeCueIndex >= 0 && transcriptEntries[activeCueIndex]?.id === entry.id;
							return (
								<li
									key={entry.id || idx}
									ref={(el) => { cueRefs.current[entry.id] = el; }}
									className={`vpbt-cue${isActive ? ' vpbt-cue--active' : ''}`}
									onClick={() => handleCueClick(entry)}
									role="button"
									tabIndex={0}
									aria-label={`${formatTime(entry.startTime)}: ${entry.text}`}
									onKeyDown={(e) => {
										if (e.key === 'Enter' || e.key === ' ') {
											e.preventDefault();
											handleCueClick(entry);
										}
									}}
								>
									{showTimestamps && (
										<span className="vpbt-cue-timestamp" aria-hidden="true">
											{formatTime(entry.startTime)}
										</span>
									)}
									<span className="vpbt-cue-text">{entry.text}</span>
								</li>
							);
						})}
					</ul>
				</div>
			</div>
		</div>
	);
};

export default TranscriptPlayer;
