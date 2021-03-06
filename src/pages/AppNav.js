import { Nav, Navbar } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { updateRenderAction } from "../redux/EmployeeReducer";
import { signOutAction } from "../redux/UserReducer";

export const AppNav = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const signOut = () => {
    // Logical Operation.
    // cookies / sessino are getting removed from the browser
    dispatch(signOutAction());

    // redirect the user to login page.
    history.push("/");
  };

  const clearEmployeeURef = () => {
    dispatch(updateRenderAction({}));
    history.push("/employee-add");
  };

  const clearEmployeeTaskURef = () => {
    dispatch(updateRenderAction({}));
    history.push("/employee-task-add");
  };
  const clearEmployeeRequestURef = () => {
    dispatch(updateRenderAction({}));
    history.push("/employee-request-add");
  };

  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Brand href="#home">TMS APP</Navbar.Brand>

      <Navbar.Toggle aria-controls="basic-navbar-nav" />

      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link as={Link} to="/admin-list">
            Admin List
          </Nav.Link>
          <Nav.Link as={Link} to="/bench-list">
            Bench List
          </Nav.Link>

          <Nav.Link as={Link} to="/task-assign">
            Employee Task Assign
          </Nav.Link>

          <Nav.Link as={Link} to="/employee-list">
            Employee List
          </Nav.Link>
          <Nav.Link onClick={clearEmployeeURef}>Employee Add</Nav.Link>

          <Nav.Link as={Link} to="/employee-task-list">
            Employee Task List
          </Nav.Link>
          <Nav.Link onClick={clearEmployeeTaskURef}>Employee Task Add</Nav.Link>
          <Nav.Link as={Link} to="/employee-request-list">
            Employee Time Extension Request List
          </Nav.Link>
          <Nav.Link onClick={clearEmployeeRequestURef}>
            Employee Request Add
          </Nav.Link>
          <Nav.Link as={Link} to="/employee-status-checklist">
            Employee Status Check List
          </Nav.Link>
          <Nav.Link as={Link} to="/employee-status-checkform">
            Employee Status Check Form
          </Nav.Link>
          <Nav.Link as={Link} to="/employee-task-assign-checkform">
            Employee Task Assign Check Form
          </Nav.Link>
          <Nav.Link onClick={signOut}>Sign Out</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
