import React, { useState } from "react";

const Problem1 = () => {
  const [show, setShow] = useState("all");
  const [name, setName] = useState("");
  const [status, setStatus] = useState([]);
  const [active, setActive] = useState(false);

  const handleClick = (value) => {
    setShow(value);
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
    setActive(true);
    e.target.reset();
  };

  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <h4 className="text-center text-uppercase mb-5">Problem-1</h4>
        <div className="col-6 ">
          <form
            onSubmit={handleSubmitForm}
            className="row gy-2 gx-3 align-items-center mb-4"
          >
            <div className="col-auto">
              <input
                type="text"
                onChange={(e) => setName(e.target.value)}
                className="form-control"
                placeholder="Name"
              />
            </div>
            <div className="col-auto">
              <input
                onChange={(e) => setStatus(e.target.value)}
                type="text"
                className="form-control"
                placeholder="Status"
              />
            </div>
            <div className="col-auto">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
          </form>
        </div>
        <div className="col-8">
          <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
            <li className="nav-item">
              <button
                className={`nav-link ${show === "all" && "active"}`}
                type="button"
                onClick={() => handleClick("all")}
              >
                All
              </button>
            </li>
            <li className="nav-item" onClick={() => setStatus("Active")}>
              <button
                className={`nav-link ${show === "active" && "active"}`}
                type="button"
                onClick={() => handleClick("active")}
              >
                Active
              </button>
            </li>
            <li className="nav-item" onClick={() => setStatus("Completed")}>
              <button
                className={`nav-link ${show === "completed" && "active"}`}
                type="button"
                onClick={() => handleClick("completed")}
              >
                Completed
              </button>
            </li>
          </ul>
          <div className="tab-content"></div>
          <table className="table table-striped ">
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Status</th>
              </tr>
            </thead>
            <tbody>
              {active ? (
                <tr className="">
                  <td>
                    {show === "active" || show === "completed" ? "" : name}
                  </td>
                  <td>
                    {show === "active" ? `${status} ` : ""}

                    {show === "completed" ? `${status}` : ""}

                    {show === "all" ? status : ""}
                  </td>
                </tr>
              ) : (
                ""
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Problem1;
