import "./Employees.scss";
// import HumanRessources from "../../../src/data/formdata.json";
import Header from "../../components/Header/Header.jsx";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
// AG-GRID
import { AgGridReact } from "ag-grid-react"; // React Data Grid Component
import "ag-grid-community/styles/ag-grid.css"; // Mandatory CSS required by the Data Grid
import "ag-grid-community/styles/ag-theme-quartz.css"; // Optional Theme applied to the Data Grid
////////////////////////////////////////////////////////////////////////////
import { useSelector, useDispatch } from "react-redux";
import { getForm } from "../../redux/selectors.js";
import { setForm } from "../../redux/slices/formulaire/formulaireSlice.js";
//
import moment from "moment";

function Employees() {
   const form = useSelector(getForm);

   // Initial Values
   const [finalImport, setFinalImport] = useState();

   // Loading Initial Values
   useEffect(() => {
      if (finalImport === undefined) {
         masterFiltering();
      }
   }, [finalImport]);

   // Function for Data filtering
   function masterFiltering() {
      // Push Data from localStorage to this Array
      let stockageLocal = [];
      // console.log("form brut", console.log(form.birthDay));
      // console.log("test birth", form);

      // console.log("localstorage", stockageLocal[0]);

      form.forEach((item) => {
         let test = new Date();
         console.log("moment", moment(test).format("DD/MM/YYYY"));
         if (item.birthDay) {
            item.birthDay = moment(item.birthDay).format("DD-MM-YYYY");
            // console.log(item.birthDay);
            // item.birthDay = new Date(item.birthDay).toLocaleDateString();
            // let edited = new Date("fr-FR");
            // edited = new Date(item.birthDay).toLocaleDateString();
            // item.birthDay = edited;
            // console.log("OUIIII : Birthday", edited);
            // stockageLocal.push(item.birthDay);
            // let editedDate = item.birthDay.toLocaleDateString()
            // stockageLocal
            // item.birthDay = new Date(item.birthDay).toLocaleDateString();
         }
         // if (item.startDay) {
         //    // console.log(item.startDay);
         //    // item.startDay = new Date(item.startDay).toLocaleDateString();
         //    // let edited2 = new Date("fr-FR");
         //    // edited2 = new Date(item.startDay).toLocaleDateString();
         //    // item.birthDay = edited2;
         //    // console.log("OUIIII : Start", edited2);
         //    // stockageLocal.push(item.startDay);
         //    // item.startDay = new Date(item.startDay).toLocaleDateString();
         // }
         if (typeof item.department === "object") {
            item.department = item.department.value;
         }
         stockageLocal.push(item);
      });

      // stockageLocal.push(form);

      // for (let i = 0; i < form.length; i++) {
      //    let currentKey = form.key(i);
      //    let stockage = form.getItem(currentKey);
      //    let stockageParsed = JSON.parse(stockage);
      //    stockageLocal.push(stockageParsed);
      // }
      // // Edit birthDay & startDay format of values + Choose department correct format
      ////////////////////////////////////////////////////////////////////////////////////
      // stockageLocal.forEach((item) => {
      //    if (item.birthDay) {
      //       let edited = new Date("fr-FR");
      //       edited = new Date(item.birthDay).toLocaleDateString();
      //       item.birthDay = edited;
      //       console.log("OUIIII : Birthday", edited);
      //    }
      //    if (item.startDay) {
      //       let edited2 = new Date("fr-FR");
      //       edited2 = new Date(item.startDay).toLocaleDateString();
      //       item.birthDay = edited2;
      //       console.log("OUIIII : Start", edited2);
      //    }
      //    if (typeof item.department === "object") {
      //       item.department = item.department.value;
      //    }
      //    // console.log("item", item.birthDay);
      // });
      // console.log("birthday", stockageLocal[0].birthDay);
      // console.log(form);
      setFinalImport(stockageLocal);
      // let stockageLocal = [];
      // console.log("form", form);
   }
   /////////////////////////////////////////////////////////////////////////////////
   const gridRef = useRef();
   const onSearchFilterContentChanged = useCallback(() => {
      gridRef.current.api.setGridOption(
         "quickFilterText",
         document.getElementById("filter-text-box").value
      );
   });

   /////////////////////////////////////////////////////////////////////////////////
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

      const paginationPageSizeSelector = useMemo(() => {
         return [5, 10, 25, 50, 100];
      }, []);

      return (
         <div className="aggrid-wrapper">
            <div className="aggrid-search-header">
               <span>Search : </span>
               <input
                  type="text"
                  id="filter-text-box"
                  // placeholder="Filter..."
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
   /////////////////////////////////////////////////////////////////////////////////
   /////////////////////////////////////////////////////////////////////////////////

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
