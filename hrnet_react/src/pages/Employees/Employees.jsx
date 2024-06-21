import "./Employees.scss";
import { useState } from "react";
import { Grid } from "gridjs-react";
import "gridjs/dist/theme/mermaid.css";

function Employees() {
   const row = () => ["louis", "louis@mail.fr"];
   const [data, setData] = useState([row()]);
   const update = () => {
      setData(data.slice(0).concat([row()]));
   };

   return (
      <>
         <main>
            <div id="employee-div">
               <a href="/">Home</a>
               <h1>Current Employees</h1>
               <button
                  onClick={update.bind(this)}
                  className={
                     "py-2 mb-4 px-4 border rounded-md text-white bg-blue-600"
                  }
               >
                  Add record
               </button>

               <Grid
                  data={data}
                  columns={["Name", "Email"]}
                  pagination={{
                     limit: 10,
                  }}
               />
            </div>
         </main>
      </>
   );
}

export default Employees;
