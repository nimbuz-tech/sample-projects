<?php
defined('BASEPATH') || exit('No direct script access allowed');

/*
|--------------------------------------------------------------------------
| Base Site URL
|--------------------------------------------------------------------------
|
| URL to your CodeIgniter root. Typically this will be your base URL,
| WITH a trailing slash:
|
|    http://example.com/
|
| WARNING: You MUST set this value!
|
| If it is not set, then CodeIgniter will try to guess the protocol and
| path to your installation, but due to security concerns the hostname will
| be set to $_SERVER['SERVER_ADDR'] if available, or localhost otherwise.
| This would be considered a security risk in production environments.
|
| If you need to allow multiple domains, remember that this file is still
| a PHP script and you can easily do that on your own.
|
*/
$config['base_url'] = 'http://localhost/codeigniter3';

/*
|--------------------------------------------------------------------------
| Index File
|--------------------------------------------------------------------------
|
| Typically this will be your index.php file, unless you've renamed it to
| something else. If you are using mod_rewrite to remove the page set this
| variable so that it is blank.
|
*/
$config['index_page'] = 'index.php';

/*
|--------------------------------------------------------------------------
| URI PROTOCOL
|--------------------------------------------------------------------------
|
| This item determines which server global should be used to retrieve the
| URI string.  The default setting of 'REQUEST_URI' works for most servers.
| If your links do not seem to work, try one of the other delicious flavors:
|
| 'REQUEST_URI'    Uses $_SERVER['REQUEST_URI']
| 'QUERY_STRING'   Uses $_SERVER['QUERY_STRING']
| 'PATH_INFO'      Uses $_SERVER['PATH_INFO']
|
*/
$config['uri_protocol'] = 'REQUEST_URI';

// URL suffix
$config['url_suffix'] = '';

// Default Language
$config['language'] = 'english';

// Default Character Set
$config['charset'] = 'UTF-8';

// Enable/Disable System Hooks
$config['enable_hooks'] = false;

// Class Extension Prefix
$config['subclass_prefix'] = 'MY_';

// Composer auto-loading
$config['composer_autoload'] = false;

// Allowed URL Characters
$config['permitted_uri_chars'] = 'a-z 0-9~%.:_\-';

// Enable Query Strings
$config['enable_query_strings'] = false;
$config['controller_trigger'] = 'c';
$config['function_trigger'] = 'm';
$config['directory_trigger'] = 'd';

// Allow $_GET array
$config['allow_get_array'] = true;

// Error Logging Threshold
$config['log_threshold'] = 0;

// Error Logging Directory Path
$config['log_path'] = '';

// Log File Extension
$config['log_file_extension'] = '';

// Log File Permissions
$config['log_file_permissions'] = 0644;

// Date Format for Logs
$config['log_date_format'] = 'Y-m-d H:i:s';

// Error Views Directory Path
$config['error_views_path'] = '';

// Cache Directory Path
$config['cache_path'] = '';

// Cache Include Query String
$config['cache_query_string'] = false;

// Encryption Key
$config['encryption_key'] = '';

// Session Variables
$config['sess_driver'] = 'files';
$config['sess_cookie_name'] = 'ci_session';
$config['sess_samesite'] = 'Lax';
$config['sess_expiration'] = 7200;

// Ensure a valid, writable session save path for the 'files' session driver.
// Prefer application cache sessions directory, but fall back to PHP temp dir
// if the directory cannot be created or is not writable (common in some
// environments such as containers or restricted hosts).
$ci_sessions_path = rtrim(APPPATH, DIRECTORY_SEPARATOR) . DIRECTORY_SEPARATOR . 'cache' . DIRECTORY_SEPARATOR . 'sessions';
if (!is_dir($ci_sessions_path)) {
	// Attempt to create the sessions directory with restrictive permissions.
	@mkdir($ci_sessions_path, 0700, true);
}

// If created/existing dir is writable use it, otherwise fallback to sys_get_temp_dir().
if (is_dir($ci_sessions_path) && is_writable($ci_sessions_path)) {
	$config['sess_save_path'] = $ci_sessions_path;
} else {
	// Use system temp directory as a safe default. Realpath ensures a proper
	// absolute path; if that fails, use the raw sys_get_temp_dir() value.
	$tmp = realpath(sys_get_temp_dir());
	$config['sess_save_path'] = $tmp ? $tmp : sys_get_temp_dir();
}
$config['sess_match_ip'] = false;
$config['sess_time_to_update'] = 300;
$config['sess_regenerate_destroy'] = false;

// Cookie Related Variables
$config['cookie_prefix'] = '';
$config['cookie_domain'] = '';
$config['cookie_path'] = '/';
$config['cookie_secure'] = false;
$config['cookie_httponly'] = false;
$config['cookie_samesite'] = 'Lax';

// Standardize newlines
$config['standardize_newlines'] = false;

// Global XSS Filtering
$config['global_xss_filtering'] = false;

// Cross Site Request Forgery
$config['csrf_protection'] = false;
$config['csrf_token_name'] = 'csrf_test_name';
$config['csrf_cookie_name'] = 'csrf_cookie_name';
$config['csrf_expire'] = 7200;
$config['csrf_regenerate'] = true;
$config['csrf_exclude_uris'] = array();

// Output Compression
$config['compress_output'] = false;

// Master Time Reference
$config['time_reference'] = 'local';

// Rewrite PHP Short Tags
$config['rewrite_short_tags'] = false;

// Reverse Proxy IPs
$config['proxy_ips'] = '';
