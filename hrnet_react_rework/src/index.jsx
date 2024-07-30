import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Employees from "./pages/Employees/Employees";
import "./index.scss";
// REDUX SETUP
import { Provider } from "react-redux";
import { store, persistor } from "./redux/store.js";
import { PersistGate } from "redux-persist/integration/react";

ReactDOM.createRoot(document.getElementById("root")).render(
   <React.StrictMode>
      <Provider store={store}>
         <PersistGate persistor={persistor}>
            <Router>
               <Routes>
                  <Route path="/" index element={<Home />} />
                  <Route path="/employees" index element={<Employees />} />
               </Routes>
            </Router>
         </PersistGate>
      </Provider>
   </React.StrictMode>
);
