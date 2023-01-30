import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { StatesContext } from "../../context/StatesProvider";

const AdminRoute = ({ children }) => {
  const navigate = useNavigate();
  const { isAdmin, setIsAdmin } = useContext(StatesContext);
  const currentUser = JSON.parse(localStorage.getItem("userInfo"));

  useEffect(() => {
    const url = `${import.meta.env.VITE_API}/isadmin/${currentUser.email}`;
    // console.log(url, currentUser);
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setIsAdmin(data);
      });
  }, [currentUser]);

  console.log(isAdmin);
  if (!isAdmin) {
    navigate("/");
  }

  return <div>{children}</div>;
};

export default AdminRoute;
