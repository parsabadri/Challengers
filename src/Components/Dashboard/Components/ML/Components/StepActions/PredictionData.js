import React from "react";
import FileIcon from "../../../../../../Assets/Images/Icons/File.svg";

const PredictionData = (props) => {
  if (props.state_status === 1) {
    return (
      <section className="step-section">
        <h2 className="step-title">3. Prediction data file</h2>
        <p className="info-text">
          Please upload your prediction data in a proper csv format. Learn more
          about the standard data format here.
        </p>

        <div className="flex">
          <button
            onClick={() => props.ReplaceModelData()}
            className="double-action-btn"
          >
            Upload and replace
          </button>
          <button
            // onClick={() => Predict()}
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
        <h2 className="step-title">3. Prediction data file</h2>
        <p>Upload employee data to predict the attrition.</p>
        <div className="flex">
          <img className="file-icon" src={FileIcon} />
          <section className="file-details">
            <p className="bold-info-text">
              Data file name: attrition_train_data.csv
            </p>
            <p className="bold-info-text">Upload date: Oct 14 2020</p>
            <p className="bold-info-text">File size: 180KB</p>
            <button
              onClick={() => props.ChangePredictionData()}
              className="change-data-btn"
            >
              Change prediction data
            </button>
          </section>
        </div>
      </section>
    );
  }
};

export default PredictionData;
