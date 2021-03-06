import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllEmployeeTaskAssignAction } from "../redux/EmployeeTaskAssignReducer";
import { AppNav } from "./AppNav";

export const EmployeeTaskAssign = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  useEffect(() => {
    dispatch(getAllEmployeeTaskAssignAction());
  }, []);

  return (
    <div>
      <div className="alert alert-secondary mb-0">
        <h3>Employee Task Assign</h3>
      </div>

      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th scope="col">Employee ID</th>

            <th scope="col">Task ID</th>
            <th scope="col">Task Name</th>
            <th scope="col">Task Status</th>
            <th scope="col">Project ID</th>
            <th scope="col">Start Date</th>
            <th scope="col">Dead Line</th>
          </tr>
        </thead>
        <tbody className="text-light">
          {state.assign.employeeTaskAssign.map((item, index) => (
            <tr key={index}>
              {item !== undefined && <td>{item.emp.empid}</td>}

              {item !== undefined && <td>{item.taskId}</td>}
              {item !== undefined && <td>{item.taskName}</td>}
              {item !== undefined && <td>{item.taskStatus}</td>}
              {item !== undefined && <td>{item.projectid}</td>}
              {item !== undefined && <td>{item.startDate}</td>}
              {item !== undefined && <td>{item.deadLine}</td>}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
