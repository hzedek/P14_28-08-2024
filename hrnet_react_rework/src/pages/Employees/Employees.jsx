import "./Employees.scss";
import { Grid } from "gridjs-react";
import "gridjs/dist/theme/mermaid.css";
import HumanRessources from "../../../src/data/formdata.json";
import Header from "../../components/Header/Header.jsx";
import { useEffect, useState } from "react";

function Employees() {
   const [tableLength, setTableLength] = useState(5);
   const [localImportedValues, setLocalImportedValues] = useState([]);

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
      console.log("success");
   };

   useEffect(() => {
      async function init() {
         const data = await initialFunction();
         console.log("data", data);
      }
      init();
   }, []);

   // Function to format Days to "dd/MM/yyyy"
   function formatDate(item) {
      let newDateFormat = new Date(item);
      let day = newDateFormat.getDate();
      let month = newDateFormat.getMonth();
      let year = newDateFormat.getFullYear();
      let finaleDayFormat = `${day}/${month}/${year}`;
      return finaleDayFormat;
   }
   // Final edited version of the
   const newArray = localImportedValues.map((item) => {
      // Format birthday
      let birth = "";
      item.birthDay && (birth = formatDate(item.birthDay));

      // Format starting day
      let start = "";
      item.startDay && (start = formatDate(item.startDay));

      let formatedDepartment = "";
      // typeof item.department === "object"
      //    ? (formatedDepartment = item.department.value)
      //    : (formatedDepartment = item.department);

      if (typeof item.department === "object") {
         formatedDepartment = item.department.value;
      } else {
         formatedDepartment = item.department;
      }

      return {
         ...item,
         firstName: item.firstName,
         lastName: item.lastName,
         startDay: start,
         department: formatedDepartment,
         birthDay: birth,
         street: item.addressStreet,
         city: item.addressCity,
         state: item.addressState,
         zipCode: item.addressZipcode,
      };
   });
   // console.log(newArray);

   //////////////////////////////////////////////////////////////////
   // newArray.map((item) => {
   //    let newDateFormat = new Date(item.birthDay);
   //    let day = newDateFormat.getDate();
   //    let month = newDateFormat.getMonth();
   //    let year = newDateFormat.getFullYear();
   //    let finaleDayFormat = `${day}/${month}/${year}`;
   //    console.log(finaleDayFormat);
   // });
   //////////////////////////////////////////////////////////////////

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
                        onChange={(e) => setTableLength(e.target.value)}
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
                     data={newArray}
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
