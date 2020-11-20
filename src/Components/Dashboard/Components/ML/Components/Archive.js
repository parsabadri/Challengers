import React, { useState } from "react";
import "../../../../../Assets/Styles/Archive.scss";

const Archive = () => {
  const [pullData, setData] = useState({
    data: false,
    step_title: "Training data files, Uploaded on Oct 14 2020.",
    file_name: "attrition_train_data2.csv",
    file_size: "180kb",
  });
  return (
    <div className="content-wrapper">
      <h1>ML Archive</h1>
      <div className="content">
        <h2 class="header2 ">
          <span class="notbold">Last training and prediction data files</span>
        </h2>
        <div className="flex">
          <section className="step-section">
            <h3 className="step-title"> {pullData.step_title} </h3>
            <p className="bold">
              Data file name : <p className="detail"> {pullData.file_name} </p>
            </p>
            <p className="bold">File size : {pullData.file_size}</p>
          </section>
        </div>
        <span className="section-border-bottom"></span>
        <div className="flex">
          <section className="step-section">
            <h3 className="step-title">
              Prediction data files, Uploaded on Oct 12 2020.
            </h3>
            <p className="bold">
              Data file name : <p className="detail"> {pullData.file_name} </p>
            </p>
            <p className="bold">File size: {pullData.file_size}</p>
          </section>
        </div>
        <span className="section-border-bottom"></span>
        <section className="step-section">
          <h3 className="step-title">{pullData.step_title} </h3>
          <p className="bold">
            Data file name: <p className="detail"> {pullData.file_name} </p>
          </p>
          <p className="bold">File size: {pullData.file_size}</p>
        </section>
      </div>
    </div>
  );
};
export default Archive;
