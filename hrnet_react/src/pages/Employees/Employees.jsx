import "./Employees.scss";
import { Grid } from "gridjs-react";
import "gridjs/dist/theme/mermaid.css";
// import HumanRessources from "../../../public/formdata.json";
import HumanRessources from "../../../src/data/formdata.json";

function Employees() {
   return (
      <>
         <main>
            <div className="Interface">
               <a href="/">Home</a>
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
