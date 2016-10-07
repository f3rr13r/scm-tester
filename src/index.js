import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Team from "./pages/Team";
import FindUs from "./pages/FindUs";

const root = document.getElementById('root');

render(
	<Router onUpdate={() => window.scrollTo(0, 0)} history={browserHistory}>
		<Route path="/" component={Layout}>
			<IndexRoute component={Home}></IndexRoute>
			<Route path="services" component={Services}></Route>
			<Route path="team" component={Team}></Route>
			<Route path="findUs" component={FindUs}></Route>
		</Route>
	</Router> 
, root);