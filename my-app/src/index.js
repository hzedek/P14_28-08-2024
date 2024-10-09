import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import App from "./Page/App";
import EmployeeList from "./Page/employeeList";
import { EmployeeProvider } from "./Componants/EmployeeContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <EmployeeProvider>
      <Router>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/employee-list" element={<EmployeeList />} />
        </Routes>
      </Router>
    </EmployeeProvider>
  </React.StrictMode>
);

