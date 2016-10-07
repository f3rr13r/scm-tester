import React, { Component } from "react";

import FindUsMap from './find-us/FindUsMap';
import OfficeInfo from './find-us/OfficeInfo';
import Directions from './find-us/Directions';

export default class FindUs extends Component {
	render() {
		return (
			<div class="container-fluid where-to-find-us-map-container">
				<FindUsMap />
				<OfficeInfo />

				<hr id="directions-horizontal-rule" />

				<Directions />

			</div>
		);
	}
}