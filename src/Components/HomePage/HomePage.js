import React from "react";
import Classes from "./HomePage.module.css";

function HomePage() {
  return (
    <div>
      <table className={Classes.table}>
        <tbody>
          <tr>
            <th className={Classes.wd60}>Sr.No.</th>
            <th>App Name</th>
            <th>About</th>
            <th>Link</th>
          </tr>
          <tr>
            <td>1</td>
            <td>App1</td>
            <td>
              Expense App <strong>(incomplete)</strong>
            </td>
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
            <td>
              Magic Meals <strong>(incomplete)</strong>
            </td>
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
            <td>Redux with toolkit</td>
            <td>
              <a href="/app8">Link</a>
            </td>
          </tr>
          <tr>
            <td>9</td>
            <td>App9</td>
            <td>Uniqe Random No. Genrator</td>
            <td>
              <a href="/app9">Link</a>
            </td>
          </tr>
          <tr>
            <td>10</td>
            <td>App10</td>
            <td>Unit Converter</td>
            <td>
              <a href="/app10">Link</a>
            </td>
          </tr>
          <tr>
            <td>11</td>
            <td>App11</td>
            <td>Redux with toolkit (Working with Multiple Slices)</td>
            <td>
              <a href="/app11">Link</a>
            </td>
          </tr>
          <tr>
            <td>12</td>
            <td>App12</td>
            <td>Bi direction Unit Convertion (working)</td>
            <td>
              <a href="/app12">Link</a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default HomePage;
