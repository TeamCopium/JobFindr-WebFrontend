import React, { useState } from "react";
import styles from "./FileUpload.module.css";
import { FileUploader } from "react-drag-drop-files";
import axios from "axios";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Swal from "sweetalert2";

AOS.init()

const fileTypes = ["DOC", "DOCX","PDF"];

const email = localStorage.getItem("email")

const FileUpload = () => {
  const [file, setFile] = useState(null);
  const handleChange = (file) => {
    setFile(file);
    console.log(file[0])
  };

  const SubmitFile = async() => {
    const fileData = new FormData();
    fileData.append("file",file[0]);
    fileData.append("email",email)
    axios({
      method: "post",
      "url" : `http://127.0.0.1:8000/api/uploadResume`,
      headers: { "Content-Type": "multipart/form-data" },
      data : fileData
    })
    .then((response) => {
      console.log(response.data);
      Swal.fire('Congratulations', "File Uploaded Successfully" , "success")
      .then(()=>{
        window.location.href="/findjobs"
      })
    })
    .catch((err)=>{
      console.log(err)
      Swal.fire("Some Error with the file uploaded.")
    })

  }

  return (
    <div className={styles.bgimage}>
      <div
      data-aos="zoom-in"
     data-aos-easing="ease-in-back"
     data-aos-delay="300"
     data-aos-offset="0"
      className={"bg-white h-[40vh] w-[40vw] m-auto mb-2 mt-36 rounded-3xl flex flex-column justify-center rounded-tr-3xl" + styles.boxshadow}>
        <div className="text-center text-4xl p-4">
          <p>Resume Upload</p>
          <div className="mt-16">
            <FileUploader
              className=""
              multiple={true}
              handleChange={handleChange}
              name="file"
              types={fileTypes}
            />
            <p className="text-sm mt-12">{file ? `File name: ${file[0].name}` : "No Files Uploaded Yet !"}</p>
          </div>
        </div>
        </div>
        <button data-aos="zoom-in"
        data-aos-easing="ease-in-back"
        data-aos-delay="300"
        data-aos-offset="0" className="bg-black p-2 px-4 text-white rounded-lg " onClick={()=>{SubmitFile()}} >Submit Resume</button>
    </div>
  );
};

export default FileUpload;
