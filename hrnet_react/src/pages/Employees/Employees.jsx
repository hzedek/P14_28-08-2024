import "./Employees.scss";
import { Grid } from "gridjs-react";
import "gridjs/dist/theme/mermaid.css";
// import HumanRessources from "../../../public/formdata.json";
import HumanRessources from "../../../src/data/formdata.json";

function Employees() {
   return (
      <>
         <header id="WHealth-Header">
            <div id="WHealth-Logo-Container_Employees">
               <img
                  id="WHealth-Logo"
                  src="./src/assets/WHealthLogoEdited.png"
                  alt="Logo WealthHealth"
               />
            </div>
            <a id="WHealth-LinkBtn" href="/">
               Home
            </a>
         </header>
         <main>
            <div className="Interface">
               <h1>Employees</h1>
               <span className="employees-grid">
                  <Grid
                     data={HumanRessources}
                     columns={[
                        "First Name",
                        "Last Name",
                        "Start Day",
                        "Department",
                        "Birth Day",
                        "Street",
                        "City",
                        "State",
                        "Zip Code",
                     ]}
                     pagination={{
                        limit: 10,
                     }}
                  />
               </span>
            </div>
         </main>
      </>
   );
}

export default Employees;
