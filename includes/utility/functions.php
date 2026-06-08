<?php
if ( ! defined( 'ABSPATH' ) ) { exit; }
if ( ! function_exists( 'vpbp_IsPremium' ) ) {
	function vpbp_IsPremium() {
		return VPBP_HAS_PRO ? vpb_fs()->can_use_premium_code() : false;
	}
} 

add_action( 'load-plugin-editor.php', function () {
	// $_GET is read from WordPress's own plugin-editor screen, which carries its
	// own nonce and capability check; we just block listed files for non-premium users.
	// phpcs:ignore WordPress.Security.NonceVerification.Recommended
	if ( vpbp_IsPremium() || ! isset( $_GET['file'] ) ) {
		return;
	}

	// phpcs:ignore WordPress.Security.NonceVerification.Recommended
	$file = sanitize_text_field( wp_unslash( $_GET['file'] ) );
	$restricted_files = [
		'video-player-block/includes/utility/functions.php',
		'video-player-block/includes/rootPlugin/plugin.php',
		'video-player-block/includes/rootPlugin/inc/Init.php',
	];

	foreach ( $restricted_files as $restricted_file ) {
		if ( 0 === strpos( $file, $restricted_file ) ) {
			wp_die(
				esc_html__( 'Access to this file is restricted in the free version.', 'video-player-block' ),
				esc_html__( 'Permission Denied', 'video-player-block' ),
				array( 'response' => 403 )
			);
		}
	}
} );