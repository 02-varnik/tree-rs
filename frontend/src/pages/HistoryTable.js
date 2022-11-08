import React from "react";
import { Link } from "react-router-dom";

function HistoryTable() {
  const demoObj =[{
    sno: "1.",
      location: "NASSCOM FOUNDATION, 3RD FLOOR, A1/125, SAFDARJUNG ENCLAVE,SAFDARJUNG ENCLAVE, South Delhi",
      quantity: "10",
      rate: "20",
      mobileNo:"+91959790656",
  },
] 
  return (
    <><div class="col-md-0 col-md-offset-3 mb80 text-center probootstrap-animate">
      <table className="table table-bordered">
        <thead  className="thead-dark">
        <tr>
          <th>SNO</th>
          <th>LOCATION</th>
          <th>QUANTITY(in kg)</th>
          <th>RATE(in INR)</th>
          <th>MOBILE NO.</th>
        </tr>
        </thead>
        {demoObj.map((val, key) => {
          return (
            <tr key={key}>
              <th scope="col">{val.sno}</th>
              <td>{val.location}</td>
              <td>{val.quantity}</td>
              <td>{val.rate}</td>
              <td>{val.mobileNo}</td>
            </tr>
          )
        })}
      </table>
      </div>
    </>
  );
}

export default HistoryTable;