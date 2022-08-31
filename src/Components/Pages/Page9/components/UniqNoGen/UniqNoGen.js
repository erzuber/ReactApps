import React from "react";

// Option 1

// var randoms = new Set();
// while (randoms.size < 10) {
//   randoms.add(1 + Math.floor(Math.random() * 100));
// }
// console.log(randoms);

// Option 2

function renNo(min, max, qty, unique) {
  var rand = [];
  while (rand.length < qty) {
    var ran = Math.floor(Math.random() * (min - max + 1) + max);
    if (rand.indexOf(ran) === -1 || !unique) {
      rand.push(ran);
    }
  }
  return rand;
}

// console.log(renNo(1,20,15,1));
let randoms = renNo(1, 20, 15, 1);

function UniqNoGen(props) {
  return <div>{randoms}</div>;
}

export default UniqNoGen;
