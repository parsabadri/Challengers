import React, { useEffect, useState } from "react";
import FileIcon from "../../../../../../Assets/Images/Icons/File.svg";
import axios from "axios";
import { config } from "../../../../../../config";

const UploadData = (props) => {
  const [CSVfile, setCSVfile] = useState({});
  const [Action_type, setActionType] = useState(""); //Either add or replace data
  const [FileInfo, setFileInfo] = useState({
    file_size: "",
    uploaded_at: "",
    file_name: "",
  });

  useEffect(() => {
    if (document.getElementById("csv-file") != null) {
      //we have to make sure the element is not null, then get the file
      getCSVfile();
      if (props.Existing_file.file_name !== null) {
        setFileInfo({
          file_name: props.Existing_file.file_name,
          file_size: props.Existing_file.file_size,
          uploaded_at: props.Existing_file.upload_date,
        });
        console.log(props);
      }
    }
  }, [CSVfile, props]);

  // The function below sets the new file in state as an object, in case the user updates the file again,
  // the function is called as a result of passinc the CSVfile state to the hook. The result is that we
  // always have the latest uploaded .csv file.
  const getCSVfile = () => {
    setCSVfile(document.getElementById("csv-file").files[0]);
  };

  //This function clicks the hidden input and works as an upload trigger
  const trigUpload = (action) => {
    setActionType(action); // action is either add to data or replace training data
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
    setCSVFileDetails();
    if (Action_type === "replace") {
      handleReplaceData();
    } else if (Action_type === "add") {
      handleAddToData();
    }
  };

  //This function uploads the csv file, then trigs the next step state
  const handleReplaceData = () => {
    document.getElementById("replace-btn").innerHTML = "Uploading...";
    let TrainData = new FormData();
    TrainData.append("deleteExisting", true);
    TrainData.append("file", document.getElementById("csv-file").files[0]);

    let req = {
      method: "POST",
      url: config.baseURL + "/rest/superadmin/dataset/import/train-data",
      headers: {
        Authorization: "Bearer " + window.localStorage.getItem("token"),
        "Content-Type": "text/csv",
      },
      data: TrainData,
    };
    axios(req)
      .then((res) => {
        console.log(res);
        if (res.data.code != 200) {
          window.alert(res.data.message);
          document.getElementById("replace-btn").innerHTML =
            "Upload and replace";
        } else {
          window.alert(res.data.message);
          document.getElementById("replace-btn").innerHTML =
            "Upload and replace";
          props.ReplaceData();
        }
      })
      .catch((err) => {
        console.log(err.response);
      });
  };
  const handleAddToData = () => {
    document.getElementById("add-btn").innerHTML = "Uploading...";
    let TrainData = new FormData();
    TrainData.append("deleteExisting", false);
    TrainData.append("file", document.getElementById("csv-file").files[0]);

    let req = {
      method: "POST",
      url: config.baseURL + "/rest/superadmin/dataset/import/train-data",
      headers: {
        Authorization: "Bearer " + window.localStorage.getItem("token"),
        "Content-Type": "multipart/form-data",
      },
      data: TrainData,
    };
    axios(req)
      .then((res) => {
        console.log(res);
        if (res.data.code != 200) {
          window.alert(res.data.message);
          document.getElementById("replace-btn").innerHTML =
            "Upload and add to current data";
        } else {
          props.ReplaceData();
          document.getElementById("replace-btn").innerHTML =
            "Upload and add to current data";
        }
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
          Please upload your training data in a proper csv format.
        </p>
        <div className="flex">
          <button
            onClick={() => trigUpload("replace")}
            id="replace-btn"
            className="double-action-btn"
          >
            Upload and replace
          </button>
          <input
            className="hidden"
            accept=".csv"
            type="file"
            id="csv-file"
            onChange={() => handleCSVupload()}
          />
          <button
            onClick={() => trigUpload("add")}
            id="add-btn"
            className="double-action-btn"
          >
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
            <p className="bold-info-text">Upload at: {FileInfo.uploaded_at}</p>
            <p className="bold-info-text">File size: {FileInfo.file_size}</p>
          </section>
        </div>
      </section>
    );
  }
};
export default UploadData;
