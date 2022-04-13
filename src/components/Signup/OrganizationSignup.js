import React, {useState} from "react";
import styles from "./Signup.module.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Swal from "sweetalert2"
import axios from "axios"
import {Link} from "react-router-dom"

AOS.init()

const OrganizationSignup = () => {

    const [name,setname] = useState("")
    const [email,setemail] = useState("")
    const [password,setpassword] = useState("")

    const Signup = async() => {
        try {
          const response = await axios.post("/api/register/organization", {
            email,password,name
          })
          Swal.fire("Congratulations" , "You have been registered successfully", "success")
          .then(()=>{
            window.location.href="login"
          })
          
        } catch (error) {
          console.log(error)
        }
      }
  return (
    <div className={styles.bgimage}>
    <div
    data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000"
      className={`border-2 rounded-lg w-[40vw] bg-white h-[70vh] m-auto mt-24 + + ${styles.boxshadow} `}
    >
      <p className="text-black text-2xl p-4 mt-4">
        <strong>Organization Sign Up</strong>
      </p>
        <div className="mt-8">
          <input
            type="text"
            name="username"
            id="Username"
            placeholder="Organization Name"
            value={name}
            autoComplete="off"
            className="p-2 px-4 border-b-2 border-[#838383] w-[20vw] focus:outline-none focus:border-b-black bg-gray-100 focus:bg-gray-200"
            onChange={(e)=>{setname(e.target.value)}}
            />
        </div>
        <div className="mt-8">
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            value={email}
            autoComplete="off"
            className="p-2 px-4 border-b-2 border-[#838383] w-[20vw] focus:outline-none focus:border-b-black bg-gray-100 focus:bg-gray-200"
            onChange={(e)=>{setemail(e.target.value)}}
            />
        </div>
        <div className="mt-8">
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            autoComplete="off"
            value={password}
            className="p-2 px-4 border-b-2 border-[#838383] w-[20vw] focus:outline-none focus:border-b-black bg-gray-100 focus:bg-gray-200"
            onChange={(e)=>{setpassword(e.target.value)}}
            />
          </div>
        <button onClick={()=>{Signup()}} className="bg-black text-white p-2 px-4 rounded-lg mt-12 hover:bg-[#838383]">Sign Up</button>
      <p className="text-sm text-[#838383] mt-4">Already have an account ? <Link to="/organization/login"><a className="text-[#000000] hover:underline">Login Here</a></Link></p>
    </div>
  </div>
  )
}

export default OrganizationSignup