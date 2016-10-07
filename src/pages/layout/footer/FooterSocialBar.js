import React, { Component } from "react";

export default class FooterSocialBar extends Component {
	render() {
		return (
			<div>
				<div class="container-fluid footer-container">
					<div class="row no-gutter">

						{/*<!-- SOCIAL MEDIA SECTION -->*/}

						<div class="col-sm-4 col-xs-6">
							<div class="icon-holder">
								<a href="https://www.facebook.com/Sedgwick-Chudleigh-McKenna-Solicitors-222487694772423/about/?section=hours&tab=page_info" target="_blank"><img id="facebook-icon" src={require("../../../img/footer-facebook-logo.png")} /></a>
							</div>
							<div class="icon-holder">
								<a href="https://www.linkedin.com/company/sedgwick-chudleigh-mckenna-solicitors" target="_blank"><img id="linkedin-icon" src={require("../../../img/footer-linkedin-logo.png")} /></a>
							</div>
						</div>

						{/*<!-- LOGO SECTION -->*/}

						<div class="col-sm-4 hidden-xs">
							<div id="footer-logo">
								<a href="#top"><img id="footer-logo-icon" src={require("../../../img/scm-logo-small.png")} /></a>
							</div>
						</div>

						{/*<!-- ACCREDITATION SECTION -->*/}

						<div class="col-sm-4 col-xs-6">
							<div id="footer-accreditations">
								<a href="http://www.lawsociety.org.uk/support-services/accreditation/lexcel/" target="_blank"><img id="lexcel-icon" src={require("../../../img/footer-lexcel-logo.png")} /></a>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}