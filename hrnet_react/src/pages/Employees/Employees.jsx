import "./Employees.scss";
import { useEffect, useState } from "react";
import { Grid } from "gridjs-react";
import "gridjs/dist/theme/mermaid.css";

function Employees() {
   const row = () => ["louis", "louis@mail.fr"];
   const [data, setData] = useState([row()]);
   const update = () => {
      setData(data.slice(0).concat([row()]));
   };

   const [importedLocal, setImportedLocal] = useState([]);

   useEffect(() => {
      const storage = { ...localStorage };
      // console.log(localStorage.key(index));
      // console.log({ ...localStorage });
      // console.log(storage);
      // setImportedLocal(storage);
      // console.log("imported test", importedLocal);
      setImportedLocal([...importedLocal, storage]);
      console.log(importedLocal);
   }, []);

   for (let i = 0; i < localStorage.length; i++) {
      let result;
      result = JSON.parse(localStorage.getItem(localStorage.key(i)));
      // console.log(localStorage.getItem(localStorage.key(i)));
      if (result.firstName === "Louis") {
         console.log("YESS LOUIS");
      } else {
         console.log("eh bah non pas Louis");
      }
      // console.log(JSON.parse(result));
      console.log(result);
   }

   return (
      <>
         <main>
            <div className="Interface">
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
               <span className="employees-grid">
                  <Grid
                     data={data}
                     columns={[
                        "First Name",
                        "Last Name",
                        "Start Day",
                        "Department",
                        "Date of Birth",
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
