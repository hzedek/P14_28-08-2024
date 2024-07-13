import "./Employees.scss";
import { Grid } from "gridjs-react";
import "gridjs/dist/theme/mermaid.css";
import HumanRessources from "../../../src/data/formdata.json";
import Header from "../../components/Header/Header.jsx";
import { useEffect, useMemo, useState } from "react";

import { AgGridReact } from "ag-grid-react"; // React Data Grid Component
import "ag-grid-community/styles/ag-grid.css"; // Mandatory CSS required by the Data Grid
import "ag-grid-community/styles/ag-theme-quartz.css"; // Optional Theme applied to the Data Grid

function Employees() {
   const [importedValues, setImportedValues] = useState([]);
   ////////////////////////////////////////////////////////////////////////////////
   useEffect(() => {
      initialFunction();
      // bouclageFinal();
   }, []);
   ////////////////////////////////////////////////////////////////////////////////
   ////////////////////////////////////////////////////////////////////////////////
   // Function Initiale :
   const initialFunction = () => {
      for (let i = 0; i < localStorage.length; i++) {
         let currentKey = localStorage.key(i);
         let stockage = localStorage.getItem(currentKey);
         let stockageParsed = JSON.parse(stockage);
         setImportedValues((previousArray) => [
            ...previousArray,
            stockageParsed,
         ]);
      }
   };
   ////////////////////////////////////////////////////////////////////////////////
   ////////////////////////////////////////////////////////////////////////////////
   const [finalBouclage, setFinalBouclage] = useState();
   // let finalBouclage;
   function bouclageFinal() {
      importedValues.map((item) => {
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
   }
   // setFinalBouclage(bouclageFinal());

   ////////////////////////////////////////////////////////////////////////////////
   // let finalBouclage2 = finalBouclage.map((item) => Object.values(item));
   // console.log(finalBouclage2);
   ////////////////////////////////////////////////////////////////////////////////

   ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
   ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
   const GridExample = () => {
      // Row Data: The data to be displayed.
      const [rowData, setRowData] = useState([
         {
            firstName: "Louis",
            lastName: "MacKevin",
            startDay: "01/01/2025",
            department: "Engineer",
            birthDay: "20/09/2001",
            street: "Rue de la Chancellerie",
            city: "Madrid",
            state: "Alaska",
            zipCode: 54000,
         },
      ]);

      // Column Definitions: Defines the columns to be displayed.
      const [colDefs, setColDefs] = useState([
         { headerName: "First Name", field: "firstName" },
         { headerName: "Last Name", field: "lastName" },
         { headerName: "Start Day", field: "startDay" },
         { headerName: "Department", field: "department" },
         { headerName: "Birth Day", field: "birthDay" },
         { headerName: "Street", field: "street" },
         { headerName: "City", field: "city" },
         { headerName: "State", field: "state" },
         { headerName: "Zip Code", field: "zipCode" },
      ]);

      const paginationPageSizeSelector = useMemo(() => {
         return [5, 10, 25, 50, 100];
      }, []);

      return (
         // wrapping container with theme & size
         <div
            className="ag-theme-quartz" // applying the Data Grid theme
            style={{ height: 500 }} // the Data Grid will fill the size of the parent container
         >
            <AgGridReact
               rowData={rowData}
               columnDefs={colDefs}
               pagination={true}
               paginationPageSize={5}
               paginationPageSizeSelector={paginationPageSizeSelector}
            />
         </div>
      );
   };
   ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
   ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
   return (
      <>
         <Header actualPage={"Home"} />
         <main>
            <section className="WHealth-GridSection">
               <h1 className="WHealth-Title">Employees</h1>
               <span className="employees-grid">
                  <GridExample />
                  {/* <Grid
                     data={HumanRessources}
                     // data={finalBouclage}
                     // data={() => {
                     //    return new Promise((resolve) => {
                     //       setTimeout(() => resolve(finalBouclage), 500);
                     //    });
                     // }}
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
                     pagination={ limit: 2 ,  summary: false }
                     // pagination={true}
                     paginationPageSizeSelector={paginationPageSizeSelector}
                     paginationPageSize={tableLength}
                  /> */}
               </span>
            </section>
         </main>
      </>
   );
}

export default Employees;
