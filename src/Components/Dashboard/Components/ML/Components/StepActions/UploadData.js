import React, { useEffect } from "react";
import FileIcon from "../../../../../../Assets/Images/Icons/File.svg";

const UploadData = (props) => {
  useEffect(() => {
    console.log(props);
  }, []);

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
          <button
            onClick={() => props.ReplaceData()}
            className="double-action-btn"
          >
            Upload and replace
          </button>
          <button className="double-action-btn">
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
              Data file name: attrition_train_data.csv
            </p>
            <p className="bold-info-text">Upload date: Oct 14 2020</p>
            <p className="bold-info-text">File size: 180KB</p>
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
