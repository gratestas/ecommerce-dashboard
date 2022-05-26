import { FiSettings } from "react-icons/fi";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { Routes, Route } from "react-router-dom";

import { Navbar, Footer, Sidebar, ThemeSettings } from "../components";
import { useStateContext } from "../context/ContextProvider";

import {
  Ecommerce,
  Orders,
  Calendar,
  Employees,
  Stacked,
  Pyramid,
  Customers,
  Kanban,
  Area,
  Bar,
  Pie,
  Financial,
  ColorPicker,
  ColorMapping,
  Editor,
  Line,
} from ".";

const Dashboard = () => {
    const {
        activeMenu,
        currentColor,
        currentMode,
        themeSettings,
        setThemeSettings,
      } = useStateContext();
  return (
    <div className="flex relative dark:bg-main-dark-bg">
    <div className="fixed right-4 bottom-4" style={{ zIndex: "1000" }}>
      <TooltipComponent content="Settings" position="Top">
        <button
          type="button"
          onClick={() => setThemeSettings(true)}
          className="text-3xl p-3 hover:drop-shadow-xl hover:bg-light-gray text-white"
          style={{ background: currentColor, borderRadius: "50%" }}
        >
          <FiSettings />
        </button>
      </TooltipComponent>
    </div>
    {activeMenu ? (
      <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white">
        <Sidebar />
      </div>
    ) : (
      <div className="w-0 dark:bg-secondary-dark-bg">
        <Sidebar />
      </div>
    )}
    <div
      className={`${
        activeMenu ? "md:ml-72" : "flex-2"
      } dark:bg-main-dark-bg bg-main-bg min-h-screen w-full`}
    >
      <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full">
        <Navbar />
      </div>
      <div>
        {themeSettings && <ThemeSettings />}

        <Routes>
          {/* Dashboard */}
          <Route path="/" element={<Ecommerce />} />

          {/* Pages */}
          <Route path="/orders" element={<Orders />} />
          <Route path="/employees" element={<Employees />} />
          <Route path="/customers" element={<Customers />} />

          {/* Apps */}
          <Route path="/kanban" element={<Kanban />} />
          <Route path="/calendar" element={<Calendar />} />
        </Routes>
      </div>
    </div>
  </div>
  )
}

export default Dashboard
