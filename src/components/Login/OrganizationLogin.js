import React, {useState} from 'react'
import styles from "../Signup/Signup.module.css"
import axios from 'axios'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Swal from "sweetalert2"

AOS.init()

const OrganizationLogin = () => {
    const [password,setpassword] = useState("")
  const [email,setemail] = useState("")
  localStorage.setItem("email", email)
  const handleSubmit = (e) => {
    e.preventDefault();
    const loginData = new FormData();
    loginData.append("email",email);
    loginData.append("password",password)
    axios({
      method: "post",
      url: `http://127.0.0.1:8000/api/login/organization?email=${email}&password=${password}`,
      headers: { "Content-Type": "multipart/form-data" },
      data: loginData,
    })
    .then((response) => {
      console.log(response.data);
      window.location.href="/admin/dashboard"
    })
    .catch((err) => {
      console.log(err);
      Swal.fire({
        icon: 'error',
      title: 'Oops...',
      text: 'Please check your credentials !'
      })
    });
  }

  return (
    <div className={styles.bgimage}>
    <div
    data-aos="flip-left"
      data-aos-easing="ease-out-cubic"
      data-aos-duration="2000"
      className={`border-2 rounded-lg w-[40vw] bg-white h-[60vh] m-auto mt-24 + + ${styles.boxshadow} `}
    >
      <p className="text-black text-2xl p-4 mt-4">
        <strong>Log In</strong>
      </p>
      <form onSubmit={handleSubmit} className="m-auto mt-4">
        <div className="mt-8">
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            placeholder="Email"
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
            value={password}
            placeholder="Password"
            autoComplete="off"
            className="p-2 px-4 border-b-2 border-[#838383] w-[20vw] focus:outline-none focus:border-b-black bg-gray-100 focus:bg-gray-200"
            onChange={(e)=>{setpassword(e.target.value)}}
            />
        </div>
        
        <button type="submit" className="bg-black text-white p-2 px-4 rounded-lg mt-12 hover:bg-[#838383]">Log In</button>
      </form>
      <p className="text-sm text-[#838383] mt-4">Don't have an account ? <a href="/organization/signup" className="text-[#000000] hover:underline">Register Here</a></p>
    </div>
  </div>
  )
}

export default OrganizationLogin