import React, { Component } from "react";
import { Link } from 'react-router';

export default class Jumbotron extends Component {
	render() {
		return (
			<div>
				<div class="container-fluid">
				 	<div class="row">
				  		<div class="col-xs-12 bgimage">

				   			{/*<!-- <div class="bgimage-inside"> -->*/}

				   				<div id="bg-image-text" class="jumbotron">
							      <div class="container">
							        <h1 id="title-tag" class="text-center">SCM Solicitors</h1>
							        <p id="description-tag" class="lead text-center">When it comes to the law, you couldn’t be in safer hands.</p>

							        <hr id="jumbotron-blue-horizontal-rule" />

							        {/*<p class="text-center"><a id="learn-more-button" class="btn btn-primary btn-lg" href="./services.html" role="button">What We Do</a></p>*/}
							        <p class="text-center">
							        	<Link id="learn-more-button" class="btn btn-primary btn-lg" to="services">What We Do</Link>
							        </p>
							      </div>
							    </div>

				   			{/*<!-- </div> -->*/}

				  		</div>
				 	</div>
				</div>
			</div>
		);
	}
}