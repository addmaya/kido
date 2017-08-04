<section class="c-header is-page">
	<div class="u-box">
		<div class="clear">
			<a class="c-logo"></a>
			<a href="#" class="c-menu__toggle"></a>
		</div>
		<div class="c-dummy">
			<a <?php if(is_page('retirement')){echo 'class="is-active"';} ?> href="<?php echo home_url(); ?>/retirement">Retirement</a>
			<a <?php if(is_page('education')){echo 'class="is-active"';} ?> href="<?php echo home_url(); ?>/education">Education</a>
			<a <?php if(is_page('emergencies')){echo 'class="is-active"';} ?> href="<?php echo home_url(); ?>/emergencies">Emergency</a>
			<a <?php if(is_page('income')){echo 'class="is-active"';} ?> href="<?php echo home_url(); ?>/income">Income</a>
			<a <?php if(is_page('build-home')){echo 'class="is-active"';} ?> href="<?php echo home_url(); ?>/build-home">Home</a>
			<a <?php if(is_page('wealth')){echo 'class="is-active"';} ?> href="<?php echo home_url(); ?>/wealth">Wealth</a>
		</div>
	</div>
</section>