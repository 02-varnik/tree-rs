import React from 'react'
import { Link } from 'react-router-dom'
const ItemForm = () => {
  const [formStatus, setFormStatus] = React.useState('Send')
  const onSubmit = (e) => {
    e.preventDefault()
    setFormStatus('Submitting...')
    const { location, quantity, rate, mobile } = e.target.elements
    let conFom = {
      location: location.value,
      quantity: quantity.value,
      rate: rate.value,
      mobileNum: mobile.value,
    }
    console.log(conFom)
  }
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
          <input className="form-control" type="number" id="quantity" required />
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
        <button className="btn btn-danger" type="submit">
          
          <Link to="/thankyou" >{formStatus}</Link>
        </button>
      </form>
    </div>
  )
}
export default ItemForm;