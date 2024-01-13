/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import { message } from "antd";
import { GetCurrentUser } from "../apicalls/users";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setLoader } from "../redux/loaderSlice";
import { setUser } from "../redux/userSlice";

const ProtectedPage = ({ children }) => {
  const { user } = useSelector((state) => state.users);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const validateToken = async () => {
    try {
      dispatch(setLoader(true));
      const response = await GetCurrentUser();
      dispatch(setLoader(false));
      if (response.success) {
        dispatch(setUser(response.data));
      } else {
        const errorMessage = response.message;
        // Check if the error message indicates an expired token
        if (errorMessage === "jwt expired") {
          // Token has expired, remove it from local storage
          localStorage.removeItem("token");
        }

        navigate("/login");
        message.error(errorMessage);
      }
    } catch (error) {
      dispatch(setLoader(false));
      navigate("/login");
      message.error(error.message);
    }
  };

  useEffect(() => {
    if (localStorage.getItem("token")) {
      validateToken();
    } else {
      navigate("/login");
    }
  }, []);
  return (
    user && (
      <div>
        {/* Header */}
        <div className="bg-primary p-5">
          <div className="flex justify-between items-center ">
            <h1 className="text-3xl text-white font-bold">Bargain Buddy</h1>
            <div className="bg-white rounded-full py-2 px-5 flex gap-2 items-center">
              <i className="ri-user-2-line text-primary font-semibold cursor-pointer"></i>
              <span
                className="text-primary font-semibold cursor-pointer uppercase"
                onClick={() => {
                  navigate("/profile");
                }}
              >
                {user.name}
              </span>
              <i
                className="ri-logout-circle-r-line text-primary text-lg ml-10 cursor-pointer"
                onClick={() => {
                  localStorage.removeItem("token");
                  navigate("/login");
                }}
              ></i>
            </div>
          </div>
        </div>

        {/* Body */}
        <div className="container mx-auto mt-5 p-6 bg-white rounded-lg shadow-lg">
          {children}
        </div>
      </div>
    )
  );
};

export default ProtectedPage;
