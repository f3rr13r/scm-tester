import React, { Component } from "react";

import FooterContactBar from './footer/FooterContactBar';
import FooterSocialBar from './footer/FooterSocialBar';
import FooterAccreditationBar from './footer/FooterAccreditationBar'

export default class Footer extends Component {
	render() {
		return (
			<div>
				<FooterContactBar />
				<FooterSocialBar />
				<FooterAccreditationBar />
			</div>
		);
	}
}