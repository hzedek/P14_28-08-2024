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
   const newArray = localImportedValues.map((item) => {
      return { ...item, firstName: "Louis" };
   });
   console.log("newArray", newArray);

   // let test123 = localImportedValues.filter((item) => [item][0]);
   // console.log("value", localImportedValues);
   // setLocalImportedValues((localImportedValues[0].lastName = "Louis"));
   // console.log(localImportedValues[0].lastName);

   // localImportedValues.forEach((date) => {
   //    date.firstName. = "Test";
   // });

   // localImportedValues[0].firstName = "test";

   // setLocalImportedValues((previousArray) => [
   //    ...previousArray,
   //    stockageParse,
   // ]);

   ///////////////////////////////////////////////////////////////
   // Ici, on récupère les données LocalStorage pour en faire du JSON
   // useEffect(() => {
   //    console.log("-----1st Import-----");
   //    for (let i = 0; i < localStorage.length; i++) {
   //       setLocalImportedValues((previousArray) => [
   //          ...previousArray,
   //          "hello",
   //          i,
   //       ]);
   //       console.log("LOCALIMPORTED: ", localImportedValues);
   //    }
   // }, [localStorage.length]);
   ///////////////////////////////////////////////////////////////
   ///////////////////////////////////////////////////////////////
   // let currentKey = localStorage.key(i);
   // // console.log(currentKey);
   // let stockage = localStorage.getItem(currentKey);
   // // console.log("stockage", stockage);
   // let stockageParsed = JSON.parse(stockage);
   // console.log(stockageParsed);
   // // setLocalImportedValues((previousArray) => [
   // //    ...previousArray,
   // //    stockageParse,
   // // ]);
   ///////////////////////////////////////////////////////////////

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
