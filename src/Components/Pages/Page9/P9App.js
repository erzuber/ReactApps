import React, { useState } from "react";
import CircleCard from "./components/CircleCard/CircleCard";

function P9App() {
  let start = 1;
  let end = 99;
  // let totalNo = 10;
  const unique = true;
  let lastSelected = [];
  const [uniqueNos, setUniqueNos] = useState([]);
  const [count, setCount] = useState(1);
  const [selected, setSelected] = useState([]);

  function renNo(min, max, qty, rand, unique) {
    while (rand.length < qty) {
      var x = Math.floor(Math.random() * (min - max + 1) + max);
      if (rand.indexOf(x) === -1 || !unique) {
        rand.push(x);
        lastSelected = [x];
      }
    }
    return rand;
  }

  const clickHandler = () => {
    setCount((prev) => {
      return prev + 1;
    });

    let rand = renNo(start, end, count, uniqueNos, unique);
    setUniqueNos(() => {
      rand.sort((a, b) => a - b);
      return [...rand];
    });

    setSelected(() => {
      return [lastSelected];
    });

    // console.log("counter: ",count);
    // console.log(lastSelected);
  };

  //   const addExpenseHandler = (expense) => {
  //   setExpenses((prevExpenses) => {
  //     return [expense, ...prevExpenses];
  //   });
  // };

  return (
    <div className="container">
      {uniqueNos.map((key, i) => {
        return (
          <CircleCard
          value={key}
          key={i}
          // eslint-disable-next-line eqeqeq
            lastSelected={key == selected ? 1 : 0}
          />
        );
      })}

      {/* <div>Last selected {selected}</div> */}

      <div></div>
      <button onClick={clickHandler}>Click Me</button>
      <div></div>
      {/* <CircleCard value="2" lastSelected="true" /> */}
    </div>
  );
}

export default P9App;
