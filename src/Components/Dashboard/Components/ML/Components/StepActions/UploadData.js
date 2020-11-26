import React, { useEffect, useState } from "react";
import FileIcon from "../../../../../../Assets/Images/Icons/File.svg";
import axios from "axios";
import { config } from "../../../../../../config";

const UploadData = (props) => {
  const [CSVfile, setCSVfile] = useState({});
  const [FileInfo, setFileInfo] = useState({
    file_size: "",
    uploaded_at: "",
    file_name: "",
  });

  useEffect(() => {
    if (document.getElementById("csv-file") != null) {
      //we have to make sure the element is not null, then get the file
      getCSVfile();
    }
  }, [CSVfile]);

  // The function below sets the new file in state as an object, in case the user updates the file again,
  // the function is called as a result of passinc the CSVfile state to the hook. The result is that we
  // always have the latest uploaded .csv file.
  const getCSVfile = () => {
    setCSVfile(document.getElementById("csv-file").files[0]);
  };

  //This function clicks the hidden input and works as an upload trigger
  const trigUpload = () => {
    document.getElementById("csv-file").click();
  };

  // This function sets the uploaded file information(size, name, upload date)
  const setCSVFileDetails = () => {
    setFileInfo({
      file_name: document.getElementById("csv-file").files[0].name,
      // The size is initially in bytes, so we have to convert it to KB first
      file_size:
        Math.floor(
          parseInt(document.getElementById("csv-file").files[0].size) / 1000
        ) + " KB",
      uploaded_at: new Date(
        document.getElementById("csv-file").files[0].lastModified
      ).toDateString(),
    });
  };

  const handleCSVupload = () => {
    setCSVfile(document.getElementById("csv-file").files[0]);
    setCSVFileDetails();
    handleUpload();
  };

  //This function uploads the csv file, then trigs the next step state
  const handleUpload = () => {
    let TrainData = new FormData();
    TrainData.append("deleteExisting", "false");
    TrainData.append("file", CSVfile);

    let req = {
      method: "POST",
      url: config.baseURL + "/rest/superadmin/dataset/import/train-data",
      headers: {
        Authorization: "Bearer " + window.localStorage.getItem("token"),
      },
      data: TrainData,
    };
    axios(req)
      .then((res) => {
        console.log(res);
        props.ReplaceData();
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  if (props.state_status === 0) {
    return null;
  } else if (props.state_status === 1) {
    return (
      <section className="step-section">
        <h2 className="step-title">1. Upload the training data</h2>
        <p className="info-text">
          Please upload your training data in a proper csv format. Learn more
          about the standard data format <a>here</a>.
        </p>
        <div className="flex">
          <button onClick={() => trigUpload()} className="double-action-btn">
            Upload and replace
          </button>
          <input
            className="hidden"
            accept=".csv"
            type="file"
            id="csv-file"
            onChange={() => handleCSVupload()}
          />
          <button onClick={() => trigUpload()} className="double-action-btn">
            Upload and add to current data
          </button>
        </div>
      </section>
    );
  } else if (props.state_status === 2) {
    return (
      <section className="step-section">
        <h2 className="step-title">1. Data</h2>
        <div className="flex">
          <img className="file-icon" src={FileIcon} />
          <section className="file-details">
            <p className="bold-info-text">
              Data file name: {FileInfo.file_name}
            </p>
            <p className="bold-info-text">
              Upload date: {FileInfo.uploaded_at}
            </p>
            <p className="bold-info-text">File size: {FileInfo.file_size}</p>
            <button
              onClick={() => props.ChangeTrainingData()}
              className="change-data-btn"
            >
              Change training data
            </button>
          </section>
        </div>
      </section>
    );
  }
};
export default UploadData;
