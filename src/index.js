import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import { Page } from './Page';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
	<BrowserRouter>
		<Switch>
			<Route exact path="/" component={App} />
			<Route exact path="/page" component={Page} />
		</Switch>
	</BrowserRouter>, 
document.getElementById('root'));
registerServiceWorker();
