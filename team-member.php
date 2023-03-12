<?php
/**
 * Plugin Name:       Team Member
 * Description:       Display a team member with an image, name, title, and biography.
 * Requires at least: 6.0
 * Requires PHP:      7.4
 * Version:           0.1.0
 * Author:            Marco Pelloni
 * License:           GPL-3.0
 * License URI:       https://www.gnu.org/licenses/gpl-3.0.html
 * Text Domain:       team-member
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