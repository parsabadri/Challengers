import React, { useState, useEffect } from "react";
import "../../../../Assets/Styles/Home.scss";
import SmallPieChart from "./Components/SmallPieChart";
import MultiBarChart from "./Components/MultiBarChart";
import SimpleBarChar from "./Components/SimpleBarChart";
import { BrowserRouter } from "react-router-dom";
import AlertIcon from "../../../../Assets/Images/Icons/InfoSquare.svg";
import axios from "axios";
import { config } from "../../../../config";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

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
  const [AttritionByRole, setAttrByRole] = useState([]);
  const [Departments, setDepartments] = useState([
    "Sales",
    "Research & Development",
    "Human Resources",
  ]);
  const [JobRoles, setJobRoles] = useState([
    "Marketing",
    "Sales Representative",
    "Sales Manager",
    "Sales Executive",
  ]);
  const [AttritionByAge, setAttrByAge] = useState([]);
  const [AttrByAgeDepts, setAttrByAgeDepts] = useState([]);
  const [FilterAge, setFilterAge] = useState("AGE_18_35_YO");
  const [FilterDept, setFilterDept] = useState("Sales");
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
    getAttritionByAge();
    getAttrByJobRoleDept();
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
        // logging the user out when thier token has expired, this is done here optionally, only because
        // this function runs at every component mount.
        if (err.response.status === 401) {
          logUserOutOnAuthErr();
        }
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
  //this function clicks on the ml setup button on the sidebar
  const goToML = () => {
    document.getElementById("ml-link").click();
  };

  const getAttritionByAge = () => {
    let req = {
      method: "GET",
      url:
        config.baseURL +
        "/rest/allroles/dashboard/attritionByAge?filter=" +
        document.getElementById("attrition-by-age").value,
      headers: {
        Authorization: "Bearer " + window.localStorage.getItem("token"),
      },
    };
    axios(req)
      .then((res) => {
        console.log(res);
        setAttrByAge(res.data.data.datas);
        setAttrByAgeDepts(res.data.data.summaries);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  //this function sets the chosen age range for attrition by job role
  const getAttrByJobRoleAgeChange = () => {
    let req = {
      method: "GET",
      url:
        config.baseURL +
        "/rest/allroles/dashboard/attritionByJobRole?department=" +
        document.getElementById("attrition-by-job-role-department").value +
        "&filter=" +
        document.getElementById("attrition-by-job-role-age").value,
      headers: {
        Authorization: "Bearer " + window.localStorage.getItem("token"),
      },
    };
    axios(req)
      .then((res) => {
        console.log(res);
        setAttrByRole(res.data.data.datas);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getAttritionByJobRolePie = () => {};
  //this function sets the chosen department name for attrition by job role
  const getAttrByJobRoleDept = () => {
    let req = {
      method: "GET",
      url:
        config.baseURL +
        "/rest/allroles/dashboard/attritionByJobRole?department=" +
        document.getElementById("attrition-by-job-role-department").value +
        "&filter=" +
        document.getElementById("attrition-by-job-role-age").value,
      headers: {
        Authorization: "Bearer " + window.localStorage.getItem("token"),
      },
    };
    axios(req)
      .then((res) => {
        console.log(res);
        setAttrByRole(res.data.data.datas);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  // Since the refreshtoken is not implemented due to project scale down, we logout the user
  // After gettin a 401 API response status (unauthorized status) and display an alert so they
  // know they have to log back in. The whole thing happns through this function
  const logUserOutOnAuthErr = () => {
    window.alert("Session expired, please log back in to your account.");
    window.localStorage.clear();
    window.location.assign("/");
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
              {CompanyAttrition.chart_data.length === 0 ? (
                <SkeletonTheme color="#202020" highlightColor="#444">
                  <p>
                    <Skeleton
                      count={1}
                      width={160}
                      height={160}
                      style={{
                        borderRadius: "50%",
                        background: "#f7f7f7",
                        margin: "auto 95px",
                      }}
                    />
                  </p>
                </SkeletonTheme>
              ) : (
                <SmallPieChart data={CompanyAttrition.chart_data} />
              )}
              <h3>People</h3>
              <div className="chart-info">
                {CompanyAttrition.chart_data.length === 0 ? (
                  <div className="flex">
                    <div className="yellow-circle"></div>
                    <Skeleton
                      count={1}
                      height={20}
                      width={250}
                      style={{ display: "block", margin: "auto" }}
                    />
                  </div>
                ) : null}
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
              {DeptAttrition.chart_data.length === 0 ? (
                <SkeletonTheme color="#202020" highlightColor="#444">
                  <p>
                    <Skeleton
                      count={1}
                      width={160}
                      height={160}
                      style={{
                        borderRadius: "50%",
                        background: "#f7f7f7",
                        margin: "auto 95px",
                      }}
                    />
                  </p>
                </SkeletonTheme>
              ) : (
                <SmallPieChart data={DeptAttrition.chart_data} />
              )}
              <h3>People</h3>
              <div className="chart-info">
                {CompanyAttrition.chart_data.length === 0 ? (
                  <div className="flex">
                    <div className="yellow-circle"></div>
                    <Skeleton
                      count={1}
                      height={20}
                      width={250}
                      style={{ display: "block", margin: "auto" }}
                    />
                  </div>
                ) : (
                  <div className="flex">
                    <div className="yellow-circle"></div>
                    <p> {DeptAttrition.dataset_2.name} </p>
                    <p> {DeptAttrition.dataset_2.value} </p>
                  </div>
                )}
                {CompanyAttrition.chart_data.length === 0 ? (
                  <div className="flex">
                    <div className="yellow-circle"></div>
                    <Skeleton
                      count={1}
                      height={20}
                      width={250}
                      style={{ display: "block", margin: "auto" }}
                    />
                  </div>
                ) : (
                  <div className="flex">
                    <div className="pink-circle"></div>
                    <p> {DeptAttrition.dataset_1.name} </p>
                    <p> {DeptAttrition.dataset_1.value} </p>
                  </div>
                )}
                {CompanyAttrition.chart_data.length === 0 ? (
                  <div className="flex">
                    <div className="yellow-circle"></div>
                    <Skeleton
                      count={1}
                      height={20}
                      width={250}
                      style={{ display: "block", margin: "auto" }}
                    />
                  </div>
                ) : (
                  <div className="flex">
                    <div className="blue-circle"></div>
                    <p> {DeptAttrition.dataset_3.name} </p>
                    <p> {DeptAttrition.dataset_3.value} </p>
                  </div>
                )}
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
                  <select
                    onChange={() => getAttritionByAge()}
                    className="sinlge-select"
                    id="attrition-by-age"
                  >
                    <option value="AGE_18_35_YO">18 - 35 years old</option>
                    <option value="AGE_36_50_YO">36 - 50 years old</option>
                    <option value="AGE_GT50_YO"> 50+ years old</option>
                  </select>
                </div>
              </div>
              <div className="inline-block">
                <div className="flex">
                  <div className="yellow-circle"></div>
                  <p> {DeptAttrition.dataset_1.name} </p>
                </div>
                <div className="flex">
                  <div className="pink-circle"></div>
                  <p> {DeptAttrition.dataset_2.name} </p>
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
                <select
                  id="attrition-by-job-role-department"
                  className="double-select"
                  onChange={() => getAttrByJobRoleDept()}
                >
                  {Departments.map((department) => (
                    <option key={department} value={department}>
                      {department}
                    </option>
                  ))}
                </select>
              </div>
              <div className="filter">
                <p>Select the age group:</p>
                <select
                  onChange={() => getAttrByJobRoleAgeChange()}
                  id="attrition-by-job-role-age"
                  className="double-select"
                >
                  <option value="AGE_18_35_YO">18 - 35 years old</option>
                  <option value="AGE_36_50_YO">36 - 50 years old</option>
                  <option value="AGE_GT50_YO"> 50+ years old</option>
                </select>
              </div>
            </div>
            <div className="complex-chart">
              <div className="small-pie">
                {/* since this chart has filters and it can be an empty result, we add a conditional skeleton rendering */}
                {AttritionByRole.length === 0 ? (
                  <SkeletonTheme color="#202020" highlightColor="#444">
                    <p>
                      <Skeleton
                        count={1}
                        width={160}
                        height={160}
                        style={{
                          borderRadius: "50%",
                          background: "#f7f7f7",
                          margin: "auto 95px",
                        }}
                      />
                    </p>
                    <p className="small-info">no data!</p>
                  </SkeletonTheme>
                ) : (
                  <React.Fragment>
                    <SmallPieChart data={AttritionByRole} />
                    <h3>People</h3>
                  </React.Fragment>
                )}
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
