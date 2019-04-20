import React, { Component } from 'react';
import { CircleMarker } from 'react-leaflet';

export default class College extends Component {
	render() {
		return <CircleMarker position={this.props.position} />;
	}
}