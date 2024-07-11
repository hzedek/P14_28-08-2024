import "./Employees.scss";
import { Grid } from "gridjs-react";
import "gridjs/dist/theme/mermaid.css";
import HumanRessources from "../../../src/data/formdata.json";
import Header from "../../components/Header/Header.jsx";
import { useEffect, useState } from "react";

function Employees() {
   const [tableLength, setTableLength] = useState(5);
   const [localImportedValues, setLocalImportedValues] = useState([]);
   const [date, setDate] = useState();

   useEffect(() => {
      for (let i = 0; i < localStorage.length; i++) {
         let currentKey = localStorage.key(i);
         let stockage = localStorage.getItem(currentKey);
         let stockageParsed = JSON.parse(stockage);

         setLocalImportedValues((previousArray) => [
            ...previousArray,
            stockageParsed,
         ]);
      }
   }, []);

   function formatDate(item) {
      let newDateFormat = new Date(item);
      let day = newDateFormat.getDate();
      let month = newDateFormat.getMonth();
      let year = newDateFormat.getFullYear();
      let finaleDayFormat = `${day}/${month}/${year}`;
      // console.log(finaleDayFormat);
      return finaleDayFormat;
   }

   const newArray = localImportedValues.map((item) => {
      // newArray.map((item) => {
      //       let newDateFormat = new Date(item.birthDay);
      //       let day = newDateFormat.getDate();
      //       let month = newDateFormat.getMonth();
      //       let year = newDateFormat.getFullYear();
      //       let finaleDayFormat = `${day}/${month}/${year}`;
      //       console.log(finaleDayFormat);
      //    });
      //---------------------

      let birth = "";
      if (item.birthDay) {
         birth = formatDate(item.birthDay);
      }

      let start = "";
      if (item.startDay) {
         // console.log(item.startDay);
         start = formatDate(item.startDay);
      }
      // console.log("start", start123);
      return {
         ...item,
         firstName: "Louis",
         birthDay: birth,
         startDay: start,
      };
   });
   console.log(newArray);

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
                  {/* <Grid
                     // data={HumanRessources}
                     data={localImportedValues}
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
                  /> */}
               </span>
            </section>
         </main>
      </>
   );
}

export default Employees;
