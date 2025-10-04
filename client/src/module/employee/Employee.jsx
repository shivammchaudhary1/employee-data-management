import React, { useState, useEffect } from "react";
import AddEmployeeModal from "./AddEmployeeModal";
import UpdateEmployeeModal from "./UpdateEmployeeModal";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import {
  getAllEmployees,
  selectAllEmployeesData,
  deleteEmployee,
} from "../../redux/slices/employeeSlice.js";
import { useDispatch, useSelector } from "react-redux";
import { selectIsAuthenticated } from "../../redux/slices/authslice.js";
import { useNavigate } from "react-router-dom";

const Employee = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isAuthenticated = useSelector(selectIsAuthenticated);
  const employeesData = useSelector(selectAllEmployeesData);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
  const [selectedEmployee, setSelectedEmployee] = useState(null);

  useEffect(() => {
    dispatch(getAllEmployees());
  }, [dispatch]);

  const handleEdit = (employee) => {
    setSelectedEmployee(employee);
    setIsUpdateModalOpen(true);
  };

  useEffect(() => {
    if (!isAuthenticated) {
      // If not authenticated, redirect to login page
      navigate("/login");
    }
  }, [isAuthenticated, navigate]);

  const handleDelete = (employeeId) => () => {
    if (window.confirm("Are you sure you want to delete this employee?")) {
      dispatch(deleteEmployee(employeeId));
    }
  };
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-100 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-center mb-6">
            <h1 className="text-3xl font-bold text-gray-900 text-center">
              Employee List
            </h1>
          </div>

          <div>
            <div className="mt-4 sm:mt-0">
              <div className="flex space-x-4">
                <input
                  type="text"
                  placeholder="Search by name..."
                  className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md p-2"
                />
                <button className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                  Search
                </button>
              </div>
            </div>
          </div>

          <div className="flex justify-end mt-6 mb-4">
            <button
              onClick={() => setIsAddModalOpen(true)}
              className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-2"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                  clipRule="evenodd"
                />
              </svg>
              Add New Employee
            </button>
          </div>

          <AddEmployeeModal
            isOpen={isAddModalOpen}
            onClose={() => setIsAddModalOpen(false)}
          />

          <UpdateEmployeeModal
            isOpen={isUpdateModalOpen}
            onClose={() => setIsUpdateModalOpen(false)}
            employeeData={selectedEmployee}
          />

          <div className="mt-8 flex flex-col">
            <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 rounded-lg">
                  <table className="min-w-full divide-y divide-gray-300">
                    <thead className="bg-gray-50">
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
                          className="relative py-3.5 pl-3 pr-4 sm:pr-6"
                        >
                          <span className="sr-only">Actions</span>
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
                              className="text-indigo-600 hover:text-indigo-900 mr-4"
                              onClick={() => handleEdit(item)}
                            >
                              Edit
                            </button>
                            <button
                              className="text-red-600 hover:text-red-900"
                              onClick={handleDelete(item._id)}
                            >
                              Delete
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
