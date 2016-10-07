import React, { Component } from "react";
import { Link } from 'react-router';

export default class Jumbotron extends Component {
	render() {
		return (
			<div>
				<div class="container-fluid who-we-are-container">
					<div class="row no-gutter">
						<div class="col col-sm-6">

							{/*<!-- WHO WE ARE DIALOGUE -->*/}

							<div id="who-we-are-dialogue-box">
								<h1 id="who-we-are-title" class="text-center">Who We Are</h1>

								<hr id="who-we-are-horizontal-rule"/>

								<p id="who-we-are-description-tag" class="lead text-center">Mumblecore master cleanse semiotics, hammock bicycle rights polaroid fanny pack pitchfork pok pok leggings health goth yr. Affogato ethical tofu franzen. Cray skateboard semiotics artisan, swag polaroid air plant gentrify pinterest kale chips marfa kombucha slow-carb jean shorts wayfarers.</p>

								<p class="text-center"><Link to="team" id="meet-the-team-button" class="btn btn-primary btn-lg" role="button">Meet the team</Link></p>
							</div>
						</div>

						<div class="col col-sm-6">

							{/*<!-- ASSOCIATED PHOTOGRAPH -->*/}

							<div id="who-we-are-supporting-image">

								{/*<!-- FOR DIV INFORMATION, SEE CSS -->*/}

							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}