import axios from "axios";
import React, {useEffect,useState} from "react";
import Navbar from "./Navbar";

const Homescreen = () => {

    const email = localStorage.getItem("email")
    if(!localStorage.getItem("email")){
        window.location.href="/login"
    }
    const [jobs,setjobs] = useState([])
    useEffect(async() => {
        const response = (await axios.get(`/api/jobs/${email}`)).data
        console.log(response)
        setjobs(response)
    } , []);

  return (
    <div>
      <Navbar />
    {
        jobs.length == 0  ?
        <h1 className="text-[#505050] mt-40 text-2xl">No Jobs Available for you at this moment.</h1>
        :
        <div className="p-4 flex justify-evenly">
        {
            jobs.map((job)=>{
                return (
                    <div className="border-2 border-black m-4 max-w-lg rounded-bl-3xl rounded-br-3xl">
            <div className="bg-[#F3F3F3]">
                <p className="p-4 text-xl ">{job.title}</p>
            </div>
            <div className="mt-2">
                <div className="mt-4">
                    <p className="text-sm text-[#858585] text-bold">Skills Required </p>
                    {
                        job.skills.map((skill)=>{
                            return <p className="text-xs text-[#858585]">{skill}</p>
                        })
                    }
                </div>
                <div className="mt-4">
                    <p className="text-sm text-[#858585] text-bold">Email </p>
                    <p className="text-xs text-[#858585]">{job.contact_email}</p>
                </div>
                <div className="mt-4">
                    <p className="text-sm text-[#858585] text-bold">Description </p>
                    <p className="w-[20vw] m-auto text-xs text-[#858585]">{job.description}</p>
                </div>
                <div className="mt-8 mb-4">
                <a href="" className="bg-black text-white p-2 px-4 rounded-md hover:bg-[#838383]">Apply</a>
                </div>
            </div>
        </div>
                )
            })
        }

      </div>
    }
    </div>
  );
};

export default Homescreen;
