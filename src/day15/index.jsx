import React, { useState } from "react";
import s from "./index.module.scss";
import cn from "clsx";

const Day15 = () => {
  const [active, setActive] = useState(false);
  const [uploadFile, setUploadFile] = useState(null);
  const [fileName, setFileName] = useState(null);
  return (
    <div className={s.frame}>
      <div className={s.dropFileBox}>
        <div className={s.header}>Drop file to upload</div>
        <div className={cn(s.bar, active ? s.active : null)} />
        <div className={cn(s.uploadingBar, active ? s.active : null)}>
          <img
            src="https://100dayscss.com/codepen/syncing.svg"
            className={cn(s.syncing, active ? s.active : null)}
            alt="syncing"
          ></img>
          <img
            src="https://100dayscss.com/codepen/checkmark.svg"
            className={cn(s.done, active ? s.active : null)}
            alt="done"
          ></img>
        </div>
        <div className={cn(s.drop, active ? s.noActive : null)}>
          <label for="uploadbtn" className={cn(s.uploadButton)}>
            {uploadFile ? (
              <div className={s.textFileName}>{fileName}</div>
            ) : (
              <img
                src={"https://100dayscss.com/codepen/upload.svg"}
                alt="upload"
              ></img>
            )}
          </label>
          <input
            type="file"
            className={s.dropFile}
            multiple
            name="upload"
            id="uploadbtn"
            onChange={(e) => {
              setUploadFile(e.target.files[0]);
              setFileName(e.target.files[0].name);
            }}
          />
        </div>
        <button
          className={s.uploadBnt}
          onClick={() => {
            uploadFile ? setActive(true) : setActive(false);
          }}
        >
          Upload file
        </button>
      </div>
    </div>
  );
};

export default Day15;
