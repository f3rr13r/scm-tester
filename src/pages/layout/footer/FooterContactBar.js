import React, { Component } from "react";

export default class FooterContactBar extends Component {
	render() {
		return (
			<div>
				<div class="container-fluid bottom-contact-us-container">
					<div class="row">
						<div class="col-xs-12">
							<button id="find-us-email-contact-button" type="button" data-toggle="modal" data-target="#contactUsModal"><img class="email-icon" src={require("../../../img/email-icon-white copy.png")} />Contact Us</button>
						</div>
					</div>
				</div>
			</div>
		);
	}
}