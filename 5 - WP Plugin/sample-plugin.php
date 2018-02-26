<?php

/**
 * Plugin Name: Sample Plugin
 */

function wfwp_scripts( $hook ) {

	wp_register_script(
		'wfwp-common',
		plugin_dir_url( __FILE__ ) . 'dist/admin-screen~main.js',
		array(),
		'20180221'
	);

	wp_enqueue_script(
		'wfwp-main',
		plugin_dir_url( __FILE__ ) . 'dist/main.js',
		array( 'wfwp-common' ),
		'20180221'
	);

	if ( 'some-hook' === $hook ) {

		wp_enqueue_script(
			'wfwp-admin-screen',
			plugin_dir_url( __FILE__ ) . 'dist/admin-screen.js',
			array( 'wfwp-common' ),
			'20180221'
		);

	}

}

add_action( 'admin_enqueue_scripts', 'wfwp_scripts', 10, 1 );
