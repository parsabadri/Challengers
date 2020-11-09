import React, { useState } from "react";
import "../../../../Assets/Styles/Notes.scss";

const Notes = () => {
  const [Data, setData] = useState([
    {
      taskIsOpen: true,
      name: "Ethan Barrera",
      considerations: [
        { title: "Monthly Income: 20% higher" },
        { title: "Over Time: 10% lower" },
      ],
      note:
        "Review the salary of Armin and compare the overtime with his peers. Also his internal working  history needs to be reviewed.",
      id: "1",
    },
    {
      taskIsOpen: false,
      name: "James Lori",
      considerations: [
        { title: "Monthly Income: 20% higher" },
        { title: "Over Time: 10% lower" },
      ],
      note:
        "Review the salary of Armin and compare the overtime with his peers. Also his internal working  history needs to be reviewed.",
      id: "2",
    },
  ]);
  const [PageCount, setPageCount] = useState(["1", "2", "3"]);
  return (
    <div className="content-wrapper">
      <h1>Notes</h1>
      <div className="content notes">
        <h2>Status</h2>
        <p>
          There are <strong> 7tasks </strong> to review.
        </p>
        <h2 className="section-title">Filters</h2>
        <div className="flex">
          <section>
            <p className="filter-title">Department:</p>
            <select>
              <option>Sales</option>
              <option>R&D</option>
              <option>Marketing</option>
            </select>
          </section>
          <section>
            <p className="filter-title">Job Role:</p>
            <select>
              <option>Marketing</option>
              <option>Sales</option>
              <option>R&D</option>
            </select>
          </section>
        </div>
        <div className="table">
          <section className="table-header flex">
            <p className="small">Task</p>
            <p className="medium">Name</p>
            <p className="large">Consideration</p>
            <p className="xlarge">Notes</p>
            <p className="small">Action</p>
          </section>
          {Data.map((item) => (
            <section key={item.id} className="flex note-item">
              <div className="checkbox small">
                <label className="felx ">
                  <input type="checkbox" />
                  open
                </label>
              </div>
              <p className="medium"> {item.name} </p>
              <p className="large grid">
                {item.considerations.map((consideration) => (
                  <p> {consideration.title} </p>
                ))}
              </p>
              <p className="xlarge"> {item.note} </p>
              <button className="small edit-btn"> Edit </button>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Notes;
