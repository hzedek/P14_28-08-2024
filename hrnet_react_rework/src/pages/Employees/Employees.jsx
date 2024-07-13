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
   // Initial Values
   const [finalImport, setFinalImport] = useState();

   useEffect(() => {
      if (finalImport === undefined) {
         masterFiltering();
      }
   }, [finalImport]);

   function masterFiltering() {
      let stockageLocal = [];
      for (let i = 0; i < localStorage.length; i++) {
         let currentKey = localStorage.key(i);
         let stockage = localStorage.getItem(currentKey);
         let stockageParsed = JSON.parse(stockage);
         stockageLocal.push(stockageParsed);
      }
      stockageLocal.forEach((item) => {
         if (item.birthDay) {
            item.birthDay = new Date(item.birthDay).toLocaleDateString();
         }
         if (item.startDay) {
            item.startDay = new Date(item.startDay).toLocaleDateString();
         }
         if (typeof item.department === "object") {
            item.department = item.department.value;
         }
      });
      setFinalImport(stockageLocal);
   }

   const GridExample = () => {
      // Row Data: The data to be displayed
      const [rowData, setRowData] = useState(finalImport);

      // Column Definitions: Defines the columns to be displayed.
      const [colDefs, setColDefs] = useState([
         { headerName: "First Name", field: "firstName" },
         { headerName: "Last Name", field: "lastName" },
         { headerName: "Start Day", field: "startDay" },
         { headerName: "Department", field: "department" },
         { headerName: "Birth Day", field: "birthDay" },
         { headerName: "Street", field: "addressStreet" },
         { headerName: "City", field: "addressCity" },
         { headerName: "State", field: "addressState" },
         { headerName: "Zip Code", field: "addressZipcode" },
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

   return (
      <>
         <Header actualPage={"Home"} />
         <main>
            <section className="WHealth-GridSection">
               <h1 className="WHealth-Title">Employees</h1>
               <span className="employees-grid">
                  <GridExample />
               </span>
            </section>
         </main>
      </>
   );
}

export default Employees;
