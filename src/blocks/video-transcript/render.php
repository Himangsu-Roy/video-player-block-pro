<?php
if ( ! defined( 'ABSPATH' ) ) exit;

$id = wp_unique_id( 'vpbVideoTranscript-' );

// JSON-LD structured data injection
$seo_json_ld    = ! empty( $attributes['seoJsonLd'] ) ? (bool) $attributes['seoJsonLd'] : true;
$video_url      = ! empty( $attributes['videoUrl'] ) ? esc_url( $attributes['videoUrl'] ) : '';
$video_title    = ! empty( $attributes['videoTitle'] ) ? sanitize_text_field( $attributes['videoTitle'] ) : '';
$video_desc     = ! empty( $attributes['videoDescription'] ) ? sanitize_textarea_field( $attributes['videoDescription'] ) : '';
$upload_date    = ! empty( $attributes['uploadDate'] ) ? sanitize_text_field( $attributes['uploadDate'] ) : '';
$poster_url     = ! empty( $attributes['posterUrl'] ) ? esc_url( $attributes['posterUrl'] ) : '';
$transcript_entries = ! empty( $attributes['transcriptEntries'] ) && is_array( $attributes['transcriptEntries'] )
	? $attributes['transcriptEntries']
	: [];

// Build transcript text for JSON-LD
$transcript_text = '';
if ( ! empty( $transcript_entries ) ) {
	$lines = array_map( function ( $entry ) {
		$text = isset( $entry['text'] ) ? sanitize_text_field( $entry['text'] ) : '';
		return $text;
	}, $transcript_entries );
	$transcript_text = implode( ' ', array_filter( $lines ) );
}

if ( $seo_json_ld && $video_url ) {
	$json_ld = [
		'@context' => 'https://schema.org',
		'@type'    => 'VideoObject',
	];
	if ( $video_title )    $json_ld['name']         = $video_title;
	if ( $video_desc )     $json_ld['description']   = $video_desc;
	if ( $video_url )      $json_ld['contentUrl']    = $video_url;
	if ( $poster_url )     $json_ld['thumbnailUrl']  = $poster_url;
	if ( $upload_date )    $json_ld['uploadDate']    = $upload_date;
	if ( $transcript_text ) $json_ld['transcript']   = $transcript_text;

	echo '<script type="application/ld+json">' . wp_json_encode( $json_ld, JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE ) . '</script>' . "\n"; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
}
?>
<div <?php echo get_block_wrapper_attributes(); // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?> id='<?php echo esc_attr( $id ); ?>' data-attributes='<?php echo esc_attr( wp_json_encode( $attributes ) ); ?>'></div>
