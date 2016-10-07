import '../css/stylesheets/styles.scss';
import React, { Component } from 'react';

import Nav from './layout/Nav';
import Modal from './Modal';
import Footer from './layout/Footer';


export default class Layout extends Component {
	render() {
		return (
			<div>
				<Nav />

					 {this.props.children}


			{/* MODAL INSERTED AT THE TOP LAYER
			    FOR USE WITHIN ALL ROUTES ON SITE */}
				<Modal />


				<Footer />
			</div>
		);
	}
}