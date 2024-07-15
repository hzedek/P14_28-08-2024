import "./Employees.scss";
// import HumanRessources from "../../../src/data/formdata.json";
import Header from "../../components/Header/Header.jsx";
import { useEffect, useMemo, useState } from "react";
// AG-GRID
import { AgGridReact } from "ag-grid-react"; // React Data Grid Component
import "ag-grid-community/styles/ag-grid.css"; // Mandatory CSS required by the Data Grid
import "ag-grid-community/styles/ag-theme-quartz.css"; // Optional Theme applied to the Data Grid

//

function Employees() {
   // Initial Values
   const [finalImport, setFinalImport] = useState();

   useEffect(() => {
      if (finalImport === undefined) {
         masterFiltering();
      }
   }, [finalImport]);

   // Function for Data filtering
   function masterFiltering() {
      // Push Data from localStorage to this Array
      let stockageLocal = [];
      for (let i = 0; i < localStorage.length; i++) {
         let currentKey = localStorage.key(i);
         let stockage = localStorage.getItem(currentKey);
         let stockageParsed = JSON.parse(stockage);
         stockageLocal.push(stockageParsed);
      }
      // Edit birthDay & startDay format of values + Choose department correct format
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
   /////////////

   /////////////////////////////////////////////////////////////////////////////////
   /////////////////////////////////////////////////////////////////////////////////
   const GridExample = () => {
      // Row Data: The data to be displayed
      const [rowData, setRowData] = useState(finalImport);

      // Column Definitions: Defines the columns to be displayed.
      const [colDefs, setColDefs] = useState([
         { headerName: "First Name", field: "firstName", flex: 1 },
         { headerName: "Last Name", field: "lastName", flex: 1 },
         { headerName: "Start Day", field: "startDay", flex: 1 },
         { headerName: "Department", field: "department", flex: 1 },
         { headerName: "Birth Day", field: "birthDay", flex: 1 },
         { headerName: "Street", field: "addressStreet", flex: 1 },
         { headerName: "City", field: "addressCity", flex: 1 },
         { headerName: "State", field: "addressState", flex: 1 },
         { headerName: "Zip Code", field: "addressZipcode", flex: 1 },
      ]);

      const paginationPageSizeSelector = useMemo(() => {
         return [5, 10, 25, 50, 100];
      }, []);

      return (
         <div
            className="ag-theme-quartz" // Data Grid theme
            style={{ height: 500 }} // Data Grid size of parent container
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
   /////////////////////////////////////////////////////////////////////////////////
   /////////////////////////////////////////////////////////////////////////////////

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
