import React from "react";

// `allMeasures` includes all the measures packaged with this library
// import configureMeasurements, { allMeasures } from 'convert-units';

// const convert = configureMeasurements(allMeasures);

import configureMeasurements, { volume, mass, length } from "convert-units";

const convert = configureMeasurements({
  volume,
  mass,
  length,
});

// List all available measures:
// console.log(convert().measures());
// [ 'length', 'mass', 'volume', ... ]


const weight = convert(1).from("lb").to("kg");

function P10App(props) {
  return <div>1 lb Weight is = {weight} of kg</div>;
}

export default P10App;
