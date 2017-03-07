<?php Starkers_Utilities::get_template_parts( array( 'parts/shared/html-header', 'parts/shared/header' ) ); ?>
<section class="o-section">
	<div class="u-box">
		<section>
			<form class="c-enroll">
				<header>
					<p>Financial markets regulations require us to properly identify each of our customers. To complete the sign-up process, please provide accurate information in the fields that follow. The identification details you provide must match those in a government-issued ID. Be sure to upload your identification document (passport, national ID, or driving permit) as well as a passport sized photograph (or full-faced selfie). Your information will be protected with the strongest browser encryption technology and all data is stored on secure servers. We will never share your data with any third party without your permission. Please review our Privacy Policy for further information.</p>
				</header>
				<fieldset class="o-fieldset">
					<legend class="o-fieldset__title">Basic Information</legend>
					<div class="clear">
						<div class="o-input u-half">
							<input type="text" placeholder="First Name" required="required"/>
							<span></span>
						</div>
						<div class="o-input u-half">
							<input type="text" placeholder="Last Name" required="required"/>
							<span></span>
						</div>
					</div>
					<div class="o-input">
						<input class="o-date" type="text" placeholder="Date of Birth" required="required"/>
						<span></span>
					</div>
					<fieldset>
						<div class="o-radio">
							<input type="radio" id="rd-radio-1" name="sex">	
							<label for="rd-radio-1">Male</label>
						</div>
						<div class="o-radio">
							<input type="radio" id="rd-radio-2" name="sex">	
							<label for="rd-radio-2">Female</label>
						</div>
						<span class="o-line"></span>
					</fieldset>
					<div class="o-input">
						<input type="number" placeholder="Telephone" required="required"/>
						<span></span>
					</div>
				</fieldset>
				<fieldset class="o-fieldset">
					<legend class="o-fieldset__title">Address</legend>
					<div class="clear">
						<div class="o-input u-half">
							<input type="text" placeholder="Plot/Flat/House Number">
							<span></span>
						</div>
						<div class="o-input u-half">
							<input type="text" placeholder="Road/Street">
							<span></span>
						</div>
						<div class="o-input u-half">
							<input type="text" placeholder="P.O.Box">
							<span></span>
						</div>
						<div class="o-input u-half">
							<input type="text" placeholder="District">
							<span></span>
						</div>
						<div class="o-input u-half">
							<input type="text" placeholder="County">
							<span></span>
						</div>
						<div class="o-input u-half">
							<input type="text" placeholder="Country">
							<span></span>
						</div>
					</div>
				</fieldset>
				<fieldset class="o-fieldset">
					<legend class="o-fieldset__title">Identification</legend>
					<fieldset>
						<legend>Choose Identification type</legend>
						<div>
							<div class="o-radio">
								<input type="radio" id="id-1" name="id">	
								<label for="id-1">Passport</label>
							</div>
							<div class="o-radio">
								<input type="radio" id="id-2" name="id">
								<label for="id-2">National ID</label>
							</div>
							<div class="o-radio">
								<input type="radio" id="id-3" name="id">
								<label for="id-3">Driving Permit</label>
							</div>
						</div>
						<span class="o-line"></span>
					</fieldset>
					<fieldset class="o-upload">
						<legend>Identification (PDF, JPG or PNG)</legend>
						<div class="o-file">
							<input type="file" id="file" name="pic"/>
							<label for="file" class="o-button">Upload ID</label>
						</div>
					</fieldset>
					<div class="o-input">
						<input type="text" placeholder="ID Number">
						<span></span>
					</div>
					<fieldset class="o-upload">
						<legend>Passport Photo (PDF, JPG or PNG)</legend>
						<div class="o-file">
							<input type="file" id="file" name="pic"/>
							<label for="file" class="o-button">Upload Photo</label>
						</div>
					</fieldset>
				</fieldset>
				<fieldset class="o-fieldset">
					<legend class="o-fieldset__title">Source of Funds</legend>
					<fieldset>
						<legend>Employment Status [tick all that apply]</legend>
						<div class="o-check">
							<input type="checkbox" name="status" id="status-1">
							<label for="status-1">Employment</label>
						</div>
						<div class="o-check">
							<input type="checkbox" name="status" id="status-2">
							<label for="status-2">Business</label>
						</div>
						<div class="o-check">
							<input type="checkbox" name="status" id="status-3">
							<label for="status-3">Inheritance</label>
						</div>
						<div class="o-check">
							<input type="checkbox" name="status" id="status-4">
							<label for="status-4">Allowance</label>
						</div>
						<div class="o-check">
							<input type="checkbox" name="status" id="status-5">
							<label for="status-5">Other</label>
						</div>
						<span class="o-line"></span>
					</fieldset>
					<div class="o-input">
						<input type="text" placeholder="Monthly Income (UGX)">
						<span></span>
					</div>
					<div class="o-input">
						<input type="text" placeholder="Current Net Worth (UGX)">
						<span></span>
					</div>
					<div class="o-input">
						<input type="text" placeholder="Expected Initial Investment (UGX)">
						<span></span>
					</div>
					<div class="o-input">
						<input type="text" placeholder="Expected Monthly Investment (UGX)">
						<span></span>
					</div>
				</fieldset>
				<fieldset class="o-fieldset">
					<legend class="o-fieldset__title">Banking</legend>
					<fieldset>
						<legend>Provide bank account (this will be the official bank account to which we will send your funds in case you withdraw</legend>
						<div class="o-input">
							<input type="text" placeholder="Bank Name">
							<span></span>
						</div>
						<div class="o-input">
							<input type="text" placeholder="Bank Branch">
							<span></span>
						</div>
						<div class="o-input">
							<input type="text" placeholder="Account Number">
							<span></span>
						</div>
						<div class="o-input">
							<input type="text" placeholder="Account Name">
							<span></span>
						</div>
					</fieldset>
				</fieldset>
				<fieldset class="o-fieldset">
					<legend class="o-fieldset__title">Elect Beneficiary</legend>
					<fieldset>
						<legend>Provide details of beneficiary in case you pass on.</legend>
						<div class="o-input">
							<input type="text" placeholder="First Name">
							<span></span>
						</div>
						<div class="o-input">
							<input type="text" placeholder="Surname">
							<span></span>
						</div>
						<div class="o-input">
							<input type="text" placeholder="Nature of Relation">
							<span></span>
						</div>
						<div class="o-input">
							<input type="number" placeholder="Percentage">
							<span></span>
						</div>
					</fieldset>
					<a href="" class="o-button u-right">Add Beneficiary</a>
				</fieldset>
				<fieldset class="o-fieldset">
					<legend class="o-fieldset__title">Security Questions</legend>
					<ul>
						<li>
							<div class="o-select">
								<select>
								  <option>Security Question 1</option>
								  <option>Why is y</option>
								  <option>What is z</option>
								  <option>Where is n</option>
								</select>
							</div>
							<div class="o-input">
								<input type="text" placeholder="Answer">
								<span></span>
							</div>
						</li>
						<li>
							<div class="o-select">
								<select>
								  <option>Security Question 2</option>
								  <option>Why is y</option>
								  <option>What is z</option>
								  <option>Where is n</option>
								</select>
							</div>
							<div class="o-input">
								<input type="text" placeholder="Answer">
								<span></span>
							</div>
						</li>
						<li>
							<div class="o-select">
								<select>
								  <option>Security Question 3</option>
								  <option>Why is y</option>
								  <option>What is z</option>
								  <option>Where is n</option>
								</select>
							</div>
							<div class="o-input">
								<input type="text" placeholder="Answer">
								<span></span>
							</div>
						</li>
					</ul>
				</fieldset>
				<fieldset class="o-fieldset">
					<legend class="o-fieldset__title">Discovery</legend>
					<fieldset>
						<legend>How did you find out about us?</legend>
						<div class="o-select">
							<select>
							  <option>Xeno employee </option>
							  <option>My bank</option>
							  <option>Friend</option>
							  <option>Social Media</option>
							  <option>Print</option>
							  <option>Television</option>
							  <option>Mobile/Internet Ad</option>
							  <option>Podcast/Radio</option>
							  <option>Posters/Outdoor Ads</option>
							  <option>Other</option>
							</select>
						</div>
					</fieldset>
				</fieldset>
				<footer class="clear">
					<p>By signing up you agree to our <a href="#" class="u-link">Terms of Service</a> and <a class="u-link" href="#">Privacy Policy</a></p>
					<a href="#" class="o-button u-right">Create Account</a>
				</footer>
			</form>
		</section>
	</div>
</section>
<?php Starkers_Utilities::get_template_parts( array( 'parts/shared/footer','parts/shared/html-footer') ); ?>