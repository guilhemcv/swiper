import React, { Component } from "react";
import GoogleMapReact from "google-map-react";
import "./GoogleMap.css";

const AnyReactComponent = ({ text }) => <div>{text}</div>;
const key = process.env.REACT_APP_API_KEY;
class GoogleMap extends Component {
  static defaultProps = {
    center: {
      lat: 47.212369,
      lng: -1.55,
    },
    zoom: 14,
  };

  render() {
    return (
      <div className="googlemap">
        <GoogleMapReact
          bootstrapURLKeys={{ key }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent lat={59.955413} lng={30.337844} text="My Marker" />
        </GoogleMapReact>
      </div>
    );
  }
}

export default GoogleMap;
