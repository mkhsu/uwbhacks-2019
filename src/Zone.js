import React, { Component } from 'react';
import { Polygon, Tooltip } from 'react-leaflet';

export default class Zone extends Component {
  render() {
    return (
            <Polygon color={`#${this.props.color}`} 
              positions={this.props.positions}
              weight={1.5}
              stroke-linecap ="butt"
              fillOpacity = {0.6}>
        <Tooltip>{this.props.text}</Tooltip>
      </Polygon>
    )
  }
}