import React from "react";
import { useNavigate } from "react-router-dom";
const ItemForm = () => {
  const user = localStorage.getItem("user");
  const userData = JSON.parse(user);
  const navigate = useNavigate();
  const [formStatus, setFormStatus] = React.useState(userData.type);
  const onSubmit = async (e) => {
    e.preventDefault();
    
    const { location, quantity, rate, mobile } = e.target.elements;
    let conFom = {
      location: location.value,
      quantity: quantity.value,
      rate: rate.value,
      mobileNum: mobile.value,
    };
    console.log(conFom);

    if (conFom.mobileNum.length > 14 || conFom.mobileNum.length < 10)
      alert("Enter a valid mobile no.");
    else {
      try {
        const itemData = JSON.stringify({
          username: userData.username,
          userId: userData._id,
          email: userData.email,
          phonenum: conFom.mobileNum,
          itemType: userData.type,
          rate: conFom.rate,
          quantity: conFom.quantity,
          location: conFom.location,
        });
        setFormStatus("Submitting...");
        const response = await fetch("http://localhost:5000/api/item/addItem", {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: itemData,
        });

        const responseData = await response.json();

        if (response.status === 200) {
          console.log(responseData.message);
          navigate("/");
        } else {
          console.log(responseData.error);
          setFormStatus(userData.type);
          alert("Can't able to submit form.");
        }
      } catch (err) {
        console.log(err);
        setFormStatus(userData.type);
        return;
      }
    }
  };
  return (
    <div className="container mt-5">
      <h2 className="mb-3">PLEASE FILL OUT THE FOLLOWING DETAILS</h2>
      <form onSubmit={onSubmit}>
        <div className="mb-3">
          <label className="form-label" htmlFor="location">
            LOCATION
          </label>
          <textarea className="form-control" id="location" required />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="quantity">
            QUANTITY(IN KGs)
          </label>
          <input
            className="form-control"
            type="number"
            id="quantity"
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="rate">
            RATE(per kg) (INR)
          </label>
          <input className="form-control" type="number" id="rate" required />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="mobile">
            MOBILE NO.
          </label>
          <input className="form-control" type="text" id="mobile" required />
        </div>
        <input className="btn btn-danger" type="submit" value={formStatus} />
      </form>
    </div>
  );
};
export default ItemForm;
