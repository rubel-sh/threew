import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { auth } from "../../services/auth0.service";

const Authenticate = () => {
  const location = useLocation();
  // console.log(location);
  const navigate = useNavigate();

  const processhash = (hash) => {
    // console.log(hash);
    auth.parseHash({ hash }, function (error, result) {
      console.log("im here", result, error);
      if (error) {
        // alert("Oops , Something went wrong.");
        console.log(error);
        return;
      }
      // Everything here (including user info)
      if (result) {
        const { accessToken } = result;
        // Store token in local storage
        // Authenticate application routes on the base token
        if (accessToken) {
          auth.client.userInfo(accessToken, function (error, result) {
            console.log("accessToken", error, result);
            if (error) {
              console.log("Something went wrong while fetching user profile");
              return;
            }
            console.log(result);
            if (result) {
              console.log("User logged successfully");
              console.log(result);
              localStorage.setItem("userInfo", JSON.stringify(result));
              navigate("/dashboard");
              return;
            }
          });
        }
      }
    });
  };
  useEffect(() => {
    // console.log(location);
    // check hash in uri
    if (location.hash) {
      // console.log("location", location);
      console.log("hash found");
      processhash(location.hash);
    } else {
      console.log("no hash found");
    }
  }, [location]);

  return <div></div>;
};

export default Authenticate;
