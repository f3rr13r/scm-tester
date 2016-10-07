import React, { Component } from "react";
import { Link, IndexLink } from 'react-router';

export default class Navbar extends Component {
	render() {
		return (
			<div>
				<nav id="scm-navbar" class="navbar navbar-default navbar-fixed-top" role="navigation">
			      <div class="container">

			        {/*<!-- Brand and toggle get grouped for better mobile display -->*/}

			        <div class="navbar-header">
			          <button type="button" id="navbar-toggle-button" class="navbar-toggle" data-toggle="collapse" data-target="#navbar-brand-centered">
			            <span class="sr-only">Toggle navigation</span>
			            <span class="icon-bar"></span>
			            <span class="icon-bar"></span>
			            <span class="icon-bar"></span>
			          </button>
			          <div class="navbar-brand navbar-brand-centered"><IndexLink to="/"><img class="img-responsive" id="logo-image" src={require("../../../img/scm-logo-small.png")} /></IndexLink></div>
			        </div>

			        {/*<!-- Collect the nav links, forms, and other content for toggling -->*/}

			        <div class="collapse navbar-collapse" id="navbar-brand-centered">
			          <ul class="nav navbar-nav">
			            <li><IndexLink class="border-left li-margin-bottom" to="/" data-toggle="collapse" data-target=".navbar-collapse">HOME</IndexLink></li>
			            <li><Link class="border-left" to="services" data-toggle="collapse" data-target=".navbar-collapse">SERVICES</Link></li>
			          </ul>
			          <ul class="nav navbar-nav navbar-right">
			            {/*<li><a class="border-right li-margin-bottom" href="./team.html">OUR TEAM</a></li>
			            <li><a class="border-right" href="./location.html">FIND US</a></li>   */}
			            <li><Link class="border-right li-margin-bottom" to="team" data-toggle="collapse" data-target=".navbar-collapse">OUR TEAM</Link></li>
			            <li><Link class="border-right" to="findUs" data-toggle="collapse" data-target=".navbar-collapse">FIND US</Link></li>    
			          </ul>
			        </div>	{/*<!-- /.navbar-collapse -->*/}
			      </div>	{/*<!-- /.container-fluid -->*/}
			    </nav>
			</div>
		);
	}
}