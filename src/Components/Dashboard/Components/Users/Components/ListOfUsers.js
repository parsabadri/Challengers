import React, { useState } from "react";
import "../../../../../Assets/Styles/Table.scss";
import "../../../../../Assets/Styles/ListOfUsers.scss";

const ListOfUsers = () => {
  const [Data, setData] = useState([
    {
      name: "Frank Graves (You)",
      role: "Super Admin",
      Email: "frank.graves@gmail.com",
      id: "1",
      isYou: true,
    },
    {
      name: "Scarlet Parry",
      role: "Super Admin",
      Email: "scarlet.parry@gmail.com",
      id: "2",
      isYou: false,
    },
    {
      name: "Jolyon Singleton",
      role: "Admin",
      Email: "jolyon.singleton@gmail.com",
      id: "3",
      isYou: false,
    },
    {
      name: "Casey Bryant",
      role: "Super Admin",
      Email: "casey.bryant@gmail.com",
      id: "4",
      isYou: false,
    },
  ]);
  const [PageCount, setPageCount] = useState(["1", "2", "3"]);

  const handlePage = (page) => {
    console.log(page);
  };

  return (
    <div className="content-wrapper users-list">
      <h1>List of users</h1>
      <div className="content">
        <h2 className="section-title">New User</h2>
        <p className="hint">enter the new user's email address below:</p>
        <input
          placeholder="Email Address"
          className="Email-input"
          type="email"
        />
        <button className="send">Send the Invitation</button>
        <div className="table">
          <section className="table-header flex">
            <p className="small">Name</p>
            <p className="medium">Role</p>
            <p className="xlarge">Email</p>
            <p className="large">Action</p>
          </section>
          {Data.map((item) => (
            <section key={item.id} className="flex note-item">
              <p className="small align-l"> {item.name} </p>

              {item.isYou ? (
                <p> {item.role} </p>
              ) : (
                <select className="roles medium">
                  <option> Admin </option>
                  <option> Super Admin </option>
                </select>
              )}
              {item.isYou ? (
                <p className="xlarge"> {item.Email} </p>
              ) : (
                <p className="xlarge align-l"> {item.Email} </p>
              )}
              {item.isYou ? (
                <div className="actions medium">
                  <button className="small edit-btn single-btn"> Edit </button>
                </div>
              ) : (
                <div className="actions medium">
                  <button className="small edit-btn"> Edit </button>
                  <button className="small edit-btn"> Delete </button>
                </div>
              )}
            </section>
          ))}
        </div>
        <div className="pagination">
          {PageCount.map((page) => (
            <button
              onClick={() => handlePage(page)}
              id={"page-" + page}
              key={page}
            >
              {page}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
export default ListOfUsers;
