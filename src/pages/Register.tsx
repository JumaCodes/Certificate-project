import React, { useState } from "react";
import GoogleImg from "../assets/icons/Google.png";
import EyeOpen from "../assets/icons/PasswordOpen.png";
import EyeClose from "../assets/icons/PasswordClosed.png";
import LinkedInImg from "../assets/icons/LinkedIn.png";
import { useNavigate } from "react-router";
import UserAuthLayout from "../layouts/UserAuthLayout";
import Loader from "../components/Loader";
import FormLog from "../components/FormLog";


const Register = () => {
  const navigate = useNavigate();
  // const { signUp } = useAuth();
  const [loaderActive, setLoader] = useState(false);
  const [formLogActive, setFormLog] = useState({
    type: "",
    message: "",
  });

  const [passwordType, setPasswordType] = useState("password");
  const [comfirmPasswordType, setConfirmPasswordType] = useState("password");
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    joiningAs: "",
  });

  const userHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUser((perState) => ({ ...perState, [name]: value.trim() }));
  };

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    setFormLog({ type: "", message: "" });
    e.preventDefault();
    const { firstName, lastName, email, password, confirmPassword, joiningAs } =
      user;

    let queryData =
      "first_name=" +
      firstName +
      "&last_name=" +
      lastName +
      "&email=" +
      email +
      "&password=" +
      password +
      "&join_as=" +
      joiningAs;

    const urlEncoded = new URLSearchParams(user).toString();
    if (password !== confirmPassword) {
      setFormLog({
        type: "error",
        message: "Password does not match",
      });
    } else {
      let xhttp = new XMLHttpRequest();
      xhttp.open("POST", "http://localhost:8000/register", true);
      setLoader(true);

      xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
          let responseJson = JSON.parse(xhttp.responseText);
          if (responseJson.status == "success") {
            localStorage.setItem("_authToken", responseJson.token);
            navigate("/dashboard/feed")
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

      xhttp.setRequestHeader(
        "Content-Type",
        "application/x-www-form-urlencoded"
      );
      xhttp.send(queryData);
    }
    // signUp(email, password, firstName, lastName);
    // navigate("/feed");
  };

  const togglePassword = () => {
    if (passwordType === "password") {
      setPasswordType("text");
      return;
    }
    setPasswordType("password");
  };

  const toggleConfirmPassword = () => {
    if (comfirmPasswordType === "password") {
      setConfirmPasswordType("text");
      return;
    }
    setConfirmPasswordType("password");
  };

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setUser({ ...user, joiningAs: e.target.value });
  };

  return (
    <UserAuthLayout>
      {loaderActive && <Loader />}

      <form
        action=""
        onSubmit={submitHandler}
        className="flex flex-col gap-4 mb-2"
      >
        <div className="justify-start items-start gap-3 inline-flex">
          <div className="flex-col justify-start items-start gap-3 inline-flex">
            <label
              htmlFor="firstName"
              className="text-neutral-700 text-base font-normal font-['DM Sans'] leading-normal"
            >
              First name
            </label>
            <input
              required={true}
              id="firstName"
              value={user.firstName}
              name="firstName"
              type="text"
              onChange={userHandler}
              className={`w-64 h-14 p-4 bg-white rounded-lg shadow border border-gray-300 justify-center items-center inline-flex grow shrink basis-0 text-neutral-800 text-base font-normal font-['DM Sans'] leading-normal outline-none focus:outline-none  ${
                user.firstName === ""
                  ? "bg-white focus:bg-[#E8F0FE]"
                  : "bg-[#E8F0FE]"
              }`}
              placeholder="John"
              autoComplete="off"
            />
          </div>

          <div className="flex-col justify-start items-start gap-3 inline-flex">
            <label
              htmlFor="lastName"
              className="text-neutral-700 text-base font-normal font-['DM Sans'] leading-normal"
            >
              Last name
            </label>
            <input
              required={true}
              id="lastName"
              value={user.lastName}
              name="lastName"
              type="text"
              onChange={userHandler}
              className={`w-64 h-14 p-4 bg-white rounded-lg shadow border border-gray-300 justify-center items-center inline-flex grow shrink basis-0 text-neutral-800 text-base font-normal font-['DM Sans'] leading-normal outline-none focus:outline-none ${
                user.lastName === ""
                  ? "bg-white focus:bg-[#E8F0FE]"
                  : "bg-[#E8F0FE]"
              }`}
              placeholder="Doe"
              autoComplete="off"
            />
          </div>
        </div>

        <div className="flex-col justify-start items-start gap-3 flex">
          <label
            htmlFor="joining"
            className="text-neutral-700 text-base font-normal font-['DM Sans'] leading-normal"
          >
            You are joining as?
          </label>
          <select
            required={true}
            id="joining"
            className={`w-full h-14 pl-4 pr-3 py-4 bg-white rounded-lg shadow border border-gray-300 justify-center grow shrink basis-0  items-start gap-1 flex text-neutral-800 outline-none focus:outline-none focus:bg-[#E8F0FE] ${
              user.joiningAs === ""
                ? "bg-white focus:bg-[#E8F0FE]"
                : "bg-[#E8F0FE]"
            }`}
            onChange={handleSelectChange}
          >
            <option
              className="grow shrink basis-0 text-neutral-800 text-base font-normal font-['Inter'] leading-normal"
              value=""
              data-extra="A"
            ></option>
            <option
              className="grow shrink basis-0 text-neutral-800 text-base font-normal font-['Inter'] leading-normal"
              value="writer"
              data-extra="B"
            >
              Writer
            </option>
            <option
              className="grow shrink basis-0 text-neutral-800 text-base font-normal font-['Inter'] leading-normal"
              value="reader"
              data-extra="C"
            >
              Reader
            </option>
          </select>
        </div>

        <div className="flex-col justify-start items-start gap-3 inline-flex">
          <label
            htmlFor="email"
            className="text-neutral-700 text-base font-normal font-['DM Sans'] leading-normal"
          >
            Email address
          </label>
          <input
            id="email"
            required={true}
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

        <div className="flex-col justify-start items-start gap-3 inline-flex">
          <label
            htmlFor="password"
            className="text-neutral-700 text-base font-normal font-['DM Sans'] leading-normal"
          >
            Password
          </label>
          <div className="w-full h-[70px] pr-3 bg-white rounded-lg shadow border border-gray-300 justify-center items-center inline-flex">
            <input
              required={true}
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

        <div className="flex-col justify-start items-start gap-3 inline-flex">
          <label
            htmlFor="comfirmPassword"
            className="text-neutral-700 text-base font-normal font-['DM Sans'] leading-normal"
          >
            Comfirm Password
          </label>
          <div className="w-full h-[70px] pr-3 bg-white rounded-lg shadow border border-gray-300 justify-center items-center inline-flex">
            <input
              required={true}
              type={comfirmPasswordType}
              id="comfirmPassword"
              onChange={userHandler}
              value={user.confirmPassword}
              name="confirmPassword"
              className={`w-full h-[67px] rounded-l-lg px-4 py-2.5 grow shrink basis-0 justify-start items-start gap-1 flex  text-neutral-800 text-base font-normal font-['DM Sans'] leading-normal outline-none focus:outline-none ${
                user.confirmPassword === ""
                  ? "bg-white focus:bg-[#E8F0FE]"
                  : "bg-[#E8F0FE]"
              }`}
              placeholder="**********"
              autoComplete="off"
            />
            {comfirmPasswordType === "password" ? (
              <img
                src={EyeOpen}
                alt="EyeOpened"
                style={{
                  cursor: "pointer",
                  color: "#212529",
                  fontSize: 16,
                  marginLeft: 10,
                }}
                onClick={toggleConfirmPassword}
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
                onClick={toggleConfirmPassword}
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
              Create account
            </span>
          </button>

          {/* <button className="sm:w-96 group md:w-full h-12 rounded-lg border border-stone-300 justify-center items-center gap-2.5 inline-flex hover:bg-indigo-500">
            <img className="w-6 h-6 group-hover:bg-white" src={GoogleImg} alt="Google" />
            <span className="group-hover:text-white text-neutral-900 text-lg font-normal font-['DM Sans'] leading-relaxed"> Sign up with google</span>
          </button>

          <button className="sm:w-96 group md:w-full h-12 rounded-lg border border-stone-300 justify-center items-center gap-2.5 inline-flex hover:bg-indigo-500">
            <img className="w-6 h-6 group-hover:bg-white" src={LinkedInImg} alt="LinkedIn" />
            <span className="group-hover:text-white text-neutral-900 text-lg font-normal font-['DM Sans'] leading-relaxed">Sign up with Linkedin</span>
          </button> */}
        </div>
      </form>
    </UserAuthLayout>
  );
};

export default Register;
