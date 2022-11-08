import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function HistoryTable() {
  const demoObj = [
    {
      sno: "1.",
      location:
        "NASSCOM FOUNDATION, 3RD FLOOR, A1/125, SAFDARJUNG ENCLAVE,SAFDARJUNG ENCLAVE, South Delhi",
      quantity: "10",
      rate: "20",
      mobileNo: "+91959790656",
    },
  ];

  let itemList=[];
  let sr = 0;

  useEffect(() => {
    const fetchItems = async () => {
      const user = localStorage.getItem("user");
      const userId = JSON.parse(user)._id;

      try {
        const response = await fetch(
          `http://localhost:5000/api/item/${userId}`
        );

        const responseData = await response.json();

        if (response.status === 200) {
          itemList = responseData.items;
          console.log("got item-history list");
          console.log(itemList);
        } else if (response.status === 400) {
          console.log(responseData.error);
          alert(responseData.error);
        } else {
          console.log(responseData.error);
          alert("Can't able to show history");
        }
      } catch (err) {
        console.log(err);
        return;
      }
    };

    fetchItems();
  }, []);

  const Button = styled.button`
    background-color: black;
    color: white;
    font-size: 20px;
    padding: 10px 60px;
    border-radius: 5px;
    margin: 10px 0px;
    cursor: pointer;
  `;
  // Usage
  return (
    <>
      <div class="col-md-0 col-md-offset-3 mb80 text-center probootstrap-animate">
        <table className="table table-bordered">
          <thead className="thead-dark">
            <tr>
              <th>SNO</th>
              <th>LOCATION</th>
              <th>QUANTITY(in kg)</th>
              <th>RATE(in INR)</th>
              <th>MOBILE NO.</th>
            </tr>
          </thead>
          {/* {demoObj.map((val, key) => {
            return (
              <tr key={key}>
                <th scope="col">{val.sno}</th>
                <td>{val.location}</td>
                <td>{val.quantity}</td>
                <td>{val.rate}</td>
                <td>{val.mobileNo}</td>
              </tr>
            );
          })} */}
          {/* {itemList.map((val, key) => {
            return (
              <tr key={key}>
                <th scope="col">{val.sno}</th>
                <td>{val.location}</td>
                <td>{val.quantity}</td>
                <td>{val.rate}</td>
                <td>{val.mobileNo}</td>
              </tr>
            );
          })} */}
          {itemList.map((item )=>{
            // sr++;
            // console.log(item);
            return(
              <tr>
                <th scope="col">{sr}</th>
                <td>{item.location}</td>
                <td>{item.quantity}</td>
                <td>{item.rate}</td>
                <td>{item.phonenum}</td>
              </tr>
              
            );
          })}
        </table>
      </div>
      <Link to="/form">
        <Button>PLACE NEW ORDER</Button>
      </Link>
    </>
  );
}

export default HistoryTable;
