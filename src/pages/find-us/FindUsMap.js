import React, { Component } from 'react';

import StyledMapExample from '../../google-map/googleMap';

export default class FindUsMap extends Component {
	render() {
		return (
				<div class="row no-gutter">
					<div class="col-sm-10 col-sm-offset-1">
						<div class="google-maps-map" id="find-us-page-map">
							<div id='gmap_canvas'>

								<StyledMapExample />
								
							</div>
						</div>
					</div>
				</div>
		);
	}
}