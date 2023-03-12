<?php
/**
 * Plugin Name:       Team Member
 * Description:       Display a team member with an image, name, title, and biography.
 * Requires at least: 6.0
 * Requires PHP:      7.4
 * Author:            Marco Pelloni
 * License:           GPL-3.0
 * License URI:       https://www.gnu.org/licenses/gpl-3.0.html
 * Text Domain:       team-member
 *
 * Version number is automatically adjusted by semantic-release-bot on release, do not adjust manually:
 * Version: 1.2.1
 *
 * @package           create-block
 */

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function create_block_team_member_block_init() {
	register_block_type( __DIR__ . '/build' );
}
add_action( 'init', 'create_block_team_member_block_init' );

// Updates
require_once(plugin_dir_path( __FILE__ ) . 'includes/plugin-update-checker-5.0/plugin-update-checker.php');
use YahnisElsts\PluginUpdateChecker\v5\PucFactory;

$myUpdateChecker = PucFactory::buildUpdateChecker(
	'https://marcopelloni.com/releases/team-member.json',
	__FILE__,
	'team-member'
);
