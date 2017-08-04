<?php Starkers_Utilities::get_template_parts( array( 'parts/shared/html-header', 'parts/shared/header' ) ); ?>
<div class="swiper-pagination c-setup-progress"></div>
<section class="o-section">
	<div class="u-box">
		<section class="c-setup">
			<header>
				<h2>Let's setup your <span>'Retirement'</span> goal</h2>
			</header>
			<div class="swiper-container swiper-wizard">
				<div class="swiper-wrapper">					
					<div class="swiper-slide">
						<section>
							<form>
								<div class="c-setup-question">
									<p>I spend USh.</p>
									<div class="o-input">
										<input type="text" autofocus="autofocus" class="js-thousands"/>
										<span></span>
									</div>
									<p>every month on my current lifestyle.</p>
								</div>					
								<p class="u-footnote">Only enter amounts you spend on yourself, exclude things like school fees since you're not likely to incur them during retirement</p>
							</form>
						</section>
						<div class="c-setup-footer">
							<a href="#" class="o-button s--next">Next</a>
						</div>
					</div>
					
					<div class="swiper-slide">
						<section>
							<form>
								<div class="c-setup-question">
									<p>I have</p>
									<div class="o-input">
										<input type="text"/>
										<span></span>
									</div>
									<p>years to my retirement</p>
								</div>					
								<p class="u-footnote">Average age of retirement in Uganda is 65 years.</p>
							</form>
						</section>
						<div class="c-setup-footer">
							<a href="#" class="o-button s--back">Back</a>
							<a href="#" class="o-button s--next">Next</a>
						</div>
					</div>
					<div class="swiper-slide">
						<section>
							<form>
								<div class="c-setup-question">
									<p>I might spend</p>
									<div class="o-input">
										<input type="text"/>
										<span></span>
									</div>
									<p>years in my retirement</p>
								</div>
								<p class="u-footnote">e.g if you anticipate to retire at 60, plan for at least 25 years in retirement</p>					
							</form>
						</section>
						<div class="c-setup-footer">
							<a href="#" class="o-button s--back">Back</a>
							<a href="#" class="o-button s--next">Next</a>
						</div>
					</div>
					<div class="swiper-slide">
						<section>
							<form>
								<div class="c-setup-question">
									<p>I'm willing to start with an initial investment of USh.</p>
									<div class="o-input">
										<input type="text" class="js-thousands"/>
										<span></span>
									</div>
								</div>
								<p class="u-footnote">Xeno recommends you start with a value that is not less than what you anticipate to retire at 60, plan for at least 25 years in retirement</p>				
							</form>
						</section>
						<div class="c-setup-footer">
							<a href="#" class="o-button s--back">Back</a>
							<a href="#" class="o-button s--next">Next</a>
						</div>
					</div>
					<div class="swiper-slide">
						<section class="c-setup-summary">
							<h3>Summary of amount needed</h3>
							<ul>
								<li><span>Needed at start of retirement</span><span class="u-footnote">This is the total amount needed to finance your standard of living during retirement.</span></li>
								<li><span>USh. 7,29,948,916</span></li>
							</ul>
							<ul>
								<li><span>Amount to save annually</span></li>
								<li><span>USh. 57,89,948,916</span></li>
							</ul>
							<ul class="u-highlight">
								<li><span>Amount to save monthly</span></li>
								<li class="u-highlight"><span>USh. 889,664</span></li>
							</ul>
							<div class="c-scenario">
							    <p>If you follow the Xeno recommended investment strategy starting with an initial deposit of <br/><b>Ush <span id="initialInvestment">1,000,000</span></b> and then add <b>USh <span id="monthlyInvestment">889,664</span></b> every month for <b><span id="investmentHorizon">10</span></b> years, the value of your investment will most likely fall between USh <b><span id="lowerReturns">205,000,000</span></b> and <b>USh <span id="upperReturns">335,000,000</span></b> at the end of the period.</p>
							</div>
							<div id="portfolio_growth"></div>
							<div id="portfolio_allocation" class="u-hide"></div>
						</section>
						
						<div class="c-setup-footer">
							<a href="#" class="o-button s--restart">Change Answers</a>
							<a href="#" class="o-button s--next">Make Deposit</a>
						</div>
					</div>
					<div class="swiper-slide">
						<section>
							<section class="c-setup-summary">
								<h3>Bank Deposit Details</h3>
								<ul>
									<li><span>Bank Name</span></li>
									<li><span>Barclays Bank Uganda</span></li>
								</ul>
								<ul>
									<li><span>Branch</span></li>
									<li><span>Makerere</span></li>
								</ul>
								<ul>
									<li><span>Account Number</span></li>
									<li><span>900XUAD-900</span></li>
								</ul>
								<ul>
									<li><span>Deposit Name</span></li>
									<li><span>Arthur Nakkaka</span></li>
								</ul>
							</section>
							<p class="u-footnote">Once you've made this deposit, Aeko will provide the text that describes what follows next here so stay tunned. Click verify if you've made your payment</p>
						</section>
						<div class="c-setup-footer">
							<a href="#" class="o-button s--back">Back</a>
							<a href="#" class="o-button s--next">Verify Payment</a>
						</div>
					</div>
				</div>
			</div>
		</section>	
	</div>
</section>
<div class="u-hide">XENOFIRSTIMEL4G3N</div>
<?php Starkers_Utilities::get_template_parts( array( 'parts/shared/footer','parts/shared/html-footer') ); ?>