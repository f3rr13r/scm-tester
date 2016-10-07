import React, { Component } from "react";

import About from './services/About';
import ServicesList from './services/ServicesList';


export default class Services extends Component {
	render() {
		return (
			<div>
				<About />
				<ServicesList />
			</div>
		);
	}
}