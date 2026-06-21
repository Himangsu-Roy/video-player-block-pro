
import { __ } from '@wordpress/i18n';
import { InspectorControls, BlockControls, AlignmentToolbar } from '@wordpress/block-editor';
import { TabPanel } from '@wordpress/components';
import { tabController } from '../../../../../../../bpl-tools/utils/functions';
import { generalStyleTabs } from '../../../utils/options';
import General from './General/General';
import Style from './Style/Style';

const Settings = ({ attributes, setAttributes }) => {
	const { alignment } = attributes;

	return <>
		<InspectorControls>
			<TabPanel className='bPlTabPanel vpb-inspector' activeClass='activeTab'
				tabs={generalStyleTabs}
				onSelect={tabController}
			>
				{
					tab => <>
						{'general' === tab.name && <General attributes={attributes} setAttributes={setAttributes} />}

						{'style' === tab.name && <Style attributes={attributes} setAttributes={setAttributes} />}
					</>
				}
			</TabPanel>
		</InspectorControls>


		<BlockControls>

			<AlignmentToolbar value={alignment} onChange={val => setAttributes({ alignment: val })} describedBy={__('Block Name Alignment')} alignmentControls={[
				{ title: __('Block Name in left', 'video-player-block'), align: 'left', icon: 'align-left' },
				{ title: __('Block Name in center', 'video-player-block'), align: 'center', icon: 'align-center' },
				{ title: __('Block Name in right', 'video-player-block'), align: 'right', icon: 'align-right' }
			]} />

		</BlockControls>
	</>;
};
export default Settings;