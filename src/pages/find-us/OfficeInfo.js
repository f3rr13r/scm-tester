import React, { Component } from 'react';

export default class OfficeInfo extends Component {
	render() {
		return (
			<div class="row no-gutter">
				<div class="col-sm-6 our-offices">
					<h2 class="text-center section-header-white">Our Offices</h2>

					<p class="lead text-center white-text">Sedgwick Chudleigh McKenna Solicitors Ltd</p>

					<p class="lead text-center white-text">1st Floor</p>

					<p class="lead text-center white-text">14 Wyndham Street</p>

					<p class="lead text-center white-text">Bridgend</p>

					<p class="lead text-center white-text">MID GLAMORGAN</p>

					<p class="lead text-center white-text">CF31 1LH</p>

					<p class="text-center"><a id="find-us-office-number" href="#" role="link">Office Contact: 01656 767766</a></p>

					<p class="text-center"><a id="find-us-mobile-number" href="#" role="link">24 Hour Contact: 07917 754134</a></p>
				</div>

				<div class="col-sm-6 our-offices">
					<h2 class="text-center section-header-white">Opening Hours</h2>

					<p class="lead text-center white-text"><span class="weekday">Sunday:</span> Closed</p>
					<p class="lead text-center white-text"><span class="weekday">Monday:</span> 09:00 - 17:00</p>
					<p class="lead text-center white-text"><span class="weekday">Tuesday:</span> 09:00 - 17:00</p>
					<p class="lead text-center white-text"><span class="weekday">Wednesday:</span> 09:00 - 17:00</p>
					<p class="lead text-center white-text"><span class="weekday">Thursday:</span> 09:00 - 17:00</p>
					<p class="lead text-center white-text"><span class="weekday">Friday:</span> 09:00 - 17:00</p>
					<p class="lead text-center white-text"><span class="weekday">Saturday:</span> Closed</p>
				</div>
			</div>
		);
	}
}