import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { signupFields } from "../constants/formFields";
import AuthContext from "../context/auth-context";
import FormAction from "./FormAction";
import Input from "./Input";

const fields = signupFields;
let fieldsState = { category: "BUY" };

fields.forEach((field) => (fieldsState[field.id] = ""));

export default function Signup() {
  const navigate = useNavigate();
  const auth = useContext(AuthContext);
  const [signupState, setSignupState] = useState(fieldsState);

  const handleChange = (e) =>
    setSignupState({ ...signupState, [e.target.id]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    createAccount();
  };

  //handle Signup API Integration here
  const createAccount = async () => {
    console.log(signupState, "here");

    if (signupState.confirmPassword !== signupState.password)
      alert("Confirm-password doesn't matches");

    try {
      const userdata = JSON.stringify({
        name: signupState.username,
        email: signupState.emailAddress,
        password: signupState.password,
        type: signupState.category,
      });

      const response = await fetch("http://localhost:5000/api/user/signup", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: userdata,
      });

      const responseData = await response.json();

      // Email Password Uploaded as New account => Login
      if (response.status === 201) {
        auth.login(responseData.user);
        console.log(responseData);
        navigate("/history");
      } else {
        console.log(responseData.error);
        alert(responseData.error);
      }
    } catch (err) {
      console.log(err);
      return;
    }
  };

  return (
    <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
      <div className="">
        {fields.map((field) => (
          <Input
            key={field.id}
            handleChange={handleChange}
            value={signupState[field.id]}
            labelText={field.labelText}
            labelFor={field.labelFor}
            id={field.id}
            name={field.name}
            type={field.type}
            isRequired={field.isRequired}
            placeholder={field.placeholder}
          />
        ))}
        <div>
          DO YOU WANT TO BUY OR SELL PAPER?
          <div className="relative inline-flex self-center">
            <svg
              className="text-white bg-purple-700 absolute top-0 right-0 m-2 pointer-events-none p-2 rounded"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              width="25px"
              height="25px"
              viewBox="0 0 38 22"
              version="1.1"
            >
              <g
                id="ZahnhelferDE—Design"
                stroke="none"
                stroke-width="1"
                fill="none"
                fill-rule="evenodd"
              >
                <g
                  id="ZahnhelferDE–Icon&amp;Asset-Download"
                  transform="translate(-539.000000, -199.000000)"
                  fill="#ffffff"
                  fill-rule="nonzero"
                >
                  <g
                    id="Icon-/-ArrowRight-Copy-2"
                    transform="translate(538.000000, 183.521208)"
                  >
                    <polygon
                      id="Path-Copy"
                      transform="translate(20.000000, 18.384776) rotate(135.000000) translate(-20.000000, -18.384776) "
                      points="33 5.38477631 33 31.3847763 29 31.3847763 28.999 9.38379168 7 9.38477631 7 5.38477631"
                    />
                  </g>
                </g>
              </g>
            </svg>
            <select
              onChange={handleChange}
              id="category"
              className="text-lg font-bold rounded border-2 border-purple-700 text-gray-600 h-10 w-60 pl-5 pr-10 bg-white hover:border-gray-400 focus:outline-none appearance-none"
            >
              <option>BUY</option>
              <option>SELL</option>
            </select>
          </div>
        </div>
        <FormAction handleSubmit={handleSubmit} text="Signup" />
      </div>
    </form>
  );
}
