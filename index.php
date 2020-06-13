<?php
/**
 * Plugin Name: Inpsyde
 * Description: The is test assign teask plugin that enable a custom url to show a data in grid fro an api
 * Version: 1.0.0
 */

define('DS', DIRECTORY_SEPARATOR);
define('INPSYDE_PLUGIN_DIR', plugin_dir_path(__FILE__));
define('INPSYDE_TEMPLATE_DIRECTORY', INPSYDE_PLUGIN_DIR  . 'templates');

require_once INPSYDE_PLUGIN_DIR . 'vendor/autoload.php';

\Sonsor\Inpsyde\Plugin::main();