import React, { useState, useEffect } from "react";
import "../../../../Assets/Styles/Home.scss";
import SmallPieChart from "./Components/SmallPieChart";
import MultiBarChart from "./Components/MultiBarChart";
import SimpleBarChar from "./Components/SimpleBarChart";
import { BrowserRouter } from "react-router-dom";

const Home = (props) => {
  const [CompanyData, setCompData] = useState({
    name: "The BlaBla Company",
  });
  const [CompanyAttrition, setCompAttrition] = useState([
    { name: "Overall", value: Math.random() * (400 - 100) + 100 },
    { name: "", value: Math.random() * (400 - 100) + 100 },
  ]);
  const [DeptAttrition, setDeptAttrition] = useState([
    { name: "Sales", value: Math.random() * (400 - 100) + 100 },
    { name: "R&D", value: Math.random() * (400 - 100) + 100 },
    { name: "Customer Service", value: Math.random() * (400 - 100) + 100 },
  ]);
  const [AttritionByRole, setAttrByRole] = useState([
    { name: "Sales Manager", value: Math.random() * (400 - 100) + 100 },
    { name: "Sales Executive", value: Math.random() * (400 - 100) + 100 },
    { name: "Sales Representative", value: Math.random() * (400 - 100) + 100 },
    { name: "Marketing", value: Math.random() * (400 - 100) + 100 },
  ]);
  const [Departments, setDepartments] = useState([
    "Sales",
    "R&D",
    "Customer Service",
  ]);
  const [JobRoles, setJobRoles] = useState([
    "Marketing",
    "Sales Representative",
    "Sales Manager",
    "Sales Executive",
  ]);
  const [AttritionByAge, setAttrByAge] = useState([
    {
      name: "18-25",
      Sales: 40,
      "R&D": 24,
      "Customer Service": 34,
      amt: 24,
    },
    {
      name: "25-30",
      Sales: 30,
      "R&D": 13,
      "Customer Service": 23,
      amt: 22,
    },
    {
      name: "30-35",
      Sales: 20,
      "R&D": 98,
      "Customer Service": 23,
      amt: 22,
    },
  ]);
  const [AttritionByRoleBar, setAttrByRoleBar] = useState([
    {
      name: "Marketing",
      people: "25",
      amt: 25,
    },
    {
      name: "Sales Representative",
      people: "23",
      amt: 23,
    },
    {
      name: "Sales Manager",
      people: "10",
      amt: 10,
    },
    {
      name: "Sales Executive",
      people: "15",
      amt: 15,
    },
  ]);
  const [IsFirstLogin, setIsFirstLogin] = useState(false);

  useEffect(() => {
    if (props.IsFirstLogin === true) {
      setIsFirstLogin(true);
    } else {
      setIsFirstLogin(false);
    }
  }, []);

  return (
    <BrowserRouter>
      {props.IsFirstLogin === true ? (
        <h1>firsty virgin!</h1>
      ) : (
        <div className="home-wrapper">
          <div className="dashboard-header">
            <h2>Dashboard</h2>
            <p>{CompanyData.name}</p>
          </div>
          <div className="flex">
            <div className="small-chart">
              <h2>Company Attrition</h2>
              <SmallPieChart data={CompanyAttrition} />
              <h3>People</h3>
              <div className="chart-info">
                <div className="flex">
                  <div className="yellow-circle"></div>
                  <p> {CompanyAttrition[0].name} </p>
                  <p> {Math.round(CompanyAttrition[0].value)} </p>
                </div>
              </div>
            </div>
            <div className="small-chart">
              <h2>Department Attrition</h2>
              <SmallPieChart data={DeptAttrition} />
              <h3>People</h3>
              <div className="chart-info">
                <div className="flex">
                  <div className="yellow-circle"></div>
                  <p> {DeptAttrition[0].name} </p>
                  <p> {Math.round(DeptAttrition[0].value)} </p>
                </div>
                <div className="flex">
                  <div className="pink-circle"></div>
                  <p> {DeptAttrition[1].name} </p>
                  <p> {Math.round(DeptAttrition[1].value)} </p>
                </div>
                <div className="flex">
                  <div className="blue-circle"></div>
                  <p> {DeptAttrition[2].name} </p>
                  <p> {Math.round(DeptAttrition[2].value)} </p>
                </div>
              </div>
            </div>
          </div>
          <div className="content">
            <div className="flex">
              <div className="inline-block">
                <div className="flex">
                  <h2>Attrition by Age</h2>
                </div>
                <div className="filter">
                  <p>Select the age group:</p>
                  <select className="sinlge-select">
                    <option>18 - 25 years old</option>
                    <option>25 - 30 years old</option>
                    <option>30 - 35 years old</option>
                  </select>
                </div>
              </div>
              <div className="inline-block">
                <div className="flex">
                  <div className="yellow-circle"></div>
                  <p> {DeptAttrition[0].name} </p>
                </div>
                <div className="flex">
                  <div className="pink-circle"></div>
                  <p> {DeptAttrition[1].name} </p>
                </div>
                <div className="flex">
                  <div className="blue-circle"></div>
                  <p> {DeptAttrition[2].name} </p>
                </div>
              </div>
            </div>
            <div className="barchart-wrapper">
              <div className="flex">
                <div>
                  <h3>Age group</h3>
                  <MultiBarChart data={AttritionByAge} />
                </div>
                <h3>people</h3>
              </div>
            </div>
          </div>
          <div className="content job-role">
            <h2>Attrition by Job Role</h2>
            <div className="double-filters">
              <div className="filter">
                <p>Select the department:</p>
                <select className="double-select">
                  {Departments.map((department) => (
                    <option key={department}> {department} </option>
                  ))}
                </select>
              </div>
              <div className="filter">
                <p>Select the age group:</p>
                <select className="double-select">
                  <option>18 - 25 years old</option>
                  <option>25 - 30 years old</option>
                  <option>30 - 35 years old</option>
                </select>
              </div>
            </div>
            <div className="complex-chart">
              <div className="small-pie">
                <SmallPieChart data={AttritionByRole} />
                <h3>People</h3>
              </div>
              <div className="barchart-wrapper">
                <div className="flex">
                  <div>
                    <h3>Age group</h3>
                    <SimpleBarChar data={AttritionByRoleBar} />
                  </div>
                  <h3>people</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </BrowserRouter>
  );
};
export default Home;
