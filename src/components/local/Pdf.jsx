import React, { useRef } from "react";
import Icon from "../../assets/icons/Group 92.svg";

const FileUpload = () => {
  const fileInputRef = useRef(null);

  const handleImageClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    console.log("Uploaded file:", file);
  };

  return (
    <div>
      <img
        src={Icon}
        alt="Upload PDF"
        onClick={handleImageClick}
        style={{ cursor: "pointer" }}
      />
      <input
        type="file"
        accept=".pdf"
        ref={fileInputRef}
        style={{ display: "none" }}
        onChange={handleFileChange}
      />
    </div>
  );
};

export default FileUpload;
