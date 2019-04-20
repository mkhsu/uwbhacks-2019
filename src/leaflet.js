import React, { Component } from 'react';
import { Map, TileLayer } from 'react-leaflet';
import convert from 'color-convert';
import Zone from './Zone';
import family from './familyincome.json';

console.log(family)
console.log(family.features[0])
export default class leaflet extends Component {
    
  constructor(props) {
    super(props);
    //[47.7589,-122.1906] uwb
    this.state = {
      lat: 47.7589,
      lng: -122.1906,
      zoom: 11,
      draggable: true
    };
  }

  updatePosition = () => {
    const marker = this.refmarker.current
    if (marker != null) {
      this.setState({
        marker: marker.leafletElement.getLatLng(),
      })
    }
  }

  toggleDraggable = () => {
    this.setState({ draggable: !this.state.draggable })
  }

  convertColor(ratio,saturation,value) {
    var range = 120;
    return convert.hsv.hex(Math.round(ratio*range),saturation,value);
  }

  filterAttributes(attrs) {
    let foundFirst = false;
    return Object.entries(attrs).filter(([k]) => {
      const e = k.startsWith('E');
      if (!foundFirst && e) {
        foundFirst = true;
        return false;
      }

      return e;
    });
  }

  getMedian(feature) {
    const entries = this.filterAttributes(feature.attributes);
    //console.log(entries);
    entries.sort(([, a], [, b]) => a - b);

    return entries[entries.length-1];
  }

  mapFeatures(features) {
    return features.map(f => {
      const median = this.getMedian(f);
      const fields = this.filterAttributes(family.fieldAliases);
      const name = family.fieldAliases[median[0]];
      const color = fields.findIndex(f => f[0] == median[0]) / fields.length;
      return <Zone
        key={f.attributes.OBJECTID}
        text={name}
        positions={f.geometry.rings[0].map(r => r.reverse())}
        color={this.convertColor(color,100,50)}
      />;
    });
  }
  
  render() {
    const position = [this.state.lat, this.state.lng];
    return (
      <Map center={position} zoom={this.state.zoom}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
        />
        {this.mapFeatures(family.features)}
      </Map>
    );
  }
}