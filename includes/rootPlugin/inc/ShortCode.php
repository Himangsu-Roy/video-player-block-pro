<?php
namespace VPBP;
if ( ! defined( 'ABSPATH' ) ) exit;

class ShortCode {
	function __construct() {
		add_shortcode( 'video_player', [ $this, 'vpbp_shortcode' ] );
	}

	function vpbp_shortcode( $atts ) {
		$atts = shortcode_atts( [ 'id' => 0 ], $atts, 'video_player' );
		$pid  = absint( $atts['id'] );
		if ( ! $pid ) return '';

		$post = get_post( $pid );
		if ( ! $post || 'video-player-block' !== $post->post_type ) return '';
		if ( post_password_required( $post ) ) return get_the_password_form( $post );

		$can_view = false;
		switch ( $post->post_status ) {
			case 'publish':
				$can_view = true; break;
			case 'private':
				$can_view = current_user_can( 'read_private_posts' ); break;
			case 'draft':
			case 'pending':
			case 'future':
				$can_view = current_user_can( 'edit_post', $pid ); break;
		}
		if ( ! $can_view ) return '';

		$blocks = parse_blocks( $post->post_content );
		return empty( $blocks ) ? '' : render_block( $blocks[0] );
	}
}
