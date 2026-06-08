<?php
if ( ! defined( 'ABSPATH' ) ) exit;

class VPBP_REST_Handler {
	public function __construct() {
		add_action( 'wp_ajax_vpb_disabled_blocks', [ $this, 'handle_disabled_blocks' ] );
		add_action( 'wp_ajax_vpbSaveUninstallOption', [ $this, 'handle_uninstall_option' ] );
		add_action( 'init', [ $this, 'register_settings' ] );
	}

	private function guard( $nonce_action, $nonce_field = '_wpnonce' ) {
		$d = 'video-player-block';
		$nonce = isset( $_POST[ $nonce_field ] ) ? sanitize_text_field( wp_unslash( $_POST[ $nonce_field ] ) ) : '';
		if ( ! wp_verify_nonce( $nonce, $nonce_action ) ) {
			wp_send_json_error( [ 'message' => __( 'Invalid security token.', $d ) ], 403 );
		}
		if ( ! current_user_can( 'manage_options' ) ) {
			wp_send_json_error( [ 'message' => __( 'You do not have permission to perform this action.', $d ) ], 403 );
		}
	}

	public function handle_disabled_blocks() {
		$this->guard( 'vpb_disabled_blocks' );

		// phpcs:ignore WordPress.Security.ValidatedSanitizedInput.InputNotSanitized -- decoded JSON, each element sanitized below.
		$raw = isset( $_POST['data'] ) ? wp_unslash( $_POST['data'] ) : '';
		$data = is_string( $raw ) ? json_decode( $raw, true ) : null;

		if ( is_array( $data ) ) {
			$data = array_map( 'sanitize_text_field', $data );
			update_option( 'vpbDisabledBlocks', $data );
			wp_send_json_success( $data );
		} else {
			wp_send_json_success( get_option( 'vpbDisabledBlocks', [] ) );
		}
	}

	public function handle_uninstall_option() {
		$this->guard( 'vpb_activation_nonce', 'nonce' );

		$raw = isset( $_POST['enabled'] ) ? sanitize_text_field( wp_unslash( $_POST['enabled'] ) ) : '';
		$enabled = in_array( $raw, [ 'true', '1', 'on' ], true );
		update_option( 'vpb_delete_data_on_uninstall', $enabled );

		wp_send_json_success( [
			'enabled' => $enabled,
			'message' => __( 'Setting saved successfully.', 'video-player-block' ),
		] );
	}

	public function register_settings() {
		register_setting( 'vpbUtils', 'vpbUtils', [
			'show_in_rest'      => [ 'name' => 'vpbUtils', 'schema' => [ 'type' => 'string' ] ],
			'type'              => 'string',
			'default'           => '',
			'sanitize_callback' => function ( $val ) {
				$d = json_decode( $val, true );
				return is_array( $d ) ? wp_json_encode( $d ) : sanitize_text_field( $val );
			},
		] );
	}
}

new VPBP_REST_Handler();
