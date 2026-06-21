<?php
/**
 * Plugin Name: Video Player Block
 * Plugin URI: https://wordpress.org/plugins/video-player-block/
 * Description: A Simple, accessible, Easy to Use & fully Customizable video player.
 * Version: 2.0.0
 * Author: bPlugins
 * Author URI: https://bplugins.com
 * License: GPLv3
 * License URI: https://www.gnu.org/licenses/gpl-3.0.txt
 * Text Domain: video-player-block
 * Domain Path: /languages
 * Requires at least: 6.5
 * Tested up to: 7.0
 * Requires PHP: 7.4
 *
 * @fs_premium_only /vendor/freemius, /includes/fs.php, /includes/LicenseActivation.php, /build/blocks/react-video-player, /build/blocks/videojs-player, /build/blocks/vidstack-video-player, /build/blocks/video-gallery, /build/blocks/video-lightbox, /build/blocks/video-comparison, /build/blocks/video-testimonial, /build/blocks/video-playlist, /build/blocks/video-reels, /build/blocks/video-transcript, /build/blocks/index.js, /build/blocks/index.css, /build/blocks/index.asset.php, /build/blocks/index.js.LICENSE.txt
 * @fs_free_only /vendor/freemius-lite, /includes/fs-lite.php
 */

if ( ! defined( 'ABSPATH' ) ) exit;

if ( function_exists( 'vpb_fs' ) ) {
	vpb_fs()->set_basename( true, __FILE__ );
	return;
}

function vpbp_bootstrap() {
	$host = isset( $_SERVER['HTTP_HOST'] ) ? sanitize_text_field( wp_unslash( $_SERVER['HTTP_HOST'] ) ) : '';
	$is_local = 'localhost' === $host || str_starts_with( $host, 'localhost:' ) || str_ends_with( $host, '.local' );

	define( 'VPBP_PLUGIN_VERSION', $is_local ? time() : '2.0.0' );
	define( 'VPBP_DIR_URL', plugin_dir_url( __FILE__ ) );
	define( 'VPBP_PUBLIC_DIR', VPBP_DIR_URL . 'public/' );
	define( 'VPBP_DIR_PATH', plugin_dir_path( __FILE__ ) );
	define( 'VPBP_HAS_PRO', file_exists( VPBP_DIR_PATH . '/vendor/freemius/start.php' ) );
	define( 'VPBP_FREE_VERSION', ! VPBP_HAS_PRO );

	if ( VPBP_HAS_PRO ) {
		require_once VPBP_DIR_PATH . '/includes/fs.php';
		require_once VPBP_DIR_PATH . '/includes/LicenseActivation.php';
	} else {
		require_once VPBP_DIR_PATH . '/includes/fs-lite.php';
	}

	require_once VPBP_DIR_PATH . '/includes/utility/functions.php';
	require_once VPBP_DIR_PATH . '/includes/rootPlugin/plugin.php';

	if ( ! class_exists( 'VPBPPlugin' ) ) {
		class VPBPPlugin {
			public function __construct() {
				add_action( 'enqueue_block_assets', [ $this, 'enqueueBlockAssets' ] );
				add_action( 'wp_enqueue_scripts', [ $this, 'wpEnqueueScripts' ] );
				add_action( 'enqueue_block_editor_assets', [ $this, 'vpbpEnqueueBlockEditorAssets' ] );
				add_filter( 'default_title', [ $this, 'defaultTitle' ], 10, 2 );
				add_filter( 'default_content', [ $this, 'defaultContent' ], 10, 2 );
			}

			// phpcs:disable WordPress.Security.NonceVerification.Recommended -- gated by edit_pages cap; new-post screen carries its own nonce.
			public function defaultTitle( $title, $post ) {
				if ( 'page' !== $post->post_type || ! isset( $_GET['title'] ) || ! current_user_can( 'edit_pages' ) ) return $title;
				return sanitize_text_field( wp_unslash( $_GET['title'] ) );
			}
			public function defaultContent( $content, $post ) {
				if ( 'page' !== $post->post_type || ! isset( $_GET['content'] ) || ! current_user_can( 'edit_pages' ) ) return $content;
				return wp_kses_post( wp_unslash( $_GET['content'] ) );
			}
			// phpcs:enable WordPress.Security.NonceVerification.Recommended

			public function enqueueBlockAssets() {
				// Loaded on enqueue_block_assets so Plyr reaches the apiVersion 3 iframed editor canvas.
				wp_register_script( 'plyr', VPBP_PUBLIC_DIR . 'js/plyr.js', [], '3.8.4', true );
				wp_register_style( 'plyr', VPBP_PUBLIC_DIR . 'css/plyr.css', [], '3.8.4' );
				wp_enqueue_script( 'plyr' );
				wp_enqueue_style( 'plyr' );
			}

			public function wpEnqueueScripts() {
				// wp_enqueue_script( 'plyr' );
				// wp_enqueue_style( 'plyr' );
			}

			public function vpbpEnqueueBlockEditorAssets() {
				// wp_enqueue_script( 'plyr' );
				// wp_enqueue_style( 'plyr' );
				wp_add_inline_style( 'wp-block-editor', '.dashicons-categories-icon,.dashicons.dashicons-media-video.categories-icon{color:#136EF5!important}' );

				// The shared blocks editor bundle (build/blocks/index.js) emits a
				// sibling build/blocks/index.css containing every shared block's
				// editor styles plus the inspector polish. None of those blocks
				// declare an editorStyle for it, so enqueue it explicitly here.
				if ( file_exists( VPBP_DIR_PATH . 'build/blocks/index.css' ) ) {
					wp_enqueue_style(
						'vpb-blocks-editor',
						VPBP_DIR_URL . 'build/blocks/index.css',
						[ 'wp-edit-blocks' ],
						VPBP_PLUGIN_VERSION
					);
				}

				$disabled_blocks = get_option( 'vpbDisabledBlocks', [] );
				if ( ! is_array( $disabled_blocks ) ) $disabled_blocks = [];

				$handles = [
					'vpb-video-editor-script',
					'vpb-react-video-player-editor-script',
					'vpb-videojs-player-editor-script',
					'vpb-vidstack-video-player-editor-script',
					'vpb-video-gallery-editor-script',
					'vpb-video-lightbox-editor-script',
					'vpb-video-comparison-editor-script',
					'vpb-video-testimonial-editor-script',
					'vpb-video-playlist-editor-script',
					'vpb-video-reels-editor-script',
					'vpb-video-transcript-editor-script',
				];
				foreach ( $handles as $h ) {
					if ( ! wp_script_is( $h, 'registered' ) ) continue;
					wp_localize_script( $h, 'vpbDisabledBlocks', $disabled_blocks );
					wp_add_inline_script( $h, 'var vpbPipecheck = ' . wp_json_encode( vpbp_IsPremium() ) . ';', 'before' );
					wp_set_script_translations( $h, 'video-player-block', VPBP_DIR_PATH . 'languages' );
				}
			}
		}
		new VPBPPlugin();
	}

	// Free build routes after_uninstall to register_uninstall_hook via the lite shim; Pro tracks the event via the full SDK.
	if ( function_exists( 'vpb_fs' ) ) {
		vpb_fs()->add_action( 'after_uninstall', 'vpbp_uninstall_cleanup' );
	}
}

/**
 * Uninstall cleanup. Must be a named function (not a closure) so register_uninstall_hook can serialize it.
 */
function vpbp_uninstall_cleanup() {
	if ( ! get_option( 'vpb_delete_data_on_uninstall' ) ) return;

	$posts = get_posts( [ 'post_type' => 'video-player-block', 'post_status' => 'any', 'numberposts' => -1, 'fields' => 'ids' ] );
	foreach ( $posts as $pid ) wp_delete_post( $pid, true );

	global $wpdb;
	// phpcs:ignore WordPress.DB.DirectDatabaseQuery.DirectQuery, WordPress.DB.DirectDatabaseQuery.NoCaching, WordPress.DB.SlowDBQuery.slow_db_query_meta_key
	$wpdb->delete( $wpdb->postmeta, [ 'meta_key' => 'vpb_post_views_count' ] );

	foreach ( [ 'vpbDisabledBlocks', 'vpb_delete_data_on_uninstall', 'vpbAPIKey', 'vpbUtils' ] as $opt ) delete_option( $opt );
}

add_filter( 'block_categories_all', function ( $categories ) {
	array_unshift( $categories, [
		'slug'  => 'vpbblocks',
		'title' => __( 'Video Player Block', 'video-player-block' ),
		'icon'  => 'categories-icon dashicons dashicons-media-video',
	] );
	return $categories;
}, 10, 1 );

vpbp_bootstrap();
