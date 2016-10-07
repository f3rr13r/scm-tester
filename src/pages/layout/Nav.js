import React, { Component } from "react";
import { Link } from 'react-router';

import Navbar from './nav/Navbar';
import NavContactBar from './nav/NavContactBar';

export default class Nav extends Component {
	render() {
		return (
			<div>
				<Navbar />
				<NavContactBar />
			</div>
		);
	}
}