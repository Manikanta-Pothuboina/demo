import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { getAllEmployeeTaskAssignAction } from "../redux/EmployeeTaskAssignReducer";

export const EmployeeTaskAssignCheckForm = () => {
  const formEl = useRef();
  const dispatch = useDispatch();
  const history = useHistory();

  const state = useSelector((state) => state);

  const [empid, setEmpid] = useState(0);

  const updateEmpid = (e) => setEmpid(e.target.value);

  const TaskCheckList = (e) => {
    e.preventDefault();

    const isFormValid = formEl.current.checkValidity();
    console.log(isFormValid);

    if (isFormValid) {
      // dispatch the call to redux ::for API CALL
      dispatch(getAllEmployeeTaskAssignAction(empid));
      history.push("/task-assign");

      // clear the form
      // setEmpid("");
    } else {
      e.stopPropagation();
      formEl.current.classList.add("was-validated");
    }
  };

  return (
    <div
      className="bg-transparent d-flex justify-content-center align-items-center "
      style={{ height: "100vh" }}
    >
      <div className="w-50">
        <h2 className="text-center alert alert-info">
          Employee Task Assign Check
        </h2>

        <form ref={formEl} className="needs-validation" noValidate>
          <div>
            <input
              type="number"
              value={empid}
              onChange={updateEmpid}
              placeholder="Enter EmpId"
              className="form-control form-control-lg mb-1"
              required
            />
          </div>

          <div>
            <Link to="/task-assign">
              <input
                type="button"
                value="check "
                onClick={TaskCheckList}
                className="btn btn-info btn-lg w-100"
              />
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};
