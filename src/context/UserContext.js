import { createContext, useContext, useState } from "react";
import * as api from "../api/index";

const UserContext = createContext();

const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
};

export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState();

  const signup = async (formData, navigate) => {
    try {
      const data = await api.signUp(formData);
      localStorage.setItem("user", JSON.stringify(data));
      setUser(data.newUser);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const signin = async (formData, router) => {
    try {
      // const { data: user } = await api.signIn(formData);
      // localStorage.setItem("user", JSON.stringify({ ...user }));
      // setUser(user);
      router.push("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        signup,
        signin,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => useContext(UserContext);
