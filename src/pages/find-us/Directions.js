import React, { Component } from 'react';

export default class OfficeInfo extends Component {
	render() {
		return (
			<div>
				<div class="row no-gutter">
					<div class="col-xs-12">
						<h2 class="text-center" id="directions-title">Get Directions</h2>
					</div>
				</div>

				<div class="row no-gutter">
					<div class="col-sm-5 by-transport-column">
						<h3 class="text-center section-header-white">By Road</h3>

						<p class="lead text-center directions-paragraph">Mumblecore master cleanse semiotics, hammock bicycle rights polaroid fanny pack pitchfork pok pok leggings health goth yr. Affogato ethical tofu franzen. Cray skateboard semiotics artisan, swag polaroid air plant gentrify pinterest kale chips marfa kombucha slow-carb jean shorts wayfarers.</p>
					</div>

					<div class="col-sm-2"></div>

					<div class="col-sm-5 by-transport-column">
						<h2 class="text-center section-header-white">By Rail</h2>

						<p class="lead text-center directions-paragraph">Mumblecore master cleanse semiotics, hammock bicycle rights polaroid fanny pack pitchfork pok pok leggings health goth yr. Affogato ethical tofu franzen. Cray skateboard semiotics artisan, swag polaroid air plant gentrify pinterest kale chips marfa kombucha slow-carb jean shorts wayfarers.</p>
					</div>
				</div>
			</div>
		);
	}
}