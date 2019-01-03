<?php
define('WP_USE_THEMES', false);  
require_once('wp-load.php');

    // pegando o parametro enviado via AJAX
	$jan = $_GET['jan'];
	$fev = $_GET['fev'];
	$mar = $_GET['mar'];
	$abr = $_GET['abr'];
	$mai = $_GET['mai'];
	$jun = $_GET['jun'];
	$jul = $_GET['jul'];
	$ago = $_GET['ago'];
	$set = $_GET['set'];
	$out = $_GET['out'];
	$nov = $_GET['nov'];
	$dez = $_GET['dez'];
	$tag = $_GET['tag'];
	$nome = $_GET['nome'];
	if($tag != '' && $jan == '' && $fev == '' && $mar == '' && $abr == '' && $mai == '' && $jun == '' && $jul == '' && $ago == '' && $set == '' && $out == '' && $nov == '' && $dez == ''){
		$jan = '01';
		$fev = '02';
		$mar = '03';
		$abr = '04';
		$mai = '05';
		$jun = '06';
		$jul = '07';
		$ago = '08';
		$set = '09';
		$out = '10';
		$nov = '11';
		$dez = '12';
	}
	if($nome != '' && $jan == '' && $fev == '' && $mar == '' && $abr == '' && $mai == '' && $jun == '' && $jul == '' && $ago == '' && $set == '' && $out == '' && $nov == '' && $dez == ''){
		$jan = '01';
		$fev = '02';
		$mar = '03';
		$abr = '04';
		$mai = '05';
		$jun = '06';
		$jul = '07';
		$ago = '08';
		$set = '09';
		$out = '10';
		$nov = '11';
		$dez = '12';
	}
	// resposta do servidor caso conexão status 200
	//echo '<br>|------ Dados recebidos com sucesso!!! Parametro: '.$nome. ' ------|<br><br>';

$attachments1 = new WP_Query( array(
    'post_type'      => 'product',
    'posts_per_page' => 500,
	'product_cat' => 'treinamentos',
    'post_status'    => array( 'publish', 'future' ),
    'post_parent'    => null,
    's' => $nome,
    'product_tag' => $tag,
    'date_query' => array(
        array(
            ////'year'  => get_the_date('Y', '2018'),
            'month' => $jan
        ),
    ),
) );
$attachments2 = new WP_Query( array(
    'post_type'      => 'product',
    'posts_per_page' => 500,
	'product_cat' => 'treinamentos',
    'post_status'    => array( 'publish', 'future' ),
    'post_parent'    => null,
    's' => $nome,
    'product_tag' => $tag,
    'date_query' => array(
        array(
            //'year'  => get_the_date('Y', '2018'),
            'month' => $fev
        ),
    ),
) );
$attachments3 = new WP_Query( array(
    'post_type'      => 'product',
    'posts_per_page' => 500,
	'product_cat' => 'treinamentos',
    'post_status'    => array( 'publish', 'future' ),
    'post_parent'    => null,
    's' => $nome,
    'product_tag' => $tag,
    'date_query' => array(
        array(
            //'year'  => get_the_date('Y', '2018'),
            'month' => $mar
        ),
    ),
) );
$attachments4 = new WP_Query( array(
    'post_type'      => 'product',
    'posts_per_page' => 500,
	'product_cat' => 'treinamentos',
    'post_status'    => array( 'publish', 'future' ),
    'post_parent'    => null,
    's' => $nome,
    'product_tag' => $tag,
    'date_query' => array(
        array(
            //'year'  => get_the_date('Y', '2018'),
            'month' => $abr
        ),
    ),
) );
$attachments5 = new WP_Query( array(
    'post_type'      => 'product',
    'posts_per_page' => 500,
	'product_cat' => 'treinamentos',
    'post_status'    => array( 'publish', 'future' ),
    'post_parent'    => null,
    's' => $nome,
    'product_tag' => $tag,
    'date_query' => array(
        array(
            //'year'  => get_the_date('Y', '2018'),
            'month' => $mai
        ),
    ),
) );
$attachments6 = new WP_Query( array(
    'post_type'      => 'product',
    'posts_per_page' => 500,
	'product_cat' => 'treinamentos',
    'post_status'    => array( 'publish', 'future' ),
    'post_parent'    => null,
    's' => $nome,
    'product_tag' => $tag,
    'date_query' => array(
        array(
            //'year'  => get_the_date('Y', '2018'),
            'month' => $jun
        ),
    ),
) );
$attachments7 = new WP_Query( array(
    'post_type'      => 'product',
    'posts_per_page' => 500,
	'product_cat' => 'treinamentos',
    'post_status'    => array( 'publish', 'future' ),
    'post_parent'    => null,
    's' => $nome,
    'product_tag' => $tag,
    'date_query' => array(
        array(
            //'year'  => get_the_date('Y', '2018'),
            'month' => $jul
        ),
    ),
) );
$attachments8 = new WP_Query( array(
    'post_type'      => 'product',
    'posts_per_page' => 500,
	'product_cat' => 'treinamentos',
    'post_status'    => array( 'publish', 'future' ),
    'post_parent'    => null,
    's' => $nome,
    'product_tag' => $tag,
    'date_query' => array(
        array(
            //'year'  => get_the_date('Y', '2018'),
            'month' => $ago
        ),
    ),
) );
$attachments9 = new WP_Query( array(
    'post_type'      => 'product',
    'posts_per_page' => 500,
	'product_cat' => 'treinamentos',
    'post_status'    => array( 'publish', 'future' ),
    'post_parent'    => null,
    's' => $nome,
    'product_tag' => $tag,
    'date_query' => array(
        array(
            //'year'  => get_the_date('Y', '2018'),
            'month' => $set
        ),
    ),
) );
$attachments10 = new WP_Query( array(
    'post_type'      => 'product',
    'posts_per_page' => 500,
	'product_cat' => 'treinamentos',
    'post_status'    => array( 'publish', 'future' ),
    'post_parent'    => null,
    's' => $nome,
    'product_tag' => $tag,
    'date_query' => array(
        array(
            //'year'  => get_the_date('Y', '2018'),
            'month' => $out
        ),
    ),
) );
$attachments11 = new WP_Query( array(
    'post_type'      => 'product',
    'posts_per_page' => 500,
	'product_cat' => 'treinamentos',
    'post_status'    => array( 'publish', 'future' ),
    'post_parent'    => null,
    's' => $nome,
    'product_tag' => $tag,
    'date_query' => array(
        array(
            //'year'  => get_the_date('Y', '2018'),
            'month' => $nov
        ),
    ),
) );
$attachments12 = new WP_Query( array(
    'post_type'      => 'product',
    'posts_per_page' => 500,
	'product_cat' => 'treinamentos',
    'post_status'    => array( 'publish', 'future' ),
    'post_parent'    => null,
    's' => $nome,
    'product_tag' => $tag,
    'date_query' => array(
        array(
            //'year'  => get_the_date('Y', '2018'),
            'month' => $dez
        ),
    ),
) );

// Janeiro
if($jan != ''){
	if($attachments1->have_posts()){
	echo "<div class='bloco-header-treinamentos'> Janeiro - 2019</div>";
    echo "<ul class='lista-treinamentos' id='janeiro'>";
	// The Loop
	while ( $attachments1->have_posts() ) {
		$attachments1->the_post();
		$id_p = get_the_id();
		$custom_fields = get_post_custom($id_p);
		$my_custom_field = $custom_fields['data'];
		?>
		<a href="<?php the_permalink(); ?>">
		<?php
		echo "<li>";
		echo "<div class='data-postagem'>" . $my_custom_field[0] . "</div> | <span class='titulo-postagem'>";
		echo get_the_title();
		echo "</span></li></a>";
	}
	echo "</ul>";
	wp_reset_postdata();
}else{
	// echo "<li class='sem-postagens'>Nenhum Treinamento Localizado</li>";
}
}
// Fevereiro
if($fev != ''){
	if($attachments2->have_posts()){
	echo "<div class='bloco-header-treinamentos'> Fevereiro - 2019</div>";
    echo "<ul class='lista-treinamentos' id='fevereiro'>";
	// The Loop
	while ( $attachments2->have_posts() ) {
		$attachments2->the_post();
		$id_p = get_the_id();
		$custom_fields = get_post_custom($id_p);
		$my_custom_field = $custom_fields['data'];
		?>
		<a href="<?php the_permalink(); ?>">
		<?php
		echo "<li>";
		echo "<div class='data-postagem'>" . $my_custom_field[0] . "</div> | <span class='titulo-postagem'>";
		echo get_the_title();
		echo "</span></li></a>";
	}
	echo "</ul>";
	wp_reset_postdata();
}else{
	// echo "<li class='sem-postagens'>Nenhum Treinamento Localizado</li>";
}
}	
// Março
if($mar != ''){
	if($attachments3->have_posts()){
	echo "<div class='bloco-header-treinamentos'> Março - 2019</div>";
    echo "<ul class='lista-treinamentos' id='marco'>";
	// The Loop
	while ( $attachments3->have_posts() ) {
		$attachments3->the_post();
		$id_p = get_the_id();
		$custom_fields = get_post_custom($id_p);
		$my_custom_field = $custom_fields['data'];
		?>
		<a href="<?php the_permalink(); ?>">
		<?php
		echo "<li>";
		echo "<div class='data-postagem'>" . $my_custom_field[0] . "</div> | <span class='titulo-postagem'>";
		echo get_the_title();
		echo "</span></li></a>";
	}
	echo "</ul>";
	wp_reset_postdata();
}else{
	// echo "<li class='sem-postagens'>Nenhum Treinamento Localizado</li>";
}
}
// Abril
if($abr != ''){
	if($attachments4->have_posts()){
	echo "<div class='bloco-header-treinamentos'> Abril - 2019</div>";
    echo "<ul class='lista-treinamentos' id='abril'>";
	// The Loop
	while ( $attachments4->have_posts() ) {
		$attachments4->the_post();
		$id_p = get_the_id();
		$custom_fields = get_post_custom($id_p);
		$my_custom_field = $custom_fields['data'];
		?>
		<a href="<?php the_permalink(); ?>">
		<?php
		echo "<li>";
		echo "<div class='data-postagem'>" . $my_custom_field[0] . "</div> | <span class='titulo-postagem'>";
		echo get_the_title();
		echo "</span></li></a>";
	}
	echo "</ul>";
	wp_reset_postdata();
}else{
	// echo "<li class='sem-postagens'>Nenhum Treinamento Localizado</li>";
}
}
// Maio
if($mai != ''){
	if($attachments5->have_posts()){
	echo "<div class='bloco-header-treinamentos'> Maio - 2019</div>";
    echo "<ul class='lista-treinamentos' id='maio'>";
	// The Loop
	while ( $attachments5->have_posts() ) {
		$attachments5->the_post();
		$id_p = get_the_id();
		$custom_fields = get_post_custom($id_p);
		$my_custom_field = $custom_fields['data'];
		?>
		<a href="<?php the_permalink(); ?>">
		<?php
		echo "<li>";
		echo "<div class='data-postagem'>" . $my_custom_field[0] . "</div> | <span class='titulo-postagem'>";
		echo get_the_title();
		echo "</span></li></a>";
	}
	echo "</ul>";
	wp_reset_postdata();
}else{
	// echo "<li class='sem-postagens'>Nenhum Treinamento Localizado</li>";
}
}
// Junho
if($jun != ''){
	if($attachments6->have_posts()){
	echo "<div class='bloco-header-treinamentos'> Junho - 2019</div>";
    echo "<ul class='lista-treinamentos' id='junho'>";
	// The Loop
	while ( $attachments6->have_posts() ) {
		$attachments6->the_post();
		$id_p = get_the_id();
		$custom_fields = get_post_custom($id_p);
		$my_custom_field = $custom_fields['data'];
		?>
		<a href="<?php the_permalink(); ?>">
		<?php
		echo "<li>";
		echo "<div class='data-postagem'>" . $my_custom_field[0] . "</div> | <span class='titulo-postagem'>";
		echo get_the_title();
		echo "</span></li></a>";
	}
	echo "</ul>";
	wp_reset_postdata();
}else{
	// echo "<li class='sem-postagens'>Nenhum Treinamento Localizado</li>";
}	
}
// Julho
if($jul != ''){
	if($attachments7->have_posts()){
	echo "<div class='bloco-header-treinamentos'> Julho - 2019</div>";
    echo "<ul class='lista-treinamentos' id='julho'>";
	// The Loop
	while ( $attachments7->have_posts() ) {
		$attachments7->the_post();
		$id_p = get_the_id();
		$custom_fields = get_post_custom($id_p);
		$my_custom_field = $custom_fields['data'];
		?>
		<a href="<?php the_permalink(); ?>">
		<?php
		echo "<li>";
		echo "<div class='data-postagem'>" . $my_custom_field[0] . "</div> | <span class='titulo-postagem'>";
		echo get_the_title();
		echo "</span></li></a>";
	}
	echo "</ul>";
	wp_reset_postdata();
}else{
	// echo "<li class='sem-postagens'>Nenhum Treinamento Localizado</li>";
}
}
// Agosto
if($ago != ''){
	if($attachments8->have_posts()){
	echo "<div class='bloco-header-treinamentos'> Agosto - 2019</div>";
    echo "<ul class='lista-treinamentos' id='agosto'>";
	// The Loop
	while ( $attachments8->have_posts() ) {
		$attachments8->the_post();
		$id_p = get_the_id();
		$custom_fields = get_post_custom($id_p);
		$my_custom_field = $custom_fields['data'];
		?>
		<a href="<?php the_permalink(); ?>">
		<?php
		echo "<li>";
		echo "<div class='data-postagem'>" . $my_custom_field[0] . "</div> | <span class='titulo-postagem'>";
		echo get_the_title();
		echo "</span></li></a>";
	}
	echo "</ul>";
	wp_reset_postdata();
}else{
	// echo "<li class='sem-postagens'>Nenhum Treinamento Localizado</li>";
}
}
// Setembro
if($set != ''){
	if($attachments9->have_posts()){
	echo "<div class='bloco-header-treinamentos'> Setembro - 2019</div>";
    echo "<ul class='lista-treinamentos' id='setembro'>";
	// The Loop
	while ( $attachments9->have_posts() ) {
		$attachments9->the_post();
		$id_p = get_the_id();
		$custom_fields = get_post_custom($id_p);
		$my_custom_field = $custom_fields['data'];
		?>
		<a href="<?php the_permalink(); ?>">
		<?php
		echo "<li>";
		echo "<div class='data-postagem'>" . $my_custom_field[0] . "</div> | <span class='titulo-postagem'>";
		echo get_the_title();
		echo "</span></li></a>";
	}
	echo "</ul>";
	wp_reset_postdata();
}else{
	// echo "<li class='sem-postagens'>Nenhum Treinamento Localizado</li>";
}
}
// Outubro
if($out != ''){
	if($attachments10->have_posts()){
	echo "<div class='bloco-header-treinamentos'> Outubro - 2019</div>";
    echo "<ul class='lista-treinamentos' id='outubro'>";
	// The Loop
	while ( $attachments10->have_posts() ) {
		$attachments10->the_post();
		$id_p = get_the_id();
		$custom_fields = get_post_custom($id_p);
		$my_custom_field = $custom_fields['data'];
		?>
		<a href="<?php the_permalink(); ?>">
		<?php
		echo "<li>";
		echo "<div class='data-postagem'>" . $my_custom_field[0] . "</div> | <span class='titulo-postagem'>";
		echo get_the_title();
		echo "</span></li></a>";
	}
	echo "</ul>";
	wp_reset_postdata();
}else{
	// echo "<li class='sem-postagens'>Nenhum Treinamento Localizado</li>";
}
}
// Novembro	
if($nov != ''){
	if($attachments11->have_posts()){
	echo "<div class='bloco-header-treinamentos'> Novembro - 2019</div>";
    echo "<ul class='lista-treinamentos' id='novembro'>";
	// The Loop
	while ( $attachments11->have_posts() ) {
		$attachments11->the_post();
		$id_p = get_the_id();
		$custom_fields = get_post_custom($id_p);
		$my_custom_field = $custom_fields['data'];
		?>
		<a href="<?php the_permalink(); ?>">
		<?php
		echo "<li>";
		echo "<div class='data-postagem'>" . $my_custom_field[0] . "</div> | <span class='titulo-postagem'>";
		echo get_the_title();
		echo "</span></li></a>";
	}
	echo "</ul>";
	wp_reset_postdata();
}else{
	// echo "<li class='sem-postagens'>Nenhum Treinamento Localizado</li>";
}
}
//Dezembro	
if($dez != ''){
	if($attachments12->have_posts()){
	echo "<div class='bloco-header-treinamentos'> Dezembro - 2019</div>";
    echo "<ul class='lista-treinamentos' id='dezembro'>";
	// The Loop
	while ( $attachments12->have_posts() ) {
		$attachments12->the_post();
		$id_p = get_the_id();
		$custom_fields = get_post_custom($id_p);
		$my_custom_field = $custom_fields['data'];
		?>
		<a href="<?php the_permalink(); ?>">
		<?php
		echo "<li>";
		echo "<div class='data-postagem'>" . $my_custom_field[0] . "</div> | <span class='titulo-postagem'>";
		echo get_the_title();
		echo "</span></li></a>";
	}
	echo "</ul>";
	wp_reset_postdata();
}else{
		// echo "<li class='sem-postagens'>Nenhum Treinamento Localizado</li>";
	}
}

?>