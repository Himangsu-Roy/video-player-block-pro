import { __ } from '@wordpress/i18n';

export const generalStyleTabs = [
	{ name: 'general', title: __('General', 'video-player-block') },
	{ name: 'style', title: __('Style', 'video-player-block') }
];

export const layoutOptions = [
	{ label: __('Side by Side (Video Left)', 'video-player-block'), value: 'side-by-side' },
	{ label: __('Side by Side (Transcript Left)', 'video-player-block'), value: 'transcript-left' },
	{ label: __('Stacked (Video Above)', 'video-player-block'), value: 'stacked' },
];

export const aspectRatioOptions = [
	{ label: '16:9 (Widescreen)', value: '16:9' },
	{ label: '4:3 (Standard)', value: '4:3' },
	{ label: '21:9 (Ultrawide)', value: '21:9' },
	{ label: '1:1 (Square)', value: '1:1' },
];

export const videoSourceOptions = [
	{ label: __('Direct URL', 'video-player-block'), value: 'url' },
	{ label: __('Self Hosted', 'video-player-block'), value: 'self' },
	{ label: __('YouTube', 'video-player-block'), value: 'youtube' },
	{ label: __('Vimeo', 'video-player-block'), value: 'vimeo' },
];

export const splitRatioOptions = [
	{ label: '50% / 50%', value: '50-50' },
	{ label: '60% / 40%', value: '60-40' },
	{ label: '40% / 60%', value: '40-60' },
	{ label: '55% / 45%', value: '55-45' },
	{ label: '45% / 55%', value: '45-55' },
];
