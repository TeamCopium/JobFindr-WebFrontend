import React, { useState } from "react";
import styles from "./FileUpload.module.css";
import { FileUploader } from "react-drag-drop-files";

const fileTypes = ["DOC", "DOCX"];

const FileUpload = () => {
  const [file, setFile] = useState(null);
  const handleChange = (file) => {
    setFile(file);
    console.log(file)
  };

  return (
    <div className={styles.bgimage}>
      <div className="bg-white h-[40vh] w-[40vw] m-auto mb-2 mt-36 rounded-3xl flex flex-column justify-center rounded-tr-3xl">
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
        <a href="/home" className="bg-black p-2 px-4 text-white rounded-lg">Submit Resume</a>
    </div>
  );
};

export default FileUpload;
