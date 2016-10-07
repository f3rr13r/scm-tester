import React, { Component } from "react";


import Jumbotron from './home/Jumbotron';
import MeetTeam from './home/MeetTeam';
import FindUs from './home/FindUs';

export default class Home extends Component {
	render() {
		return (
			<div>
				<Jumbotron />
				<MeetTeam />
				<FindUs />
			</div>
		);
	}
}