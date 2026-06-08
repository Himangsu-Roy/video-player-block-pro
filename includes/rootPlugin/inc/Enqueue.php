<?php
namespace VPBP;
if ( ! defined( 'ABSPATH' ) ) exit;
class Enqueue {
    function __construct() {
        add_action( 'admin_enqueue_scripts', [$this, 'adminEnqueueScripts']);
    }
    function adminEnqueueScripts($screen) {
        global $typenow;
        // For post type screens
        if ('video-player-block' === $typenow) {
            $post = $this->asset('admin/post');
            wp_enqueue_script('admin-post-js', VPBP_DIR_URL . 'build/admin/post.js', $post['dependencies'], $post['version'], true);
            wp_enqueue_style('admin-post-css', VPBP_DIR_URL . 'build/admin/post.css', [], VPBP_PLUGIN_VERSION);
        }
        // For dashboard/menu page screen. Dashboard config is passed via the
        // #vpbDashboard data-info attribute, not wp_localize_script.
        if ($screen === "video-player-block_page_vpb-help-demo") {
            $dashboard = $this->asset('admin/dashboard');
            // wp-util (wp.ajax) is used as a runtime global by the Activation
            // screen, so @wordpress/scripts can't auto-detect it — append it.
            $dashboard_deps = array_values( array_unique( array_merge( $dashboard['dependencies'], ['wp-util'] ) ) );
            wp_enqueue_script('vpb-admin-dashboard-js', VPBP_DIR_URL . 'build/admin/dashboard.js', $dashboard_deps, $dashboard['version'], true);
            wp_enqueue_style('vpb-admin-dashboard-css', VPBP_DIR_URL . 'build/admin/dashboard.css', [], VPBP_PLUGIN_VERSION);
            wp_set_script_translations( 'vpb-admin-dashboard-js', 'video-player-block', VPBP_DIR_PATH . 'languages' );
        }
    }

    /**
     * Read a webpack-generated *.asset.php so script dependencies and the
     * content-hash version stay in sync with the actual bundle.
     */
    private function asset($name) {
        $file = VPBP_DIR_PATH . 'build/' . $name . '.asset.php';
        return file_exists($file) ? require $file : ['dependencies' => [], 'version' => VPBP_PLUGIN_VERSION];
    }
}