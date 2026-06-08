<?php
$this_sdk_version = '2.12.0';

if ( ! class_exists( 'BPluginsFSLite' ) ) {
	require_once dirname( __FILE__ ) . '/require.php';

	class BPluginsFSLite {
		protected $file = null;
		public $prefix = '';
		protected $config = null;
		protected $__FILE__ = __FILE__;
		private $lc = null;

		function __construct( $config = [] ) {
			$this->__FILE__ = $config['__FILE__'];
			$this->config = (object) $config;
			$this->prefix = $this->config->prefix ?? $this->config->slug;

			if ( \is_admin() ) new FSActivate( $this->config, $this->__FILE__ );
		}

		public function is_premium() { return $this->lc->isPipe ?? false; }
		public function can_use_premium_feature() { return $this->is_premium(); }
		public function can_use_premium_code() { return $this->is_premium(); }
		public function can_use_premium_code__premium_only() { return $this->is_premium(); }
		public function is__premium_only() { return $this->is_premium(); }

		public function uninstall_plugin() {
			deactivate_plugins( plugin_basename( $this->__FILE__ ) );
		}

		function set_basename( $is_premium, $__FILE__ ) {
			$basename = basename( $__FILE__ );
			foreach ( [ $this->config->slug . '/' . $basename, $this->config->slug . '-pro/' . $basename ] as $p ) {
				if ( is_plugin_active( $p ) ) deactivate_plugins( $p );
			}
		}

		/**
		 * Routes Freemius's after_uninstall hook to WordPress's register_uninstall_hook
		 * so the lite build behaves like the full SDK. Other hooks no-op.
		 */
		function add_action( $hook, $callback ) {
			if ( $hook !== 'after_uninstall' || ! function_exists( 'register_uninstall_hook' ) ) return;
			if ( is_string( $callback ) && function_exists( $callback ) ) {
				register_uninstall_hook( $this->__FILE__, $callback );
			}
		}
	}
}

if ( ! function_exists( 'fs_lite_dynamic_init' ) ) {
	function fs_lite_dynamic_init( $module ) {
		try {
			if ( function_exists( 'fs_dynamic_init' ) ) return fs_dynamic_init( $module );

			if ( empty( $module['__FILE__'] ) ) {
				$caller = debug_backtrace();
				if ( isset( $caller[0]['file'] ) ) $module['__FILE__'] = $caller[0]['file'];
				if ( ! isset( $module['__FILE__'] ) ) throw new Error( 'No __FILE__' );
			}
			return new BPluginsFSLite( $module );
		} catch ( \Throwable $th ) {
			throw $th->getMessage();
		}
	}
}
