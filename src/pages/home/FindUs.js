import React, { Component } from "react";
import { Link } from 'react-router';

import StyledMapExample from '../../google-map/googleMap';

export default class FindUs extends Component {
	render() {
		return (
			<div>
				<div class="container-fluid where-to-find-us-container">
					<div class="row no-gutter">
						<div class="col-sm-6">
							<div class="google-maps-map">
								<div id='gmap_canvas'>

									<StyledMapExample />

								</div>
							</div>
						</div>

						<div class="col-sm-6">
							<div class="where-to-find-us-info">

								{/*<!-- WHERE TO FIND US -->*/}

								<h1 id="find-us-title" class="text-center">Where To Find Us</h1>

									<hr id="who-we-are-horizontal-rule"/>

									<p class="lead text-center text-white-and-larger">Sedgwick Chudleigh McKenna Solicitors Ltd</p>

									<p class="lead text-center text-white-and-larger">1st Floor</p>

									<p class="lead text-center text-white-and-larger">14 Wyndham Street</p>

									<p class="lead text-center text-white-and-larger">Bridgend</p>

									<p class="lead text-center text-white-and-larger">MID GLAMORGAN</p>

									<p class="lead text-center text-white-and-larger">CF31 1LH</p>

									<hr id="who-we-are-horizontal-rule"/>

									<p class="text-center"><Link to="findUs" id="get-directions-button" class="btn btn-primary btn-lg" role="button">Get Directions</Link></p>

							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}