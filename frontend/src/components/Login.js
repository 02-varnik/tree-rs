import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginFields } from "../constants/formFields";
import AuthContext from "../context/auth-context";
import FormAction from "./FormAction";
import FormExtra from "./FormExtra";
import Input from "./Input";

const fields = loginFields;
let fieldsState = {};
fields.forEach((field) => (fieldsState[field.id] = ""));

export default function Login() {
  const navigate = useNavigate();
  const auth = useContext(AuthContext);
  const [loginState, setLoginState] = useState(fieldsState);

  const handleChange = (e) => {
    setLoginState({ ...loginState, [e.target.id]: e.target.value });
  };

  const handleSubmit =async (e) => {
    e.preventDefault();
    console.log(loginState);

    try {
      const userdata = JSON.stringify({
        email: loginState.emailAddress,
        password: loginState.password,
      });

      const response = await fetch("http://localhost:5000/api/user/login", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: userdata,
      });

      const responseData = await response.json();

      // Email Password Matches => Login
      if (response.status === 201) {
        auth.login(responseData.user);

        console.log(responseData);
        navigate("/");

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
      <div className="-space-y-px">
        {fields.map((field) => (
          <Input
            key={field.id}
            handleChange={handleChange}
            value={loginState[field.id]}
            labelText={field.labelText}
            labelFor={field.labelFor}
            id={field.id}
            name={field.name}
            type={field.type}
            isRequired={field.isRequired}
            placeholder={field.placeholder}
          />
        ))}
      </div>

      <FormExtra />
      <FormAction handleSubmit={handleSubmit} text="Login" />
    </form>
  );
}
