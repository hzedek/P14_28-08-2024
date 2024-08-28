import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Footer from "./Componants/Footer";
// import Error404 from "./Pages/404";
import App from "./App";
import EmployeeList from "./Page/employeeList";





const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/employee-list" element={<EmployeeList />} />
        {/* <Route path="*" element={<Error404 />} /> */}
      </Routes>
    </Router>
  </React.StrictMode>
);

// const footer = ReactDOM.createRoot(document.getElementById("footer"));
// footer.render(
//   <React.StrictMode>
//     <Footer />
//   </React.StrictMode>
// );
