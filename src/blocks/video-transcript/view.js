import { createRoot } from 'react-dom/client';
import './style.scss';
import Style from './Components/Common/Style';
import TranscriptPlayer from './Components/Common/TranscriptPlayer';

document.addEventListener('DOMContentLoaded', () => {
	const blockElements = document.querySelectorAll(
		'.wp-block-vpb-video-transcript',
	);

	blockElements.forEach((blockEl) => {
		const attributes = JSON.parse(blockEl.dataset.attributes);

		createRoot(blockEl).render(
			<>
				<Style attributes={attributes} id={blockEl.id} />
				<TranscriptPlayer attributes={attributes} isEditor={false} />
			</>,
		);

		blockEl.removeAttribute('data-attributes');
	});
});
