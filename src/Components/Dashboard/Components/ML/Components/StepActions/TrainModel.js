import React, { useEffect } from "react";
import Modelicon from "../../../../../../Assets/Images/Icons/Modelicon.svg";

const TrainModel = (props) => {
  useEffect(() => {
    console.log(props);
  }, []);
  if (props.state_status === 1) {
    return (
      <section className="step-section">
        <h2 className="step-title">2. Train the model</h2>
        <p className="info-text">
          The training will be done on your uploaded training data file. Please
          be patient this process could be take several minutes.
        </p>
        <div className="flex">
          <button
            id="training-btn"
            onClick={() => props.handleStartTrain()}
            className="single-action-btn"
          >
            Start training
          </button>
        </div>
      </section>
    );
  } else if (props.state_status === 2) {
    return (
      <section className="step-section">
        <h2 className="step-title">2. Trained model</h2>
        <div className="flex">
          <img className="file-icon" src={Modelicon} />
          <section className="file-details">
            <p className="bold-info-text">
              Elapsed Time: {props.TrainingResult.elapsed_time} S
            </p>
            <p className="bold-info-text">
              Creation date: {props.TrainingResult.createdTime}
            </p>
            <button
              onClick={() => props.RetrainModel()}
              className="change-data-btn"
            >
              Retrain model
            </button>
          </section>
        </div>
      </section>
    );
  }
};
export default TrainModel;
