import React, { Component } from "react";

export default class NavContactBar extends Component {
	render() {
		return (
			<div>
				<div class="container top-container">
					<div class="row no-gutter">

						{/*<!-- <div class="col-xs-6 col-sm-8 col-md-9"> -->*/}

						<div class="col-xs-12 col-sm-8 col-md-9">


							{/*<!-- Phone number -->*/}
							<div class="gray-background">
								<div id="phone-contact-holder">
									<a class="office-phone-icon-and-number" href="#"><img class="phone-icon" src={require("../../../img/phone-icon.png")} /><span class="phone-number-padding-issues">01656 767766</span></a>

									<a class="emergency-phone-icon-and-number" href="#"><img class="phone-icon" src={require("../../../img/24-hour-number-icon.png")} /><span class="phone-number-padding-issues">07917 754134</span></a>
								</div>
							</div>
						</div>

						{/*<!-- <div class="col-xs-6 col-sm-4 col-md-3"> -->*/}

						<div class="col-xs-12 col-sm-4 col-md-3">

							{/*<!-- Contact Us button -->*/}
							<div class="light-blue-background">
								<div>
									<button class="email-icon-button" type="button" data-toggle="modal" data-target="#contactUsModal"><img class="email-icon" src={require("../../../img/email-icon-white copy.png")} />Contact Us</button>
								</div>
							</div>
						</div>

					</div>
				</div>
			</div>
		);
	}
}