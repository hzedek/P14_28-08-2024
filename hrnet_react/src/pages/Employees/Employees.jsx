import "./Employees.scss";
import { Grid } from "gridjs-react";
import "gridjs/dist/theme/mermaid.css";
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
                  onClick={() => (location.href = "/")}
               />
            </div>
            <a id="WHealth-LinkBtn" href="/">
               Home
            </a>
         </header>
         <main>
            <section className="WHealth-GridSection">
               <h1 className="WHealth-Title">Employees</h1>
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
                        limit: 5,
                     }}
                  />
               </span>
            </section>
         </main>
      </>
   );
}

export default Employees;
