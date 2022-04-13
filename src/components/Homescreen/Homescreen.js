import axios from "axios";
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import Navbar from "./Navbar";

const Homescreen = () => {
  const [loading, setloading] = useState(false);
  const email = localStorage.getItem("email");
  if (!localStorage.getItem("email")) {
    window.location.href = "/login";
  }
  const [jobs, setjobs] = useState([]);
  useEffect(async () => {
    setloading(true);
    const response = (await axios.get(`/api/jobs/${email}`)).data;
    console.log(response);
    setjobs(response);
    setloading(false);
  }, []);

  return (
    <div>
      <Navbar />
      {loading ? (
        <h1 className="text-3xl mt-40 ">Finding Jobs ...</h1>
      ) : (
          
        <>
        {jobs.length == 0 && <h1 className="text-2xl mt-40">No Jobs related to your Skillset.</h1>}
          <div className="p-4 flex justify-evenly">
            {jobs.map((job) => {
              return (
                <div className="border-2 border-black m-4 max-w-lg rounded-bl-3xl rounded-sm rounded-br-3xl">
                  <div className="bg-gray-300">
                    <p className="p-4 text-xl ">{job.title}</p>
                  </div>
                  <div className="mt-2">
                    <div className="mt-4">
                      <p className="text-sm text-[#858585] text-bold">
                        Skills Required{" "}
                      </p>
                      {job.skills.map((skill) => {
                        return (
                          <p className="text-xs capitalize text-[#858585]">{skill}</p>
                        );
                      })}
                    </div>
                    <div className="mt-4">
                      <p className="text-sm text-[#858585] text-bold">Email </p>
                      <p className="text-xs text-[#858585]">
                        {job.contact_email}
                      </p>
                    </div>
                    <div className="mt-4">
                      <p className="text-sm text-[#858585] text-bold">
                        Description{" "}
                      </p>
                      <p className="w-[20vw] m-auto text-xs text-[#858585]">
                        {job.description}
                      </p>
                    </div>
                    <div className="mt-8 mb-4">
                      <a
                        onClick={()=>{
                            Swal.fire("Congratulations", "You have successfully applied", "success")
                        }}
                        className="bg-black text-white p-2 px-4 rounded-md hover:bg-[#838383]"
                      >
                        Apply
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
};

export default Homescreen;
