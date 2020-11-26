import React, { useState, useEffect } from "react";
import "../../../../../Assets/Styles/Setup.scss";
import { BrowserRouter } from "react-router-dom";
import UploadData from "./StepActions/UploadData";
import TrainModel from "./StepActions/TrainModel";
import PredictionData from "./StepActions/PredictionData";
import DoPrediction from "./StepActions/DoPrediction";

// A littile note about how step states and classes are handled:
//all steps have a state update value (i.e. a name in the Progress State of the component)
//and they have 3 states:
//0: not initiated, not ongoing
//1: initiated and ongoing
//2: done (after which we set the next step element's value to ongoing and update the value)
//We have passed the Component state called Progress into the useEffect hook so everytime that
//it us updated, the hook runs 4 functions for updating the step elements state in the FE

// We are displaying step status in the child components according to the Progress state object
// in the present componnet. Case state:0 is handled here and cases 1,2 are handled in the child.

const Setup = () => {
  const [Progress, setProgress] = useState({
    data: 1,
    training: 0,
    prediction_data: 0,
    prediction: 0,
  });

  useEffect(() => {
    updateStepStates();
  }, [Progress]);
  //this function runs 4 other functions and updates the state of our steps based on their value
  const updateStepStates = () => {
    updateDataUploadState();
    updateTrainModelState();
    updatePredictionDataState();
    updatePredictionState();
  };

  //the following four functions update every step state based on current status of the training progrss
  const updateDataUploadState = () => {
    if (Progress.data === 0) {
      console.log("data not yet uploaded");
      document.getElementById("training-data").className = "initial-state";
      document.getElementById("training-data").classList.remove("done-state");
    } else if (Progress.data === 1) {
      console.log("data uploade being done");
      document.getElementById("training-data").classList.remove("done-state");
    } else if (Progress.data === 2) {
      console.log("data uploaded");
      document.getElementById("training-data").classList.add("done-state");
    }
  };
  const updateTrainModelState = () => {
    if (Progress.training === 0) {
      console.log("training not initiated");
      document.getElementById("train-model").className = "initial-state";
    } else if (Progress.training === 1) {
      console.log("training being done");
      document.getElementById("train-model").className = "ongoing-state";
    } else if (Progress.training === 2) {
      console.log("training done");
      document.getElementById("train-model").className = "done-state";
    }
  };
  const updatePredictionDataState = () => {
    if (Progress.prediction_data === 0) {
      console.log("prediction not initiated yet");
      document.getElementById("prediction-data").className = "initial-state";
    } else if (Progress.prediction_data === 1) {
      console.log("prediction is ongoing");
      document.getElementById("prediction-data").className = "ongoing-state";
    } else if (Progress.prediction_data === 2) {
      console.log("prediction is done");
      document.getElementById("prediction-data").className = "done-state";
    }
  };
  const updatePredictionState = () => {
    if (Progress.prediction === 0) {
      console.log("do prediction not initiated yet");
      document.getElementById("do-prediction").className = "initial-state";
    } else if (Progress.prediction === 1) {
      console.log("do prediction is ongoing");
      document.getElementById("do-prediction").className = "ongoing-state";
    } else if (Progress.prediction === 2) {
      console.log("do prediction is done");
      document.getElementById("do-prediction").className = "done-state";
    }
  };

  //The following 4 functions are called when a certain step of the ML setup is done and they update
  //our current step state in component so the user will know which step they're on.

  //1
  const handleStartTrain = () => {
    document.getElementById("training-btn").innerHTML = "Model is training...";
    document.getElementById("training-btn").style.pointerEvents = "none";
    document.getElementById("training-btn").style.backgroundColor =
      "rgba(127, 53, 254, 0.7)";
    setTimeout(() => {
      setProgress({
        data: 2,
        training: 2,
        prediction_data: 1,
        prediction: 0,
      });
    }, 3000);
  };
  //2
  const ReplaceData = () => {
    setProgress({
      data: 2,
      training: 1,
      prediction_data: 0,
      prediction: 0,
    });
  };
  //3
  const ReplaceEmployeeData = () => {
    setProgress({
      data: 2,
      training: 2,
      prediction_data: 2,
      prediction: 1,
    });
  };
  //4
  const Predict = () => {
    document.getElementById("training-btn").innerHTML = "Predicting...";
    document.getElementById("training-btn").style.pointerEvents = "none";
    document.getElementById("training-btn").style.backgroundColor =
      "rgba(127, 53, 254, 0.7)";
    setTimeout(() => {
      setProgress({
        data: 2,
        training: 2,
        prediction_data: 2,
        prediction: 2,
      });
    }, 3000);
  };
  // This function changes Uploaded training data, also Progress state object is updated
  // in this function. This function is passed to the Child Component as props
  const ChangeTrainingData = () => {
    setProgress({ data: 1, training: 0, prediction_data: 0, prediction: 0 });
  };
  const RetrainModel = () => {
    setProgress({ data: 2, training: 1, prediction_data: 0, prediction: 0 });
  };
  const ReplaceModelData = () => {
    setProgress({ data: 2, training: 2, prediction_data: 2, prediction: 1 });
  };
  const ChangePredictionData = () => {
    setProgress({ data: 2, training: 2, prediction_data: 1, prediction: 0 });
  };
  const Repredict = () => {
    setProgress({ data: 2, training: 2, prediction_data: 2, prediction: 1 });
  };
  return (
    <BrowserRouter basename="/ML">
      <div className="content-wrapper">
        <h1>ML Setup</h1>
        <div className="content">
          <div className="progress">
            <div className="line-wrapper">
              <div className="line">
                <span id="training-data" className="ongoing-state">
                  <h4 className="step-label">Training Data</h4>
                </span>
                <span id="train-model" className="initial-state">
                  <h4 className="step-label">Train Model</h4>
                </span>
                <span id="prediction-data" className="initial-state">
                  <h4 className="step-label">Prediction Data</h4>
                </span>
                <span id="do-prediction" className="initial-state">
                  <h4 className="step-label">Do Prediction</h4>
                </span>
              </div>
            </div>
          </div>
          <span className="section-border-bottom"></span>
          {/* This is the typical form of a conditional rendering in ReactJS */}
          {Progress.prediction === 0 ? null : (
            <React.Fragment>
              <DoPrediction
                state_status={Progress.prediction}
                Predict={() => Predict()}
                Repredict={() => Repredict()}
              />
              <span className="section-border-bottom"></span>
            </React.Fragment>
          )}
          {Progress.prediction_data === 0 ? null : (
            <React.Fragment>
              <PredictionData
                state_status={Progress.prediction_data}
                ReplaceModelData={() => ReplaceModelData()}
                ChangePredictionData={() => ChangePredictionData()}
              />
              <span className="section-border-bottom"></span>
            </React.Fragment>
          )}
          {Progress.training === 0 ? null : (
            <React.Fragment>
              <TrainModel
                state_status={Progress.training}
                handleStartTrain={() => handleStartTrain()}
                RetrainModel={() => RetrainModel()}
              />
              <span className="section-border-bottom"></span>
            </React.Fragment>
          )}
          <UploadData
            state_status={Progress.data}
            ReplaceData={() => ReplaceData()}
            ChangeTrainingData={() => ChangeTrainingData()}
          />
        </div>
      </div>
    </BrowserRouter>
  );
};
export default Setup;
