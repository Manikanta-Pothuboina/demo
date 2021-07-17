import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllEmployeeBenchAction } from "../redux/BenchReducer";
import { AppNav } from "./AppNav";

export const BenchList = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  useEffect(() => {
    dispatch(getAllEmployeeBenchAction());
  }, []);

  return (
    <div>
      <div className="alert alert-secondary mb-0">
        <h3>Bench List</h3>
      </div>

      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th scope="col">bid</th>
            <th scope="col">empStatus</th>
            <th scope="col">empid</th>
          </tr>
        </thead>
        <tbody className="text-light">
          {state.bench.benchList.map((item, index) => (
            <tr key={index}>
              <th scope="row">{item.bid}</th>
              <td>{item.empStatus}</td>

              <td>{item.emp.empid}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
