<?php
/**
 * The template for displaying product content in the single-product.php template
 *
 * This template can be overridden by copying it to yourtheme/woocommerce/content-single-product.php.
 *
 * HOWEVER, on occasion WooCommerce will need to update template files and you
 * (the theme developer) will need to copy the new files to your theme to
 * maintain compatibility. We try to do this as little as possible, but it does
 * happen. When this occurs the version of the template file will be bumped and
 * the readme will list any important changes.
 *
 * @see 	    https://docs.woocommerce.com/document/template-structure/
 * @author 		WooThemes
 * @package 	WooCommerce/Templates
 * @version     3.0.0
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

?>

<?php
	/**
	 * woocommerce_before_single_product hook.
	 *
	 * @hooked wc_print_notices - 10
	 */
	 do_action( 'woocommerce_before_single_product' );

	 if ( post_password_required() ) {
	 	echo get_the_password_form();
	 	return;
	 }
?>
<?php
// obtendo as informações do produto
$preco_regular = get_post_meta( get_the_ID(), '_regular_price', true);
$preco_venda = get_post_meta( get_the_ID(), '_sale_price', true);
$data_limite = date("d/m/Y", get_post_meta( get_the_ID(), '_sale_price_dates_to', true));

?>
<div class="container treineconte">
	<div class="row">
		<div class="col-md-7">

			<div class="trein-head">
		<h2>TREINAMENTOS</h2>	
			<h3>PROGRAMAÇÃO COMPLETA</h3>	
		</div>
	<div class="treintumbeti">
			<?php the_post_thumbnail( 'full' ); ?>
			<?php the_title( '<h2 class="custom-page-title treinamento">', '</h2>' ); ?>
		</div>
	
		
<div class="boxgray treindata"><?php the_field('data'); ?> | <?php the_field('local'); ?></div>
			
<div class="treinanum"><img src="<?php the_field('img_anuncio_01'); ?>" /></div>

<div class="treintit tt1"><?php the_field('modulo_01_titulo'); ?></div>
<div class="treinite ti1"><?php the_field('modulo_01_itens'); ?></div>
			
<div class="treintit tt2"><?php the_field('modulo_02_titulo'); ?></div>			
<div class="treinite ti2"><?php the_field('modulo_02_itens'); ?></div>			
			
<div class="treintit tt3"><?php the_field('modulo_03_titulo'); ?></div>
<div class="treinite ti3"><?php the_field('modulo_03_itens'); ?></div>	
			
<div class="treintit tt4"><?php the_field('modulo_04_titulo'); ?></div>		
<div class="treinite ti4"><?php the_field('modulo_04_itens'); ?></div>
			
<div class="treintit tt5"><?php the_field('modulo_05_titulo'); ?></div>			
<div class="treinite ti5"><?php the_field('modulo_05_itens'); ?></div>

<div class="treintit tt6"><?php the_field('modulo_06_titulo'); ?></div>			
<div class="treinite ti6"><?php the_field('modulo_06_itens'); ?></div>
			
<div class="informacoes-adicionais-treinamentos">
	<?php //the_field('informativo'); ?>
	OBJETIVO:
	<p><?php the_field('objetivo'); ?></p>
	PÚBLICO ALVO:
	<p><?php the_field('publico_alvo'); ?></p>
	LOCAL:
	<p><?php the_field('local_treinamento'); ?></p>
</div>		

<div class="politica-privacidade-treinamentos" id="ancora-treinamento">
	<?php //the_field('politica_de_privacidade'); ?>
	<?php
		$my_postid = 1875;//This is page id or post id
		$content_post = get_post($my_postid);
		$content = $content_post->post_content;
		echo $content;
	?>
</div>
<div class="bloco-precos">
	<?php if($preco_venda != ''){ ?>
		<div class="investimento">
			<?php //the_field('investimento'); ?>	
			Investimento: R$ <?php echo number_format($preco_venda, 2, ',','.'); ?>
		</div>
	<?php }else{ ?>
		<div class="investimento" style="max-width: none;">
			<?php //the_field('investimento'); ?>	
			Investimento: R$ <?php echo number_format($preco_regular, 2, ',','.'); ?>
		</div>
	<?php } ?>
	<!-- verifica se foi preenchido preco promocioanal e data limite-->
<?php if($data_limite != ''): ?>
<div class="preco_maior_apos_periodo">
	<?php //the_field('preco_maior_apos_periodo'); ?>
	Após <?php echo $data_limite; ?> : R$ <?php echo number_format($preco_regular, 2, ',','.'); ?>
</div>
<?php endif; ?>
</div>
			
<div class="link-comprar-treinamento"><a id="comprartrein" class="treinbot" onclick="adicionarCarrinho()">clique e aqui e faça a sua inscrição</a></div>
<style type="text/css">
	.ajaxLoaderActive {
    background-image: url(http://propagandarapida.com.br/wp-content/uploads/2018/03/Spinner-1s-200px.gif)!important;
    background-size: 42px!important;
    background-repeat: no-repeat!important;
    background-position-x: 50%!important;
}
</style>
<script>
	if (window.XMLHttpRequest){
		xmlhttp = new XMLHttpRequest();
	} else if (window.ActiveXObject){
		xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
	}else{
		alert ("Seu navegador não tem suporte para Ajax");
	}
</script>
<script>
function adicionarCarrinho(){

			jQuery("a#comprartrein").text("");
		  	document.getElementById('comprartrein').style.cursor = 'no-drop';
			document.getElementById('comprartrein').style.background = '#7911446b';
			document.getElementById('comprartrein').classList.add('ajaxLoaderActive');
		
			xmlhttp.open('GET','<?php the_field('link_comprar_treinamento'); ?>?add-to-cart=<?php the_ID(); ?>',true);
			xmlhttp.send();	
			xmlhttp.onreadystatechange = function() {

			if (xmlhttp.readyState == 4){
				console.log('Iniciando conexão para status 200');
				// document.getElementById('msg-success-cart').innerHTML = "Aguarde, você será redirecionado para o carrinho.";
				
				if (xmlhttp.status == 200){
						window.location = "http://propagandarapida.com.br/carrinho/";
						
				} else {
						console.log('Houve um erro, e não foi possivel obter a resposta');
				}
			}else {
				console.log('Nao foi possivel iniciar conexão para status 200');
			}
		}
}
</script>
			
		</div>
		<?php
			if ( $shop_page ) {
				if ( ! $account_page ) {
					get_sidebar( 'shop' );
				}
			} else {
				get_sidebar();
			}
			?>
	</div>
</div>

<?php do_action( 'woocommerce_after_single_product' ); ?>


