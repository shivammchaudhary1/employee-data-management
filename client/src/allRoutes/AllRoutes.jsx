import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Register from "../module/auth/Register";
import Login from "../module/auth/Login";
import Employee from "../module/employee/Employee";

const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/employee" element={<Employee />} />
      </Routes>
    </>
  );
};

export default AllRoutes;
