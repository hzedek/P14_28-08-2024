import "./Employees.scss";
import { Grid } from "gridjs-react";
import "gridjs/dist/theme/mermaid.css";
import HumanRessources from "../../../src/data/formdata.json";
import Header from "../../components/Header/Header.jsx";
import { useEffect, useState } from "react";

function Employees() {
   const [tableLength, setTableLength] = useState(5);
   const [localImportedValues, setLocalImportedValues] = useState([]);

   // Ici, on récupère les données LocalStorage pour en faire du JSON
   useEffect(() => {
      console.log("-----1st Import-----");
      for (let i = 0; i < localStorage.length; i++) {
         // console.log(localStorage.getItem("birthDay"));

         // setLocalTest((previousArray) => [...previousArray, "hello+", i]);
         // setLocalTest((previousArray) => [
         //    ...previousArray,
         //    localStorage.key(JSON.parse(i)),
         // ]);
         /////////////
         let currentKey = localStorage.key(i);
         let stockage = localStorage.getItem(currentKey);
         // console.log("stockage", stockage);
         let stockageParse = JSON.parse(stockage);

         setLocalImportedValues((previousArray) => [
            ...previousArray,
            stockageParse,
         ]);
      }
   }, []);
   // console.log("localVariable", localImportedValues);
   console.log("---------");
   localImportedValues.forEach((date) => {
      console.log(date);
      // let dateBrute = data.birthDay;
      // console.log(dateBrute.format("D/MM/YYYY"));
      // console.log(data.birthDay.format("D/MM/YYYY"));
   });
   // localImportedValues.forEach((data) => {
   //    data;
   // });

   // .format("D/MM/YYYY")

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
                  />
               </span>
            </section>
         </main>
      </>
   );
}

export default Employees;
