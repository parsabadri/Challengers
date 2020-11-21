import React from "react";
import FileIcon from "../../../../../../Assets/Images/Icons/Modelicon.svg";

const DoPrediction = (props) => {
  if (props.state_status === 1) {
    return (
      <section className="step-section">
        <h2 className="step-title">4. Do the prediction</h2>
        <p className="info-text">
          The prediction will be done based on trained model and your uploaded
          prediction data file. Please be patient this process could be take
          several minutes.
        </p>

        <div className="flex">
          <button
            onClick={() => props.Predict()}
            className="single-action-btn"
            id="training-btn"
          >
            Start prediction
          </button>
        </div>
      </section>
    );
  } else if (props.state_status === 2) {
    return (
      <section className="step-section">
        <h2 className="step-title">4. Prediction report</h2>
        <div className="flex">
          <img className="file-icon" src={FileIcon} />
          <section className="file-details">
            <a href="" className="bold-info-text report-link">
              View prediction report
            </a>
            <p className="bold-info-text">Creation date: Nov 7,2020</p>
            <p className="bold-info-text">File size: 300kb</p>
            <button
              onClick={() => props.Repredict()}
              className="change-data-btn"
            >
              Predict again
            </button>
          </section>
        </div>
      </section>
    );
  }
};

export default DoPrediction;
