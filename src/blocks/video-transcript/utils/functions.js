/**
 * Format seconds to MM:SS string.
 * @param {number} seconds
 * @returns {string}
 */
export const formatTime = (seconds) => {
	if (typeof seconds !== 'number' || isNaN(seconds)) return '00:00';
	const m = Math.floor(seconds / 60);
	const s = Math.floor(seconds % 60);
	return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
};

/**
 * Find the active cue index for a given playback time.
 * @param {Array} entries
 * @param {number} currentTime
 * @returns {number} index or -1
 */
export const findActiveCueIndex = (entries, currentTime) => {
	if (!Array.isArray(entries)) return -1;
	for (let i = 0; i < entries.length; i++) {
		const entry = entries[i];
		if (currentTime >= entry.startTime && currentTime < entry.endTime) {
			return i;
		}
	}
	return -1;
};

/**
 * Get aspect ratio CSS value from the "W:H" string.
 * @param {string} ratio
 * @returns {string}
 */
export const getAspectRatioCss = (ratio) => {
	if (!ratio) return '16 / 9';
	return ratio.replace(':', ' / ');
};

/**
 * Build the column widths from the split ratio string.
 * @param {string} splitRatio e.g. "60-40"
 * @returns {{ video: string, transcript: string }}
 */
export const getSplitWidths = (splitRatio, layout) => {
	const parts = (splitRatio || '60-40').split('-');
	const a = parseInt(parts[0], 10) || 60;
	const b = parseInt(parts[1], 10) || 40;

	if (layout === 'transcript-left') {
		return { video: `${b}%`, transcript: `${a}%` };
	}
	return { video: `${a}%`, transcript: `${b}%` };
};

/**
 * Detect the video source type from a URL. YouTube and Vimeo links are
 * recognised by their host patterns; everything else is treated as a direct /
 * self-hosted URL. Used to drop the manual "Source Type" control — the source
 * is inferred from the pasted Video URL instead.
 */
export const detectSource = (url = '') => {
	if (/(?:youtube\.com\/(?:watch\?v=|embed\/|shorts\/)|youtu\.be\/)/i.test(url)) return 'youtube';
	if (/vimeo\.com\/\d+/i.test(url)) return 'vimeo';
	return 'url';
};
