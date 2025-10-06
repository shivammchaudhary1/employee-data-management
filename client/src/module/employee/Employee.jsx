import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import AddEmployeeModal from "./AddEmployeeModal";
import UpdateEmployeeModal from "./UpdateEmployeeModal";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import {
  getAllEmployees,
  selectAllEmployeesData,
  deleteEmployee,
} from "../../redux/slices/employeeSlice.js";
import {
  selectIsAuthenticated,
  selectToken,
} from "../../redux/slices/authslice.js";
import { MdDelete } from "react-icons/md";
import { MdEdit } from "react-icons/md";
import { IoSearch } from "react-icons/io5";
import { FaPlus } from "react-icons/fa6";

const Employee = () => {
  const dispatchToRedux = useDispatch();
  const navigate = useNavigate();
  const isAuthenticated = useSelector(selectIsAuthenticated);
  const token = useSelector(selectToken);
  const employeesData = useSelector(selectAllEmployeesData);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  // Initial load of employees
  useEffect(() => {
    dispatchToRedux(getAllEmployees({ token }));
  }, [dispatchToRedux, token]);

  useEffect(() => {
    if (!isAuthenticated) {
      // If not authenticated, redirect to login page
      navigate("/login");
    }
  }, [isAuthenticated, navigate]);

  const handleSearch = (e) => {
    e.preventDefault();
    dispatchToRedux(getAllEmployees({ token, searchQuery }));
  };

  const handleClearSearch = () => {
    setSearchQuery("");
    dispatchToRedux(getAllEmployees({ token }));
  };

  const handleEdit = (employee) => {
    setSelectedEmployee(employee);
    setIsUpdateModalOpen(true);
  };

  const handleDelete = (employeeId) => () => {
    if (window.confirm("Are you sure you want to delete this employee?")) {
      dispatchToRedux(deleteEmployee({ employeeId, token }));
    }
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8 flex justify-center items-start">
        <div className="max-w-7xl w-full mx-auto border border-gray-200 bg-white p-8 rounded-xl shadow-lg h-[85vh] overflow-auto">
          <div className="flex justify-center mb-8">
            <h1 className="text-3xl font-bold text-gray-800 text-center border-b-2 border-gray-800 pb-2 px-4">
              Employee List
            </h1>
          </div>

          <div className="mt-4 sm:mt-0 mb-6">
            <form
              onSubmit={handleSearch}
              className="flex items-center justify-between gap-4 flex-wrap md:flex-nowrap"
            >
              <div className="flex-1 min-w-[200px]">
                <input
                  type="text"
                  placeholder="Search employees by name..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="shadow-sm focus:ring-gray-600 focus:border-gray-500 block w-full sm:text-sm border-gray-300 rounded-lg p-3 bg-gray-50"
                />
              </div>
              <div className="flex space-x-2 flex-shrink-0">
                <button
                  type="submit"
                  className="inline-flex items-center px-5 py-2 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-gray-800 hover:bg-gray-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 cursor-pointer"
                >
                  <IoSearch className="h-5 w-5 mr-2" />
                  Search
                </button>
                {searchQuery && (
                  <button
                    type="button"
                    onClick={handleClearSearch}
                    className="inline-flex items-center px-5 py-2 border border-gray-300 rounded-lg shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 cursor-pointer"
                  >
                    Clear
                  </button>
                )}

                <button
                  type="button"
                  onClick={() => setIsAddModalOpen(true)}
                  className="inline-flex items-center px-5 py-2 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-gray-800 hover:bg-gray-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 cursor-pointer"
                >
                  <FaPlus className="h-5 w-5 mr-2" />
                  Add New Employee
                </button>
              </div>
            </form>
          </div>

          <AddEmployeeModal
            isOpen={isAddModalOpen}
            onClose={() => setIsAddModalOpen(false)}
            token={token}
          />

          <UpdateEmployeeModal
            isOpen={isUpdateModalOpen}
            onClose={() => setIsUpdateModalOpen(false)}
            employeeData={selectedEmployee}
            token={token}
          />

          <div className="mt-8 flex flex-col">
            <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                <div className="overflow-hidden shadow-md border border-gray-200 rounded-lg">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-100">
                      <tr>
                        <th
                          scope="col"
                          className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900"
                        >
                          S No.
                        </th>
                        <th
                          scope="col"
                          className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                        >
                          Name
                        </th>
                        <th
                          scope="col"
                          className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                        >
                          Email
                        </th>
                        <th
                          scope="col"
                          className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                        >
                          Position
                        </th>
                        <th
                          scope="col"
                          className="px-3 py-3.5 text-right text-sm font-semibold text-gray-900"
                        >
                          Actions
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 bg-white">
                      {employeesData?.map((item, index) => (
                        <tr key={item.id} className="hover:bg-gray-50">
                          <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm text-gray-500">
                            {index + 1}
                          </td>
                          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-900">
                            {item.name}
                          </td>
                          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                            {item.email}
                          </td>
                          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                            {item.position}
                          </td>
                          <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                            <button
                              className="p-1.5 bg-blue-100 text-blue-600 hover:bg-blue-200 rounded-full mr-3 transition-colors duration-200 cursor-pointer"
                              onClick={() => handleEdit(item)}
                              title="Edit Employee"
                            >
                              <MdEdit size={20} />
                            </button>
                            <button
                              className="p-1.5 bg-red-100 text-red-600 hover:bg-red-200 rounded-full transition-colors duration-200 cursor-pointer"
                              onClick={handleDelete(item._id)}
                              title="Delete Employee"
                            >
                              <MdDelete size={20} />
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Employee;
