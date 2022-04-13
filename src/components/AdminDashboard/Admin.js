import axios from "axios";
import React, { useState } from "react";
import Swal from "sweetalert2";
import Navbar from "./Navbar";

const Admin = () => {
  const [title, settitle] = useState();
  const [skill, setskill] = useState();
  const [organization, setorganization] = useState();
  const [description, setdescription] = useState();

  const AddJob = async() => {
      
    const email = localStorage.getItem("email")

    const Job = {
        title,
        description,
        skills: skill.split(","),
        organization,
        contact_email : email
    }
    console.log(Job)
    const result = await axios.post("/api/createJob", Job)
    .then(()=>{
        Swal.fire("Congratulations", "Job has been posted successfully","success")
    })



  };

  return (
    <div className="bg-[#505050] h-[100vh]">
      <Navbar />
      <div className="bg-white w-[60vw] h-fit m-auto ">
        <div className="text-black text-xl">
          <p className="p-4 mt-12">Admin Dashboard</p>
        </div>
        <div className="mt-8 ">
          <input
            type="text"
            placeholder="Job Title"
            value={title}
            className="p-2 px-4 border-b-2 border-[#838383] w-[40vw] focus:outline-none focus:border-b-black bg-gray-100 focus:bg-gray-200"
            onChange={(e)=>{settitle(e.target.value)}}
            />
          <br />
          <input
            type="text"
            placeholder="Skills Required (Separated by commas)"
            value={skill}
            className="p-2 px-4 mt-8 border-b-2 border-[#838383] w-[40vw] focus:outline-none focus:border-b-black bg-gray-100 focus:bg-gray-200"
            onChange={(e)=>{setskill(e.target.value)}}
            />
          <br />
          <input
            type="text"
            placeholder="Organization Name"
            value={organization}
            className="p-2 px-4 mt-8 border-b-2 border-[#838383] w-[40vw] focus:outline-none focus:border-b-black bg-gray-100 focus:bg-gray-200"
            onChange={(e)=>{setorganization(e.target.value)}}
            />
          <br />
          <input
            type="text"
            placeholder="Description"
            value={description}
            className="p-2 px-4 mt-8 border-b-2 h-[20vh] border-[#838383] w-[40vw] focus:outline-none focus:border-b-black bg-gray-100 focus:bg-gray-200"
            onChange={(e)=>{setdescription(e.target.value)}}
            />
          <br />
          <button
            className="p-2 mt-8 mb-4 px-4 rounded-md bg-black text-white "
            onClick={() => AddJob()}
          >
            Add Job
          </button>
        </div>
      </div>
    </div>
  );
};

export default Admin;
