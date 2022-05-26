import { useState } from "react";
import { useUserContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";
const initialState = { firstName: "", lastName: "", email: "", password: "" };

const Auth = () => {
  const [form, setForm] = useState(initialState);
  const [isSignup, setIsSignup] = useState(true);
  const { signup, signin } = useUserContext();
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    if (isSignup) {
      signup(form, navigate);
    } else {
      signin(form, navigate);
    }
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  return (
    <div className="container flex justify-center">
      <div>
        <form
          className="w-[30rem] h-[30rem] bg-red-200"
          onSubmit={handleSubmit}
        >
          <div className="flex justify-between">
            <div>
              <label htmlFor="firstName">First Name</label>
              <input type="text" name="firstName" onChange={handleChange} />
            </div>
            <div>
              <label htmlFor="lastName">Last Name</label>
              <input type="text" name="lastName" onChange={handleChange} />
            </div>
          </div>
          <div className="flex flex-col mt-4">
            <label htmlFor="email">Email</label>
            <input type="text" name="email" onChange={handleChange} />
          </div>
          <div className="flex flex-col mt-4">
            <label htmlFor="password">Password</label>
            <input type="text" name="password" onChange={handleChange} />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Auth;
