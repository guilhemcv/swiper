const CustomeStylesDark = [
  {
    featureType: "all",
    elementType: "all",
    stylers: [
      {
        hue: "#ff0000",
      },
      {
        saturation: -100,
      },
      {
        lightness: -30,
      },
    ],
  },
  {
    featureType: "all",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#ffffff",
      },
    ],
  },
  {
    featureType: "all",
    elementType: "labels.text.stroke",
    stylers: [
      {
        color: "#353535",
      },
    ],
  },
  {
    featureType: "landscape",
    elementType: "geometry",
    stylers: [
      {
        color: "#656565",
      },
    ],
  },
  {
    featureType: "poi",
    elementType: "all",
    stylers: [
      {
        color: "#505050",
      },
      {
        visibility: "off",
      },
    ],
  },
  {
    featureType: "poi",
    elementType: "geometry.stroke",
    stylers: [
      {
        color: "#808080",
      },
    ],
  },
  {
    featureType: "road",
    elementType: "geometry",
    stylers: [
      {
        color: "#454545",
      },
    ],
  },
  {
    featureType: "transit",
    elementType: "labels",
    stylers: [
      {
        hue: "#000000",
      },
      {
        saturation: 100,
      },
      {
        lightness: -40,
      },
      {
        invert_lightness: true,
      },
      {
        gamma: 1.5,
      },
    ],
  },
];

export default CustomeStylesDark;
