import React, { Component } from "react";
import GoogleMapReact from "google-map-react";
import img from "./parking-sign.png";

function MarkerRestaurant() {
  <div
    style={{
      transform: "translate(-50%, -50%)",
    }}
  >
    <img
      src="https://cdn-icons.flaticon.com/png/512/2536/premium/2536608.png?token=exp=1634992780~hmac=571e1528697a512bf5573e88fed70962"
      width="70px"
      alt="restaurant"
    ></img>
  </div>;
}

function MarkerParking() {
  <div
    style={{
      transform: "translate(-50%, -50%)",
    }}
  >
    <img src={img} width="70px" alt="restaurant"></img>
  </div>;
}
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
      // Important! Always set the container height explicitly
      <div className="googlemap">
        <GoogleMapReact
          bootstrapURLKeys={{ key }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <MarkerRestaurant lat={47.212369} lng={-1.55} />
          <MarkerRestaurant lat={47.213084} lng={-1.551142} />
          <MarkerParking lat={47.21078047930004} lng={-1.5514985903721357} />
        </GoogleMapReact>
      </div>
    );
  }
}

export default GoogleMap;
