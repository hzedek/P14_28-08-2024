import "./Employees.scss";
import { Grid } from "gridjs-react";
import "gridjs/dist/theme/mermaid.css";
import HumanRessources from "../../../src/data/formdata.json";
import Header from "../../components/Header/Header.jsx";
import { useEffect, useState } from "react";

function Employees() {
   const [tableLength, setTableLength] = useState(5);
   const [localImportedValues, setLocalImportedValues] = useState([]);
   ////////////////////////////////////////////////////////////////////////////////
   useEffect(() => {
      initialFunction();
   }, []);
   // Function Initiale :
   const initialFunction = () => {
      for (let i = 0; i < localStorage.length; i++) {
         let currentKey = localStorage.key(i);
         let stockage = localStorage.getItem(currentKey);
         let stockageParsed = JSON.parse(stockage);
         setLocalImportedValues((previousArray) => [
            ...previousArray,
            stockageParsed,
         ]);
      }
   };
   console.log(localImportedValues);
   ////////////////////////////////////////////////////////////////////////////////
   let finalBouclage = localImportedValues.map((item) => {
      let birthlocal; // Format birthday
      if (item.birthDay) {
         birthlocal = new Date(item.birthDay).toLocaleDateString();
         // console.log("BIRTH ICI", birthlocal);
      }
      let startlocal; // Format startday
      if (item.startDay) {
         startlocal = new Date(item.startDay).toLocaleDateString();
         // console.log("START ICI", startlocal);
      }

      let formatedDepartment;
      if (typeof item.department === "object") {
         formatedDepartment = item.department.value;
      } else {
         formatedDepartment = item.department;
      }
      return {
         ...item,
         firstName: item.firstName,
         lastName: item.lastName,
         startDay: startlocal,
         department: formatedDepartment,
         birthDay: birthlocal,
         street: item.addressStreet,
         city: item.addressCity,
         state: item.addressState,
         zipCode: item.addressZipcode,
      };
   });

   // console.log("testfinale", finalBouclage);
   ////////////////////////////////////////////////////////////////////////////////
   ////////////////////////////////////////////////////////////////////////////////
   ////////////////////////////////////////////////////////////////////////////////
   ////////////////////////////////////////////////////////////////////////////////
   ////////////////////////////////////////////////////////////////////////////////
   // let finalBouclage2 = finalBouclage.map((item) => Object.values(item));
   // console.log(finalBouclage2);
   ////////////////////////////////////////////////////////////////////////////////
   ////////////////////////////////////////////////////////////////////////////////
   ////////////////////////////////////////////////////////////////////////////////
   ////////////////////////////////////////////////////////////////////////////////
   ////////////////////////////////////////////////////////////////////////////////
   // let firstFloor = finalBouclage[0];
   // console.log(firstFloor);
   ////////////////////////////////////////////////////////////////////////////////
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
                        onSelect={(e) => {
                           console.log(e.target.value);
                           setTableLength(e.target.value);
                        }}
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
                     // data={HumanRessources}
                     // data={finalBouclage}
                     data={() => {
                        return new Promise((resolve) => {
                           setTimeout(() => resolve(finalBouclage), 500);
                        });
                     }}
                     columns={[
                        "First Name",
                        "Last Name",
                        "Birth Day",
                        "Start Day",
                        "Street",
                        "City",
                        "State",
                        "Zip Code",
                        "Department",
                     ]}
                     search={true}
                     sort={true}
                     pagination={
                        (true,
                        {
                           limit: tableLength,
                        })
                     }
                  />
               </span>
            </section>
         </main>
      </>
   );
}

export default Employees;
