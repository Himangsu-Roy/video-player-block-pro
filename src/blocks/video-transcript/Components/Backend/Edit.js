import { useBlockProps } from '@wordpress/block-editor';
import Settings from './Settings/Settings';
import Style from '../Common/Style';
import TranscriptPlayer from '../Common/TranscriptPlayer';

const Edit = ({ attributes, setAttributes, clientId }) => {
	return (
		<>
			<Settings attributes={attributes} setAttributes={setAttributes} />

			<div {...useBlockProps({ draggable: false, id: `block-${clientId}` })}>
				<Style attributes={attributes} id={`block-${clientId}`} />
				<TranscriptPlayer attributes={attributes} isEditor={true} />
			</div>
		</>
	);
};

export default Edit;
