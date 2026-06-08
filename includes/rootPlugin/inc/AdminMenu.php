<?php
namespace VPBP;
if ( ! defined( 'ABSPATH' ) ) exit;

class AdminMenu  {
    function __construct() {
        add_action('admin_menu', [$this, 'adminMenu']);
    }
    function adminMenu(){
        add_submenu_page(
            'edit.php?post_type=video-player-block',
            __('Help - bPlugins', 'video-player-block'),
            __('Help & Demos', 'video-player-block'),
            'manage_options',
            'vpb-help-demo',
            [$this, 'renderDashboardPage']
        );
    }

    function renderDashboardPage(){
        ?>
            <div
                id='vpbDashboard'
                data-info='<?php echo esc_attr( wp_json_encode( [
                    'version' => VPBP_PLUGIN_VERSION,
                    'isPremium' => vpbp_IsPremium(),
                    'hasPro' => VPBP_HAS_PRO,
                    'adminUrl' => admin_url(), 
                    'nonce' => wp_create_nonce('vpb_activation_nonce'),
                    'licenseActiveNonce' => wp_create_nonce('vpb_activation_nonce'),
                    'disabledBlocksNonce' => wp_create_nonce('vpb_disabled_blocks'),
                    'vpbDisabledBlocks' => get_option('vpbDisabledBlocks', []),
                    'uninstallNonce' => wp_create_nonce('vpb_activation_nonce'),
                    'deleteDataOnUninstall' => get_option('vpb_delete_data_on_uninstall', false)                
                ] ) ); ?>'
            ></div>
        <?php
    }
}