import "./Employees.scss";
import { Grid } from "gridjs-react";
import "gridjs/dist/theme/mermaid.css";
import HumanRessources from "../../../src/data/formdata.json";
import Header from "../../components/Header/Header.jsx";
import { useState } from "react";

function Employees() {
   const [tableLength, letTableLength] = useState(5);

   return (
      <>
         <Header actualPage={"Home"} />
         <main>
            <section className="WHealth-GridSection">
               <h1 className="WHealth-Title">Employees</h1>
               <span className="employees-grid">
                  <div id="selectTableLength">
                     Show&nbsp;
                     <select
                        id="table-length"
                        onChange={(e) => letTableLength(e.target.value)}
                     >
                        <option value="5">5</option>
                        <option value="10">10</option>
                        <option value="25">25</option>
                        <option value="50">50</option>
                        <option value="100">100</option>
                     </select>
                     &nbsp;entries
                  </div>
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
                     search={true}
                     sort={true}
                     pagination={{
                        limit: tableLength,
                     }}
                  />
               </span>
            </section>
         </main>
      </>
   );
}

export default Employees;
