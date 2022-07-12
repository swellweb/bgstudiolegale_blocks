<?php
function swellweb_enqueue_assets() {
  wp_enqueue_script(
    'swellweb-gutenberg-sidebar',
    get_template_directory_uri( ). '/blocks/dist/sidebarPost.build.js',
    array( 'wp-plugins', 'wp-edit-post', 'wp-i18n', 'wp-element', 'wp-components', 'wp-data' )
  );
}




  add_action( 'enqueue_block_editor_assets', 'swellweb_enqueue_assets' );

  function myprefix_register_meta() {
    register_post_meta( 'activity', 'swellweb_text_metafield', array(
      'show_in_rest' => true,
      'single' => true,
      'type' => 'string',
  ) ); 
  }
    add_action('init', 'myprefix_register_meta');