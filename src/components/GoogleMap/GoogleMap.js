import React, { Component } from "react";
import GoogleMapReact from "google-map-react";
import "./GoogleMap.css";
import img from "./Chefs_Hat_6.png";
import imgpark from "./Parking_8.png";

const AnyReactComponent = ({ text }) => <div>{text}</div>;
const key = process.env.REACT_APP_API_KEY;

function MarkerRestaurant() {
  return (
    <div
      style={{
        transform: "translate(-50%, -50%)",
      }}
    >
      <img src={img} width="70px" alt="restaurant"></img>
    </div>
  );
}

function MarkerParking() {
  return (
    <div
      style={{
        transform: "translate(-50%, -50%)",
      }}
    >
      <img src={imgpark} width="70px" alt="restaurant"></img>
    </div>
  );
}

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
          <MarkerRestaurant lat={47.212369} lng={-1.55} />
          <MarkerRestaurant lat={47.21} lng={-1.5545} />
          <MarkerRestaurant lat={47.2} lng={-1.55231} />
          <MarkerRestaurant lat={47.2165} lng={-1.5552} />
          <MarkerParking lat={47.225} lng={-1.5552} />
          <MarkerParking lat={47.21235} lng={-1.556} />
          <MarkerParking lat={47.2} lng={-1.56} />
          <MarkerParking lat={47.21} lng={-1.567} />
          <AnyReactComponent lat={59.955413} lng={30.337844} text="My Marker" />
        </GoogleMapReact>
      </div>
    );
  }
}

export default GoogleMap;
