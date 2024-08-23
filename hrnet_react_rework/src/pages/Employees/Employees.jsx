import "./Employees.scss";
// import HumanRessources from "../../../src/data/formdata.json";
import Header from "../../components/Header/Header.jsx";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
// AG-GRID
import { AgGridReact } from "ag-grid-react"; // React Data Grid Component
import "ag-grid-community/styles/ag-grid.css"; // Mandatory CSS required by the Data Grid
import "ag-grid-community/styles/ag-theme-quartz.css"; // Optional Theme applied to the Data Grid
////////////////////////////////////////////////////////////////////////////
// REDUX :
import { useSelector } from "react-redux";
import { getForm } from "../../redux/selectors.js";

function Employees() {
   // Récupération des Data Redux
   const form = useSelector(getForm);

   // Initial Values
   const [finalImport, setFinalImport] = useState();

   // Initial Loading lors de l'accès au tableau
   useEffect(() => {
      if (finalImport === undefined) {
         masterFiltering();
      }
   }, [finalImport]);

   // Function for Data filtering
   function masterFiltering() {
      let stockageLocal = []; // Empty Array

      // Chaque élément du "form" est "pushed" ici dans "stockageLocal"...
      form.forEach((item) => {
         stockageLocal.push(item);
      });
      // ...puis renvoyé à "stockageLocal"
      setFinalImport(stockageLocal);
   }
   /////////////////////////////////////////////////////////////////////////////////
   // SETUP DE AG-GRID : Barre de Recherche Globale
   const gridRef = useRef();
   const onSearchFilterContentChanged = useCallback(() => {
      gridRef.current.api.setGridOption(
         "quickFilterText",
         document.getElementById("filter-text-box").value
      );
   });
   /////////////////////////////////////////////////////////////////////////////////
   // SETUP DE AG-GRID : Elements Primaires
   // PS : Les USESTATES sont attendus comme tels par AG-GRID
   const GridTable = () => {
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

      // Nombre d'éléments par Page du Tableau
      const paginationPageSizeSelector = useMemo(() => {
         return [5, 10, 25, 50, 100];
      }, []);

      // Premier Return : celui du Tableau
      return (
         <div className="aggrid-wrapper">
            <div className="aggrid-search-header">
               <span>Search : </span>
               <input
                  type="text"
                  id="filter-text-box"
                  onInput={onSearchFilterContentChanged}
               />
            </div>
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
                  ref={gridRef}
               />
            </div>
         </div>
      );
   };

   // Return Final, Tableau inclus
   return (
      <>
         <Header actualPage={"Home"} />
         <main>
            <section className="WHealth-GridSection">
               <h1 className="WHealth-Title">Employees</h1>
               <span className="employees-grid">
                  <GridTable />
               </span>
            </section>
         </main>
      </>
   );
}

export default Employees;
