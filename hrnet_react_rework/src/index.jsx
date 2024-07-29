import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Employees from "./pages/Employees/Employees";
import "./index.scss";
// REDUX Update
// import { configureStore } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";

const store = configureStore();

ReactDOM.createRoot(document.getElementById("root")).render(
   <React.StrictMode>
      <Provider store={store}>
         <Router>
            <Routes>
               <Route path="/" index element={<Home />} />
               <Route path="/employees" index element={<Employees />} />
            </Routes>
         </Router>
      </Provider>
   </React.StrictMode>
);
