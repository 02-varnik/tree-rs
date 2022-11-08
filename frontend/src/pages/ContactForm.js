import React from "react";
const ContactForm = () => {
  const [formStatus, setFormStatus] = React.useState("Send");
  const onSubmit = (e) => {
    e.preventDefault();
    setFormStatus("Submitting...");
    const { name, email, message } = e.target.elements;
    let conFom = {
      name: name.value,
      email: email.value,
      message: message.value,
    };
    console.log(conFom);
  };
  return (
    <>
      <div>
        <div classname="probootstrap-loader" />
        <header role="banner" classname="probootstrap-header">
          <div classname="container">
            <a href="index.html" classname="probootstrap-logo">
              Explorer<span>.</span>
            </a>
            <a href="#" classname="probootstrap-burger-menu visible-xs">
              <i>Menu</i>
            </a>
            <div classname="mobile-menu-overlay" />
            <nav role="navigation" classname="probootstrap-nav hidden-xs">
              <ul classname="probootstrap-main-nav">
                <li>
                  <a href="services.html">BUY / SELL</a>
                </li>
                <li>
                  <a href="contact.html">CONTACT US</a>
                </li>
                <li>
                  <a href="contact.html">ABOUT US</a>
                </li>
              </ul>
              <div classname="extra-text visible-xs">
                <a href="#" classname="probootstrap-burger-menu">
                  <i>Menu</i>
                </a>
                <h5>Address</h5>
                <p>TREE RS 2nd Floor, DLF Park, ABC City</p>
                <h5>Connect</h5>
                <ul>
                  <li>xyz@treers.ac.in</li>
                  <li>+91 94075543808</li>
                </ul>
              </div>
            </nav>
          </div>
        </header>
        <section classname="probootstrap-section">
          <div classname="container">
            <div classname="row">
              <div classname="col-md-6 col-md-offset-3 mb80 text-center probootstrap-animate">
                <h2>Contact Me</h2>
              </div>
            </div>
            <div classname="row">
              <div classname="col-md-8 probootstrap-animate">
                <form
                  action="#"
                  method="post"
                  classname="probootstrap-form mb60"
                >
                  <div classname="row">
                    <div classname="col-md-6">
                      <div classname="form-group">
                        <label htmlFor="fname">First Name</label>
                        <input
                          type="text"
                          classname="form-control"
                          id="fname"
                          name="fname"
                        />
                      </div>
                    </div>
                    <div classname="col-md-6">
                      <div classname="form-group">
                        <label htmlFor="lname">Last Name</label>
                        <input
                          type="text"
                          classname="form-control"
                          id="lname"
                          name="lname"
                        />
                      </div>
                    </div>
                  </div>
                  <div classname="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      classname="form-control"
                      id="email"
                      name="email"
                    />
                  </div>
                  <div classname="form-group">
                    <label htmlFor="message">Message</label>
                    <input
                      type="text"
                      classname="form-control"
                      id="message"
                      name="message"
                    />
                  </div>
                  <div classname="form-group">
                    <label htmlFor="details">Additional Details</label>
                    <input
                      type="text"
                      classname="form-control"
                      id="details"
                      name="details"
                    />
                  </div>
                  <div classname="form-group">
                    <label htmlFor="phone">Phone Number</label>
                    <input
                      type="text"
                      classname="form-control"
                      id="phone"
                      name="phone"
                    />
                  </div>
                  <div classname="form-group">
                    <input
                      type="submit"
                      classname="btn btn-primary"
                      id="submit"
                      name="submit"
                      defaultValue="Submit"
                    />
                  </div>
                </form>
              </div>
              <div classname="col-md-3 col-md-push-1 probootstrap-animate">
                <h4>Contact Details</h4>
                <ul classname="with-icon colored">
                  <li>
                    <i classname="icon-location2" />{" "}
                    <span>2nd Floor, DLF Park, ABC City</span>
                  </li>
                  <li>
                    <i classname="icon-mail" />
                    <span>xyz@treers.ac.in</span>
                  </li>
                  <li>
                    <i classname="icon-phone2" />
                    <span>+91 94075543808</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <div classname="container probootstrap-animate">
          <div id="map" />
        </div>
        <div classname="gototop js-top">
          <a href="#" classname="js-gotop">
            <i classname="icon-chevron-thin-up" />
          </a>
        </div>
      </div>
    </>
  );
};
export default ContactForm;
