import React from "react";
import "../../../../Assets/Styles/AttritionList.scss";
// import ArrowDown from "../../../../Assets/Images/Icons/ArrowDown.svg";

const AttritionList = () => {
  return (
    <div className="content-wrapper">
      <h1>AttritionList</h1>
      <div className="content">
        <div className="filters">
          <h2>Filters</h2>
          <label>
            Department:
            {/* <img src={ArrowDown} alt="arrow" /> */}
            <select>
              <option>Sales</option>
              <option>Sales</option>
              <option>Sales</option>
            </select>
          </label>
          <label>
            Job Role:
            <select>
              <option>Marketing</option>
            </select>
          </label>
        </div>
      </div>
    </div>
  );
};
export default AttritionList;
