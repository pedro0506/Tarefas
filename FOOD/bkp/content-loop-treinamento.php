<?php
/**
 * Template part for displaying posts.
 *
 * @link    https://codex.wordpress.org/Template_Hierarchy
 *
 * @package Tyche
 */

?>
<article class="loop-treinamento" id="post-<?php the_ID(); ?>" <?php post_class( 'tyche-blog-post' ); ?>>
	<header class="entry-header">
		<div class="lt-img">

			<?php
			if ( has_post_thumbnail() ) {
				echo ! is_single() ? '<a href="' . esc_url( get_permalink() ) . '" rel="bookmark">' : '';
				the_post_thumbnail( 'tyche-blog-post-image' );
				echo ! is_single() ? '</a>' : '';
			}
			?>

		</div>
		<div class="lt-cat">
			<?php 
    $sep = '';
    foreach ((get_the_category()) as $cat) {
        echo $sep . '<a href="' . get_category_link($cat->term_id) . '"  class="' . $cat->slug . '" title="View all posts in '. esc_attr($cat->name) . '">' . $cat->cat_name . '</a>';
        $sep = ', ';
    }
?>
		
		</div>
		<div class="lt-tit">
		<?php the_title( '' ); ?> 
		</div>
		
		<div class="lt-date">
			<?php the_time('d/m/y') ?>
		</div>
	</header><!-- .entry-header -->

	<div class="lt-exce">
	<?php the_excerpt(); ?>
	</div>
	
	<div class="lt-bot">
	<a href="<?php the_permalink(); ?>">quero saber mais</a>
	</div>

	

	
</article><!-- #post-## -->
