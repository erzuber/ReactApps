import React from "react";
import Classes from "./HomePage.module.css";

function HomePage() {
  return (
    <div>
      <table className={Classes.table}>
        <tr>
          <th className={Classes.wd60}>Sr.No.</th>
          <th>App Name</th>
          <th>About</th>
          <th>Link</th>
        </tr>
        <tr>
          <td>1</td>
          <td>App1</td>
          <td>Expense App (incomplete)</td>
          <td>
            <a href="/app1">Link</a>
          </td>
        </tr>
        <tr>
          <td>2</td>
          <td>App2</td>
          <td>Input Validation using hooks</td>
          <td>
            <a href="/app2">Link</a>
          </td>
        </tr>
        <tr>
          <td>3</td>
          <td>App3</td>
          <td>Module-10 useReducer hook and Contxet</td>
          <td>
            <a href="/app3">Link</a>
          </td>
        </tr>
        <tr>
          <td>4</td>
          <td>App4</td>
          <td>Module-10 Contxet with Hooks</td>
          <td>
            <a href="/app4">Link</a>
          </td>
        </tr>
        <tr>
          <td>5</td>
          <td>App5</td>
          <td>Magic Meals</td>
          <td>
            <a href="/app5">Link</a>
          </td>
        </tr>
        <tr>
          <td>6</td>
          <td>App6</td>
          <td>Input data validation using custom hook</td>
          <td>
            <a href="/app6">Link</a>
          </td>
        </tr>
        <tr>
          <td>7</td>
          <td>App7</td>
          <td>Redux Counter</td>
          <td>
            <a href="/app7">Link</a>
          </td>
        </tr>
        <tr>
          <td>8</td>
          <td>App8</td>
          <td>XYZ</td>
          <td>
            <a href="/app8">Link</a>
          </td>
        </tr>
      </table>
    </div>
  );
}

export default HomePage;
