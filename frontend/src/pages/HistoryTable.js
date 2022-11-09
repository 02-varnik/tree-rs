import React, { useEffect, useState } from "react";
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

  const [itemList, setItemList] = useState([]);
  let sr = 0;

  useEffect(() => {
    const fetchItems = async () => {
      const user = localStorage.getItem("user");
      const userId = JSON.parse(user)._id;

      try {
        const response = await fetch(
          `${process.env.REACT_APP_SERVER_ROOT_URI}/api/item/${userId}`
        );

        const responseData = await response.json();

        if (response.status === 200) {
          setItemList(responseData.items);
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
        alert("Can't able to show history");
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
      <div class="mx-5 my-5 col-md-0 rounded-t-2xl overflow-scroll no-scrollbar border-t-2 border-l-1 border-r-1 col-md-offset-3 mb80 text-center probootstrap-animate">
        <table className="table table-bordered">
          <thead className="thead-dark">
            <tr>
              <th>SNO</th>
              <th className="bg-slate-100 important">LOCATION</th>
              <th>QUANTITY(in kg)</th>
              <th className="bg-slate-100">RATE(in INR)</th>
              <th>MOBILE NO.</th>
            </tr>
          </thead>
          {itemList.map((item) => {
            sr++;
            return (
              <>
                <tr>
                  <th scope="col">{sr}</th>
                  <td className="bg-slate-100">{item.location}</td>
                  <td>{item.quantity}</td>
                  <td className="bg-slate-100">{item.rate}</td>
                  <td>{item.phonenum}</td>
                </tr>
              </>
            );
          })}
        </table>
        <Link to="/form">
          <Button>PLACE NEW ORDER</Button>
        </Link>
      </div>
    </>
  );
}

export default HistoryTable;
