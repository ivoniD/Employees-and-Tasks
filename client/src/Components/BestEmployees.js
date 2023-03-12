import { Link } from "react-router-dom"

export const BestEmployees = (props) => {


  props.lastMonthBest.forEach(([employee, count]) => {
    console.log(`${employee}: ${count}`);
  });
  console.log(props.lastMonthBest)
  return (
    <>
      <div className="container">
        <div className="table-wrapper">
          <h2>Last month tasks:</h2>
          <table>

            {props.lastMonthBest.slice(0, 5).map(x => (<thead> <th> <td className="best"><b><em>{x[0]}</em></b> complete <b>{x[1]}</b>. </td></th> </thead>))}



          </table>
        </div>
      </div>
    </>
  )
} 