import React, { component } from 'react';
import './App.scss';

class NotFound extends React.Component {
	render () {
		return (
			<div className="notFound">
				<h1 className="dataFound">
				  No Data Available
				</h1>
			</div>
		);
	}
}
export default NotFound;