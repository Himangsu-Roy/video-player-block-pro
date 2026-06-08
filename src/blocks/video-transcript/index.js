import { registerBlockType } from '@wordpress/blocks';

import './editor.scss';
import metadata from './block.json';
import Edit from './Components/Backend/Edit';
import { blockIcon } from './utils/icons';
import { isBlockEnabled } from '../../Components/Common/utils/functions';

if (isBlockEnabled(metadata.name)) {
	registerBlockType(metadata, {
		icon: blockIcon,
		edit: Edit,
		save: () => null,
	});
}
