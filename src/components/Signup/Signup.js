import React from "react";
import styles from "./Signup.module.css";

const Login = () => {
  return (
    <div className={styles.bgimage}>
      <div
        className={`border-2 rounded-lg w-[40vw] bg-white h-[70vh] m-auto mt-24 + + ${styles.boxshadow} `}
      >
        <p className="text-black text-2xl p-4 mt-4">
          <strong>Sign Up</strong>
        </p>
        <form action="/" method="post" className="m-auto mt-4">
          <div className="mt-8">
            <input
              type="text"
              name="username"
              id="Username"
              placeholder="Username"
              autoComplete="off"
              className="p-2 px-4 border-b-2 border-[#838383] w-[20vw] focus:outline-none focus:border-b-black bg-gray-100 focus:bg-gray-200"
            />
          </div>
          <div className="mt-8">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              autoComplete="off"
              className="p-2 px-4 border-b-2 border-[#838383] w-[20vw] focus:outline-none focus:border-b-black bg-gray-100 focus:bg-gray-200"
            />
          </div>
          <div className="mt-8">
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              autoComplete="off"
              className="p-2 px-4 border-b-2 border-[#838383] w-[20vw] focus:outline-none focus:border-b-black bg-gray-100 focus:bg-gray-200"
            />
          </div>
          <button type="submit" className="bg-black text-white p-2 px-4 rounded-lg mt-12 hover:bg-[#838383]">Sign Up</button>
        </form>
        <p className="text-sm text-[#838383] mt-4">Already have an account ? <a href="/login" className="text-[#000000] hover:underline">Login Here</a></p>
      </div>
    </div>
  );
};

export default Login;
