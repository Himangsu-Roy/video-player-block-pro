<?php
namespace VPBP;
if ( ! defined( 'ABSPATH' ) ) exit;

class Init {
	function __construct() {
		add_action( 'init', [ $this, 'onInit' ] );
		add_filter( 'block_editor_settings_all', [ $this, 'vpbp_dynamic_template_lock' ], 10, 2 );
	}

	function onInit() {
		register_setting( 'vpbPluginSettings', 'vpbAPIKey', [
			'default'           => '',
			'show_in_rest'      => true,
			'type'              => 'string',
			'sanitize_callback' => 'sanitize_text_field',
		] );

		$this->vpbp_register_blocks();

		$d = 'video-player-block';
		register_post_type( $d, [
			'label'               => __( 'Video Player', $d ),
			'labels'              => [
				'name'          => __( 'Video Player', $d ),
				'singular_name' => __( 'Video Player', $d ),
				'add_new_item'  => __( 'Add New Video Player', $d ),
				'edit_item'     => __( 'Edit Video Player', $d ),
				'all_items'     => __( 'All Video Players', $d ),
			],
			'show_in_rest'        => true,
			'public'              => false,
			'show_ui'             => true,
			'show_in_menu'        => true,
			'menu_icon'           => 'dashicons-controls-play',
			'exclude_from_search' => true,
			'template'            => [ [ 'vpb/video' ] ],
			'template_lock'       => 'all',
		] );

		wp_set_script_translations( 'vpb-video-editor-script', $d, VPBP_DIR_PATH . 'languages' );
	}

	function vpbp_register_blocks() {
		$path = VPBP_DIR_PATH . '/build/blocks/';
		$disabled = get_option( 'vpbDisabledBlocks', [] );
		if ( ! is_array( $disabled ) ) $disabled = [];

		register_block_type( $path . 'video-player-block' );

		if ( ! function_exists( 'vpb_fs' ) || ! vpb_fs()->can_use_premium_code() ) return;

		foreach ( [ 'react-video-player', 'videojs-player', 'vidstack-video-player', 'video-gallery', 'video-hero', 'video-lightbox', 'video-comparison', 'video-testimonial', 'video-playlist', 'video-reels', 'interactive-video', 'video-transcript', 'sticky-video' ] as $name ) {
			if ( in_array( 'vpb/' . $name, $disabled, true ) ) continue;
			$dir = $path . $name;
			if ( is_dir( $dir ) ) register_block_type( $dir );
		}
	}

	function vpbp_dynamic_template_lock( $settings, $context ) {
		if ( ! empty( $context->post ) && $context->post->post_type === 'video-player-block' ) {
			$settings['templateLock'] = 'all';
		}
		return $settings;
	}
}
