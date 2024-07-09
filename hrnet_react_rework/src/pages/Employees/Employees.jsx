import "./Employees.scss";
import { Grid } from "gridjs-react";
import "gridjs/dist/theme/mermaid.css";
import HumanRessources from "../../../src/data/formdata.json";
import Header from "../../components/Header/Header.jsx";

function Employees() {
   return (
      <>
         <Header />
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
                     search={true}
                     sort={true}
                     pagination={{
                        limit: 7,
                     }}
                  />
               </span>
            </section>
         </main>
      </>
   );
}

export default Employees;
