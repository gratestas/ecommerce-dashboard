import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as api from "../api/index";

const AuthContext = createContext();

const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
};

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  //const location = useLocation();

  const [user, setUser] = useState();
  const [token, setToken] = useState(null);

  // const origin = location.state?.from?.pathname || "/";

  const signup = async (formData) => {
    try {
      const data = await api.signUp(formData);
      localStorage.setItem("user", JSON.stringify(data));
      setUser(data.newUser);
      setToken(data.token);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const signin = async (formData) => {
    try {
      // const { data: user } = await api.signIn(formData);
      // localStorage.setItem("user", JSON.stringify({ ...user }));
      // setUser(user);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const signout = () => {
    setUser(null);
    setToken(null);
  };
  return (
    <AuthContext.Provider
      value={{
        token,
        user,
        setUser,
        signup,
        signin,
        signout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
