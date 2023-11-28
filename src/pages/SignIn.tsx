import React, { useState } from "react";
import UserAuthLayout from "../layouts/UserAuthLayout";
import EyeOpen from "../assets/icons/PasswordOpen.png";
import EyeClose from "../assets/icons/PasswordClosed.png";
import { useNavigate } from "react-router";
import FormLog from "../components/FormLog";
import Loader from "../components/Loader";

const SignIn = () => {
  const [loaderActive, setLoader] = useState(false);
  const navigate = useNavigate();
  const [formLogActive, setFormLog] = useState({
    type: "",
    message: "",
  });

  const [passwordType, setPasswordType] = useState("password");
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const togglePassword = () => {
    if (passwordType === "password") {
      setPasswordType("text");
      return;
    }
    setPasswordType("password");
  };

  const userHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUser((perState) => ({ ...perState, [name]: value }));
  };

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { email, password } = user;
    let queryData = "email=" + email + "&password=" + password;
    let xhttp = new XMLHttpRequest();
    const urlEncoded = new URLSearchParams(user).toString();
    xhttp.open("POST", "http://localhost:8000/login", true);
    setLoader(true);

    xhttp.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        let responseJson = JSON.parse(xhttp.responseText);
        if (responseJson.status == "success") {
          localStorage.setItem("_authToken", responseJson.token);
          navigate("/dashboard/feed");
          setFormLog({
            type: "success",
            message: responseJson.message,
          });
        } else {
          setFormLog({
            type: "error",
            message: responseJson.message,
          });
        }
        setLoader(false);
      }
    };

    xhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhttp.send(queryData);
  };

  return (
    <UserAuthLayout>
            {loaderActive && <Loader />}
      <form action="" onSubmit={handleLogin} className="flex flex-col gap-3">
        <div className="flex-col justify-start items-start gap-3 inline-flex">
          <label
            htmlFor="email"
            className="text-neutral-700 text-base font-normal font-['DM Sans'] leading-normal"
          >
            Email address
          </label>
          <input
            id="email"
            value={user.email}
            name="email"
            onChange={userHandler}
            type="email"
            className={`w-full h-14 p-4 bg-white rounded-lg shadow border border-gray-300 justify-center items-center inline-flex grow shrink basis-0 text-neutral-800 text-base font-normal font-['DM Sans'] leading-normal outline-none focus:outline-none focus:bg-[#E8F0FE] ${
              user.email === "" ? "bg-white focus:bg-[#E8F0FE]" : "bg-[#E8F0FE]"
            }`}
            placeholder="Johndoe@gmail.com"
            autoComplete="off"
          />
        </div>

        <div className="w-full flex-col justify-start items-start gap-3 inline-flex">
          <label
            htmlFor="password"
            className="text-neutral-700 text-base font-normal font-['DM Sans'] leading-normal"
          >
            Password
          </label>
          <div className="w-full h-[70px] pr-3 bg-white rounded-lg shadow border border-gray-300 justify-center items-center inline-flex">
            <input
              type={passwordType}
              onChange={userHandler}
              value={user.password}
              name="password"
              id="password"
              className={`grow shrink basis-0 w-full h-[67px] rounded-l-lg px-4 py-2.5 justify-start items-start gap-1 flex  text-neutral-800 text-base font-normal font-['DM Sans'] leading-normal outline-none focus:outline-none focus:bg-[#E8F0FE] ${
                user.password === ""
                  ? "bg-white focus:bg-[#E8F0FE]"
                  : "bg-[#E8F0FE]"
              }`}
              placeholder="**********"
              autoComplete="off"
            />
            {passwordType === "password" ? (
              <img
                src={EyeOpen}
                alt="EyeOpened"
                style={{
                  cursor: "pointer",
                  color: "#212529",
                  fontSize: 16,
                  marginLeft: 10,
                }}
                onClick={togglePassword}
              />
            ) : (
              <img
                src={EyeClose}
                alt="EyeOpened"
                style={{
                  cursor: "pointer",
                  color: "#212529",
                  fontSize: 16,
                  marginLeft: 10,
                }}
                onClick={togglePassword}
              />
            )}
          </div>
        </div>
        {formLogActive.message.trim() !== "" && (
          <FormLog type={formLogActive.type} message={formLogActive.message} />
        )}
        <div className="flex flex-col gap-6 mt-6">
          <button
            type="submit"
            className="sm:w-96 md:w-full h-14 px-4 py-2 bg-indigo-600 hover:bg-indigo-400 rounded-lg justify-center items-center gap-2 inline-flex"
          >
            <span className="text-white text-lg font-bold font-['DM Sans'] leading-relaxed">
              Log In
            </span>
          </button>
        </div>
      </form>
    </UserAuthLayout>
  );
};

export default SignIn;
