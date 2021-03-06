<!DOCTYPE HTML>
<!--[if IEMobile 7 ]><html class="no-js iem7" manifest="default.appcache?v=1"><![endif]--> 
<!--[if lt IE 7 ]><html class="no-js ie6" lang="en"><![endif]--> 
<!--[if IE 7 ]><html class="no-js ie7" lang="en"><![endif]--> 
<!--[if IE 8 ]><html class="no-js ie8" lang="en"><![endif]--> 
<!--[if (gte IE 9)|(gt IEMobile 7)|!(IEMobile)|!(IE)]><!--><html class="no-js" lang="en"><!--<![endif]-->
	<head>
		<title><?php bloginfo( 'name' ); ?><?php wp_title('-');?></title>
		<meta charset="<?php bloginfo( 'charset' ); ?>" />
	  	<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<link rel="shortcut icon" href="<?php echo get_stylesheet_directory_uri(); ?>/favicon.ico"/>
		<link href="<?php echo get_stylesheet_directory_uri(); ?>/style.css?v1.5" rel="stylesheet">
		<link href="<?php echo get_stylesheet_directory_uri(); ?>/js/vendors/swiper.css" rel="stylesheet">
		<link href="https://fonts.googleapis.com/css?family=Lato:300,400,700|Open+Sans:300,400" rel="stylesheet">		
		<script src="https://code.highcharts.com/highcharts.js"></script>
		<script src="https://code.highcharts.com/highcharts-more.js"></script>
		<script type="text/javascript">
				function numberWithCommas(x) {
			    	return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
				}
				function removeCommas(s){
				  return s.replace(/,/g, '');
				}
		</script>
		<?php wp_head(); ?>
	</head>
	<body>
