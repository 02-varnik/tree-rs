import React from "react";
const ContactForm = () => {
  const [formStatus, setFormStatus] = React.useState("Send");
  const onSubmit = (e) => {
    e.preventDefault();
    setFormStatus("Submitting...");
    const { name, email, additionalDetails, phone, message } =
      e.target.elements;
    let conFom = {
      name: name.value,
      email: email.value,
      additionalDetails: additionalDetails.value,
      phone: phone.value,
      message: message.value,
    };
    console.log(conFom);
  };
  return (
    <div className="container mt-5">
      <h2 className="mb-3">React Contact Form Component Example</h2>
      <form onSubmit={onSubmit}>
        <div className="mb-3">
          <label className="form-label" htmlFor="name">
            Name
          </label>
          <input className="form-control" type="text" id="name" required />
        </div>

        <div className="mb-3">
          <label className="form-label" htmlFor="email">
            EMAIL
          </label>
          <input className="form-control" type="email" id="email" required />
        </div>

        <div className="mb-3">
          <label className="form-label" htmlFor="additionalDetails">
            ADDITIONAL DETAILS
          </label>
          <input className="form-control" type="text" id="additionalDetails" />
        </div>

        <div className="mb-3">
          <label className="form-label" htmlFor="phone">
            PHONE NUMBER
          </label>
          <input
            className="form-control"
            type="phone number"
            id="phone"
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label" htmlFor="message">
            MESSAGE
          </label>
          <textarea className="form-control" id="message" required />
        </div>

        <button className="btn btn-danger" type="submit">
          {formStatus}
        </button>
      </form>
    </div>
  );
};
export default ContactForm;
