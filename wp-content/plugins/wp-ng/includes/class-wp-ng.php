<?php

/**
 * The file that defines the core plugin class
 *
 * @link       http://redcastor.io
 * @since      1.0.0
 *
 * @package    Wp_Ng
 * @subpackage Wp_Ng/includes
 */

/**
 * The core plugin class.
 *
 * This is used to define internationalization, admin-specific hooks, and
 * public-facing site hooks.
 *
 * Also maintains the unique identifier of this plugin as well as the current
 * version of the plugin.
 *
 * @since      1.0.0
 * @package    Wp_Ng
 * @subpackage Wp_Ng/includes
 * @author     RedCastor <team@redcastor.io>
 */
class Wp_Ng {

	/**
	 * The loader that's responsible for maintaining and registering all hooks that power
	 * the plugin.
	 *
	 * @since    1.0.0
	 * @access   protected
	 * @var      Wp_Ng_Loader    $loader    Maintains and registers all hooks for the plugin.
	 */
	protected $loader;

	/**
	 * The unique identifier of this plugin.
	 *
	 * @since    1.0.0
	 * @access   protected
	 * @var      string    $plugin_name    The string used to uniquely identify this plugin.
	 */
	protected $plugin_name;

	/**
	 * The current version of the plugin.
	 *
	 * @since    1.0.0
	 * @access   protected
	 * @var      string    $version    The current version of the plugin.
	 */
	protected $version;

	/**
	 * Define the core functionality of the plugin.
	 *
	 * Set the plugin name and the plugin version that can be used throughout the plugin.
	 * Load the dependencies, define the locale, and set the hooks for the admin area and
	 * the public-facing side of the site.
	 *
	 * @since    1.0.0
	 */
	public function __construct() {

		$this->plugin_name = WP_NG_PLUGIN_NAME;
		$this->version = WP_NG_PLUGIN_VERSION;

		$this->load_dependencies();
    $this->set_locale();
		$this->define_admin_hooks();
		$this->define_public_hooks();

	}

	/**
	 * Load the required dependencies for this plugin.
	 *
	 * Include the following files that make up the plugin:
	 *
	 * - Wp_Ng_Loader. Orchestrates the hooks of the plugin.
	 * - Wp_Ng_i18n. Defines internationalization functionality.
	 * - Wp_Ng_Admin. Defines all hooks for the admin area.
	 * - Wp_Ng_Public. Defines all hooks for the public side of the site.
	 *
	 * Create an instance of the loader which will be used to register the hooks
	 * with WordPress.
	 *
	 * @since    1.0.0
	 * @access   private
	 */
	private function load_dependencies() {

    /**
     * Modules Descriptor of the plugin.
     */
    require_once plugin_dir_path( dirname( __FILE__ ) ) . 'includes/wp-ng-modules-descriptor.php';

    /**
     * Modules Descriptor of the plugin.
     */
    require_once plugin_dir_path( dirname( __FILE__ ) ) . 'includes/wp-ng-scripts-descriptor.php';

    /**
     * Settings Descriptor of the plugin.
     */
    require_once plugin_dir_path( dirname( __FILE__ ) ) . 'includes/wp-ng-settings-descriptor.php';


    /**
     * The class shortcode.
     */
    require_once plugin_dir_path( dirname( __FILE__ ) ) . 'includes/class-wp-ng-shortcode-parser.php';


    /**
     * The class helper.
     */
    require_once plugin_dir_path( dirname( __FILE__ ) ) . 'includes/class-wp-ng-helper.php';

    /**
     * The class responsible for load template
     */
    require_once plugin_dir_path( dirname( __FILE__ ) ) . 'includes/class-wp-ng-template.php';


    /**
     * The class responsible for email options
     */
    require_once plugin_dir_path( dirname( __FILE__ ) ) . 'includes/emails/class-wp-ng-email-options.php';


    /**
     * The class responsible for load emails
     */
    require_once plugin_dir_path( dirname( __FILE__ ) ) . 'includes/emails/class-wp-ng-email.php';
    require_once plugin_dir_path( dirname( __FILE__ ) ) . 'includes/class-wp-ng-emails.php';

    /**
     * Global Functions of the plugin.
     */
    require_once plugin_dir_path( dirname( __FILE__ ) ) . 'includes/wp-ng-core-functions.php';


    /**
		 * The class responsible for orchestrating the actions and filters of the
		 * core plugin.
		 */
		require_once plugin_dir_path( dirname( __FILE__ ) ) . 'includes/class-wp-ng-loader.php';

		/**
		 * The class responsible for defining internationalization functionality
		 * of the plugin.
		 */
		require_once plugin_dir_path( dirname( __FILE__ ) ) . 'includes/class-wp-ng-i18n.php';

    /**
     * The class responsible for defining autoloader functionality
     */
    require_once plugin_dir_path( dirname( __FILE__ ) ) . 'includes/class-wp-ng-autoloader.php';

    /**
     * The class responsible for orchestrating the logs file
     */
    require_once plugin_dir_path( dirname( __FILE__ ) ) . 'includes/class-wp-ng-logger.php';

    /**
     * The class responsible for orchestrating the cache.
     */
    require_once plugin_dir_path( dirname( __FILE__ ) ) . 'includes/class-wp-ng-cache.php';

    /**
     * The class responsible for orchestrating the conditional settings
     */
    require_once plugin_dir_path( dirname( __FILE__ ) ) . 'includes/class-wp-ng-conditional.php';

    /**
     * The class responsible for orchestrating the settings fields page.
     */
    require_once plugin_dir_path( dirname( __FILE__ ) ) . 'includes/class-wp-ng-settings.php';

    /**
     * The class responsible for defining manifest
     */
    require_once plugin_dir_path( dirname( __FILE__ ) ) . 'includes/class-wp-ng-manifest.php';

    /**
     * The class responsible for defining bower map to cdn
     */
    require_once plugin_dir_path( dirname( __FILE__ ) ) . 'includes/class-wp-ng-bower.php';

    /**
     * The class responsible for orchestrating the addon scripts
     */
    require_once plugin_dir_path( dirname( __FILE__ ) ) . 'includes/class-wp-ng-scripts.php';

    /**
     * The class responsible for orchestrating the ng modules
     */
    require_once plugin_dir_path( dirname( __FILE__ ) ) . 'includes/class-wp-ng-modules.php';


    /**
		 * The class responsible for defining all actions that occur in the admin area.
		 */
		require_once plugin_dir_path( dirname( __FILE__ ) ) . 'admin/class-wp-ng-admin.php';

		/**
		 * The class responsible for defining all actions that occur in the public-facing
		 * side of the site.
		 */
		require_once plugin_dir_path( dirname( __FILE__ ) ) . 'public/class-wp-ng-public.php';


		$this->loader = new Wp_Ng_Loader();

	}

	/**
	 * Define the locale for this plugin for internationalization.
	 *
	 * Uses the Wp_Ng_i18n class in order to set the domain and to register the hook
	 * with WordPress.
	 *
	 * @since    1.0.0
	 * @access   private
	 */
	private function set_locale() {

		$plugin_i18n = new Wp_Ng_i18n();

		$this->loader->add_action( 'plugins_loaded', $plugin_i18n, 'load_plugin_textdomain' );

	}


	/**
	 * Register all of the hooks related to the admin area functionality
	 * of the plugin.
	 *
	 * @since    1.0.0
	 * @access   private
	 */
	private function define_admin_hooks() {

	  if ( is_admin() ) {

      $plugin_admin = new Wp_Ng_Admin( $this->get_plugin_name(), $this->get_version() );

      $this->loader->add_action( 'admin_enqueue_scripts', $plugin_admin, 'enqueue_styles', 100 );
      $this->loader->add_action( 'admin_enqueue_scripts', $plugin_admin, 'enqueue_scripts' );

      $this->loader->add_action( 'admin_menu', $plugin_admin, 'settings', 100 );
      $this->loader->add_action( 'admin_init', $plugin_admin, 'settings_init' );
      $this->loader->add_action( 'admin_init', $plugin_admin, 'init' );

      $this->loader->add_filter( 'tiny_mce_before_init', $plugin_admin, 'tiny_mce_before_init', 100 );
    }
	}

	/**
	 * Register all of the hooks related to the public-facing functionality
	 * of the plugin.
	 *
	 * @since    1.0.0
	 * @access   private
	 */
	private function define_public_hooks() {

    //Create Instance settings
    Wp_Ng_Settings::createInstance( $this->plugin_name, $this->version );

		$plugin_public = new Wp_Ng_Public( $this->get_plugin_name(), $this->get_version() );

    $this->loader->add_action( 'plugins_loaded',  $plugin_public, 'load_pluggable_dependencies' );

		//Default Scripts and styles
		$this->loader->add_action( 'wp_default_scripts',  $plugin_public, 'default_scripts' );
		$this->loader->add_action( 'wp_default_styles',   $plugin_public, 'default_styles' );

    //Script and style
		$this->loader->add_action( 'wp_enqueue_scripts',  $plugin_public, 'external_modules', 8 );

    $this->loader->add_action( 'wp_enqueue_scripts',  $plugin_public, 'enqueue_scripts', 8 );
    $this->loader->add_action( 'wp_enqueue_scripts',  $plugin_public, 'enqueue_styles' );

		$this->loader->add_action( 'wp_enqueue_scripts',  $plugin_public, 'enqueue_script_jquery', 2 );
    $this->loader->add_action( 'wp_enqueue_scripts',  $plugin_public, 'enqueue_script_angular', 2 );

    //Process Script and style.
    $this->loader->add_action( 'wp_footer',               $plugin_public, 'print_template', 100 );
    $this->loader->add_action( 'wp_print_styles',         $plugin_public, 'process_styles', 1000 );
    $this->loader->add_action( 'wp_print_footer_scripts', $plugin_public, 'process_scripts', 7 );

    //After Theme Setup
    if (is_admin()) {
      $this->loader->add_action( 'init',   $plugin_public, 'init_options', -1);  //Priority before other plugins
      $this->loader->add_action( 'init',   $plugin_public, 'init_emails', 5);
      $this->loader->add_action( 'init',   $plugin_public, 'init_logging', 7);
      $this->loader->add_action( 'init',   $plugin_public, 'init_modules', 100);
    }
    else {
      $this->loader->add_action( 'after_setup_theme', $plugin_public, 'init_options', -1); //Priority before other plugins
      $this->loader->add_action( 'after_setup_theme', $plugin_public, 'init_emails', 5);
      $this->loader->add_action( 'after_setup_theme', $plugin_public, 'init_logging', 7);
      $this->loader->add_action( 'after_setup_theme', $plugin_public, 'init_modules', 100);
    }


    //Body Classes.
    $this->loader->add_filter( 'body_class',  $plugin_public, 'body_class' );

    //Template Redirection
    $this->loader->add_action('template_redirect', $plugin_public, 'template_redirect_outdated_browser', -1 );

    //Init, Logoout Cookie Config (Use for WP_CACHE enabled)
    $this->loader->add_action('init',       $plugin_public, 'init_update_cookie_config', 1000 );
    $this->loader->add_action('wp_logout',  $plugin_public, 'logout_update_cookie_config', 1000 );
    $this->loader->add_action('wp_logout',  $plugin_public, 'logout_end', 100000 );


    //Remove and Add WPAUTOP
    $this->loader->add_action( 'acf/init',            $plugin_public, 'remove_wpautop' ); //Acf plugin
    $this->loader->add_action( 'acf/init',            $plugin_public, 'add_wpngautop' );
    $this->loader->add_action( 'init',                $plugin_public, 'remove_wpautop' );//Acf plugin
    $this->loader->add_action( 'init',                $plugin_public, 'add_wpngautop' );

	}

	/**
	 * Run the loader to execute all of the hooks with WordPress.
	 *
	 * @since    1.0.0
	 */
	public function run() {
		$this->loader->run();
	}

	/**
	 * The name of the plugin used to uniquely identify it within the context of
	 * WordPress and to define internationalization functionality.
	 *
	 * @since     1.0.0
	 * @return    string    The name of the plugin.
	 */
	public function get_plugin_name() {
		return $this->plugin_name;
	}

	/**
	 * The reference to the class that orchestrates the hooks with the plugin.
	 *
	 * @since     1.0.0
	 * @return    Wp_Ng_Loader    Orchestrates the hooks of the plugin.
	 */
	public function get_loader() {
		return $this->loader;
	}

	/**
	 * Retrieve the version number of the plugin.
	 *
	 * @since     1.0.0
	 * @return    string    The version number of the plugin.
	 */
	public function get_version() {
		return $this->version;
	}

}
