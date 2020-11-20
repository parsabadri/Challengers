import React, { useState } from "react";
import "../../../../../Assets/Styles/Setup.scss";
import Circle from "../../../../../Assets/Images/Icons/Circle.svg";
import Checked from "../../../../../Assets/Images/Icons/Checked.svg";
import { BrowserRouter } from "react-router-dom";

const Setup = () => {
  const [Progress, setProgress] = useState({
    data: 0,
    training: 0,
    model: 0,
    prediction: 0,
  });
  const handleStartTrain = (event) => {
    event.preventDefault();
    setTimeout(() => {
      setProgress({
        data: 2,
        training: 1,
        model: 0,
        prediction: 0,
      });
    }, 3000);
  };
  const ReplaceData = () => {
    setProgress({
      data: 1,
      training: 0,
      model: 0,
      prediction: 0,
    });
  };
  const ReplaceEmployeeData = () => {
    setProgress({
      data: 2,
      training: 2,
      model: 1,
      prediction: 0,
    });
  };
  const Predict = () => {
    setProgress({
      data: 2,
      training: 2,
      model: 2,
      prediction: 1,
    });
  };
  return (
    <BrowserRouter basename="/ML">
      <div className="content-wrapper">
        <h1>ML Setup</h1>
        <div className="content">
          <div className="progress">
            <div className="line-wrapper">
              <div className="line">
                <span id="training-data" className="initial-state"></span>
                <span id="train-model" className="initial-state"></span>
                <span id="prediction-data" className="initial-state"></span>
                <span id="do-prediction" className="initial-state"></span>
              </div>
            </div>
            <div className="line-wrapper">
              <div className="progress-labels">
                <span id="training-data" className="initial-state">
                  Training Data
                </span>
                <span id="train-model" className="initial-state">
                  Train Model
                </span>
                <span id="prediction-data" className="initial-state">
                  Prediction Data
                </span>
                <span id="do-prediction" className="initial-state">
                  Do Prediction
                </span>
              </div>
            </div>
            {/* <div className="progress-bar">
              <section id="step1">
                <div className="step">
                  {Progress.data === true ? (
                    <img src={Checked} alt="done" />
                  ) : (
                    <img src={Circle} alt="incomplete" />
                  )}
                  <p>Data</p>
                </div>
                <div id="progress-line1"></div>
                <div className="step">
                  {Progress.training === true ? (
                    <img src={Checked} alt="done" />
                  ) : (
                    <img src={Circle} alt="incomplete" />
                  )}
                  <p>Training</p>
                </div>
              </section>
              <div className="line">
                <div className="progress-line-mid"></div>
              </div>
              <section id="step2">
                <div className="step">
                  {Progress.model === true ? (
                    <img src={Checked} alt="done" />
                  ) : (
                    <img src={Circle} alt="incomplete" />
                  )}
                  <p>Model</p>
                </div>
                <div id="progress-line2"></div>
                <div className="step">
                  {Progress.prediction === true ? (
                    <img src={Checked} alt="done" />
                  ) : (
                    <img src={Circle} alt="incomplete" />
                  )}
                  <p>Prediction</p>
                </div>
              </section>
            </div>
             */}
            <p className="setup-report">
              The Model has been updated. Ready for prediction.
            </p>
          </div>
          <span className="section-border-bottom"></span>
          <div className="flex">
            <section className="step-section">
              <h2 className="step-title">1. Data</h2>
              <p>Last sample data has been uploaded at Oct 14 2020.</p>
              <p className="bold-info-text">
                Data file name: attrition_train_data.csv
              </p>
              <p className="bold-info-text">File size: 180KB</p>
              <div className="flex">
                <button
                  onClick={() => ReplaceData()}
                  className="double-action-btn"
                >
                  Replace Data
                </button>
                <button className="double-action-btn">
                  Add to existing Data
                </button>
              </div>
            </section>
            <section className="step-section">
              <h2 className="step-title">2. Training</h2>
              <p>Last time trained at Oct 15 2020.</p>
              <p className="bold-info-text">
                Data file name: attrition_train_data.csv
              </p>
              <p className="bold-info-text">File size: 180KB</p>
              <div className="flex">
                <button
                  onClick={(event) => handleStartTrain(event)}
                  className="single-action-btn"
                >
                  Add to existing Data
                </button>
              </div>
            </section>
          </div>
          <span className="section-border-bottom"></span>
          <section className="step-section">
            <h2 className="step-title">3. Model / Prediction</h2>
            <p>Upload employee data to predict the attrition.</p>

            <div className="flex">
              <button
                onClick={() => ReplaceEmployeeData()}
                className="double-action-btn-purple"
              >
                Replace Data
              </button>
              <button
                onClick={() => Predict()}
                className="double-action-btn-purple"
              >
                Add to existing Data
              </button>
            </div>
          </section>
        </div>
      </div>
    </BrowserRouter>
  );
};
export default Setup;
