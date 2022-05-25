import { createContext, useContext, useState } from "react";

const StateContext = createContext();

const initialState = {
  chat: false,
  cart: false,
  userProfile: false,
  notification: false,
};

export const ContexProvider = ({ children }) => {
  const [activeMenu, setActiveMenu] = useState(true);
  const [isClicked, setIsClicked] = useState(initialState);
  const [themeSettings, setThemeSettings] = useState(false);
  const [screenSize, setScreenSize] = useState(undefined);
  const [currentMode, setCurrentMode] = useState("Light");
  const [currentColor, setCurrentColor] = useState("#03C9D7");

  const setColor = (color) => {
    setCurrentColor(color);
    localStorage.setItem("colorMode", color);

    setThemeSettings(false);
  };

  const setMode = (e) => {
    setCurrentMode(e.target.value);
    localStorage.setItem("themeMode", e.target.value);

    setThemeSettings(false);
  };

  const handleClick = (clicked) =>
    setIsClicked({ ...initialState, [clicked]: true });

  return (
    <StateContext.Provider
      value={{
        activeMenu,
        setActiveMenu,
        isClicked,
        setIsClicked,
        themeSettings,
        setThemeSettings,
        screenSize,
        setScreenSize,
        currentMode,
        currentColor,
        handleClick,
        setMode,
        setColor,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
