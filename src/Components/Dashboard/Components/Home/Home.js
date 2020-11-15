import React, { useState, useEffect } from "react";
import "../../../../Assets/Styles/Home.scss";
import SmallPieChart from "./Components/SmallPieChart";
import MultiBarChart from "./Components/MultiBarChart";
import SimpleBarChar from "./Components/SimpleBarChart";
import { BrowserRouter } from "react-router-dom";
import AlertIcon from "../../../../Assets/Images/Icons/InfoSquare.svg";
import axios from "axios";
import { config } from "../../../../config";

const Home = (props) => {
  const [CompanyData, setCompData] = useState({
    name: "The BlaBla Company",
  });
  const [CompanyAttrition, setCompAttrition] = useState({
    summaries: [],
    chart_data: [],
  });
  const [DeptAttrition, setDeptAttrition] = useState({
    summaries: [],
    chart_data: [],
    dataset_1: [],
    dataset_2: [],
    dataset_3: [],
  });
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
    //each of these functions fetch chart data for each section (e.g. Company Attrition, Dept. attrition, etc.)
    getCompAttrition();
    getDeptAttrition();
  }, []);

  const getCompAttrition = () => {
    let req = {
      method: "GET",
      url: config.baseURL + "/rest/allroles/dashboard/companyAttrition",
      headers: {
        Authorization: "Bearer " + window.localStorage.getItem("token"),
      },
    };
    axios(req)
      .then((res) => {
        console.log(res);
        setCompAttrition({
          summaries: res.data.data.summaries,
          chart_data: res.data.data.datas,
        });
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  const getDeptAttrition = () => {
    let req = {
      method: "GET",
      url: config.baseURL + "/rest/allroles/dashboard/departmentsAttrition",
      headers: {
        Authorization: "Bearer " + window.localStorage.getItem("token"),
      },
    };
    axios(req)
      .then((res) => {
        console.log(res);
        setDeptAttrition({
          summaries: res.data.data.summaries,
          chart_data: res.data.data.datas,
          dataset_1: res.data.data.datas[0],
          dataset_2: res.data.data.datas[1],
          dataset_3: res.data.data.datas[2],
        });
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  const goToML = () => {
    document.getElementById("ml-link").click();
  };

  return (
    <BrowserRouter>
      {props.IsFirstLogin === true ? (
        <div className="home-wrapper home-alert-wrapper">
          <div className="dashboard-header">
            <h2>Dashboard</h2>
            <p>{CompanyData.name}</p>
          </div>
          <div className="content">
            <div className="centered-alert">
              <img src={AlertIcon} alt="Alert!" />
              <p className="big-text">
                Not enough data to <br />
                show the charts!
              </p>
              <p className="small-text">
                Please go to the ML Setup Page and
                <br />
                Please go to the ML Setup Page and follow the steps and train
                some attrition data at this point.
              </p>
              <button onClick={() => goToML()}>ML Setup Page</button>
            </div>
          </div>
        </div>
      ) : (
        <div className="home-wrapper">
          <div className="dashboard-header">
            <h2>Dashboard</h2>
            <p>{CompanyData.name}</p>
          </div>
          <div className="flex">
            <div className="small-chart">
              <h2>Company Attrition</h2>
              <SmallPieChart data={CompanyAttrition.chart_data} />
              <h3>People</h3>
              <div className="chart-info">
                {CompanyAttrition.summaries.map((item) => (
                  <div className="flex">
                    <div className="yellow-circle"></div>
                    <p> {item.name} </p>
                    <p> {item.value} </p>
                  </div>
                ))}
              </div>
            </div>
            <div className="small-chart">
              <h2>Department Attrition</h2>
              <SmallPieChart data={DeptAttrition.chart_data} />
              <h3>People</h3>
              <div className="chart-info">
                <div className="flex">
                  <div className="yellow-circle"></div>
                  <p> {DeptAttrition.dataset_2.name} </p>
                  <p> {DeptAttrition.dataset_2.value} </p>
                </div>
                <div className="flex">
                  <div className="pink-circle"></div>
                  <p> {DeptAttrition.dataset_1.name} </p>
                  <p> {DeptAttrition.dataset_1.value} </p>
                </div>
                <div className="flex">
                  <div className="blue-circle"></div>
                  <p> {DeptAttrition.dataset_3.name} </p>
                  <p> {DeptAttrition.dataset_3.value} </p>
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
                  <p> {DeptAttrition.dataset_2.name} </p>
                </div>
                <div className="flex">
                  <div className="pink-circle"></div>
                  <p> {DeptAttrition.dataset_1.name} </p>
                </div>
                <div className="flex">
                  <div className="blue-circle"></div>
                  <p> {DeptAttrition.dataset_3.name} </p>
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
