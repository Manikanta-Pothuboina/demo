import {
  applyMiddleware,
  combineReducers,
  createStore,
} from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import { AdminReducer } from "./AdminReducer";
import { EmployeeReducer } from "./EmployeeReducer";
import { EmployeeTaskReducer } from "./EmployeeTaskReducer";
import { AdminTaskTimeExtensionRequestsReducer } from "./AdminTaskTimeExtensionRequestsReducer";
import { EmployeeRequestReducer } from "./EmployeeRequestReducer";
import { UserReducer } from "./UserReducer";
import { BenchReducer } from "./BenchReducer";
import { EmployeeTaskAssignReducer } from "./EmployeeTaskAssignReducer";

const rootReducer = combineReducers({
  admin: AdminReducer,
  user: UserReducer,
  employee: EmployeeReducer,
  employeeTask: EmployeeTaskReducer,
  adminTaskTimeExtensionRequest: AdminTaskTimeExtensionRequestsReducer,
  employeeRequest: EmployeeRequestReducer,
  bench: BenchReducer,
  assign: EmployeeTaskAssignReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));
export { store };

// HOW TO ACCESS THE STORE IN COMPOENNT
// state.employeeList :: when there was only one reducer.
// state.authSuccess :: when there was only one reducer.
// state.employee.employeeList
// state.user.authSuccess
