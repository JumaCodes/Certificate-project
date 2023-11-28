import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import Loader from "./components/Loader";
// import { store } from "./app/store";

const ProtectedRoute = ({ children }: { children: any }) => {
  const [authenticated, setAuthenticated] = useState("loading");

  useEffect(() => {
    let token = localStorage.getItem("_authToken");
    let xhttp = new XMLHttpRequest();
    xhttp.open("POST", "http://localhost:8000/check-is-auth", true);
    xhttp.setRequestHeader("Content-Type", "application/json");
    xhttp.setRequestHeader("Authorization", "Bearer " + token);

    xhttp.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        let responseJson = JSON.parse(xhttp.responseText);
        if (responseJson.authorization == false) {
          setAuthenticated("false");
        } else {
          setAuthenticated("true");
        }
      }
    };

    xhttp.send();
  }, []);
  // const authenticated = store.getState().auth?.token.access;

  if (authenticated === "loading") {
    return <Loader />;
  } else if (authenticated === "false") {
    return <Navigate to="/login" />;
  }

  return children;
};

export default ProtectedRoute;
