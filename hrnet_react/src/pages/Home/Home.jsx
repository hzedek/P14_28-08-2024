/////////////////////////////////////////////////////////////////////////
// import axios from "axios";
import "./Home.scss";
import { useState } from "react";
import { states } from "../../data/states.json";
// DATEPICKER
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
// DROPDOWN
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
/////////////////////////////////////////////////////////////////////////
// import Modal, { openModal, closeModal } from "../../components/Modal/Modal";
/////////////////////////////////////////////////////////////////////////
import Modal, { openModal } from "lewismodal";
//
// DROPDOWN : SETUP
//
const options = states.map((states) => states.name); // const defaultOption = options[0];
/////////////////////////////////////////////////////////////////////////
//
// DEPARTMENT : SETUP
//
const departmentCategories = [
   "Sales",
   "Marketing",
   "Engineering",
   "Human Resources",
   "Legal",
];
/////////////////////////////////////////////////////////////////////////
//
// INITIAL FORM VALUES : SETUP
//
const initialValues = {
   firstName: "",
   lastName: "",
   birthDay: new Date(),
   startDay: new Date(),
   addressStreet: "",
   addressCity: "",
   addressState: "",
   addressZipcode: "",
   department: "",
};

function Home() {
   const [formValues, setFormValues] = useState(initialValues);
   //
   // EDIT FORM VALUES ONCHANGE()
   //
   const handleInputChange = (e) => {
      e.preventDefault();
      const { name, value } = e.target;
      setFormValues({
         ...formValues,
         [name]: value,
      });
   };
   //
   // ENVOI DU FORMULAIRE + SETUP LOCALSTORAGE
   //
   const submitForm = () => {
      console.log("FINAL VALUES OF FORM", formValues);
      localStorage.setItem(
         `${formValues.firstName}`,
         JSON.stringify(formValues)
      );
   };
   ///////////////////////////////////////////////////////////////////////////
   // MODAL
   //
   // function openModal() {
   //    document.getElementById("validationModal").style.display = "block";
   // }
   // function closeModal() {
   //    document.getElementById("validationModal").style.display = "none";
   // }

   return (
      <>
         <main>
            {/* <div id="validationModal">
               <button id="closeValidationModal" onClick={closeModal}></button>
               <div id="confirmation">Employee Created !</div>
            </div> */}
            <Modal />
            <div className="Interface">
               <a href="/employees">View Current Employees</a>
               <h1>HRnet</h1>
               <section className="CreateEmployees">
                  <h2 className="CreateEmployeeTitle">Create Employee</h2>
                  <form
                     onSubmit={(e) => {
                        e.preventDefault(), submitForm(), openModal();
                     }}
                     id="create-employee"
                  >
                     {/* ----- FIRST NAME ----- */}
                     <label htmlFor="first-name">First Name</label>
                     <input
                        type="text"
                        id="first-name"
                        placeholder="Firstname"
                        value={formValues.firstName}
                        onChange={handleInputChange}
                        name="firstName"
                        required={true}
                     />
                     {/* ----- LAST NAME ----- */}
                     <label htmlFor="last-name">Last Name</label>
                     <input
                        type="text"
                        id="last-name"
                        placeholder="Lastname"
                        value={formValues.lastName}
                        onChange={handleInputChange}
                        name="lastName"
                        required={true}
                     />
                     {/* ----- BIRTH DAY ----- */}
                     <label htmlFor="date-of-birth">Date of Birth</label>
                     <DatePicker
                        type="date"
                        className="HrnetEdits"
                        selected={formValues.birthDay}
                        onSelect={(date) =>
                           setFormValues({
                              ...formValues,
                              ["birthDay"]: date,
                           })
                        }
                        dateFormat="dd/MM/yyyy"
                        format="dd-MM-y"
                        name="birthDay"
                        showMonthDropdown
                        showYearDropdown
                        dropdownMode="select"
                        maxDetail="year"
                     />
                     {/* ----- START DATE ----- */}
                     <label htmlFor="start-date">Start Date</label>
                     <DatePicker
                        type="date"
                        className="HrnetEdits"
                        selected={formValues.startDay}
                        onSelect={(date) =>
                           setFormValues({
                              ...formValues,
                              ["startDay"]: date,
                           })
                        }
                        dateFormat="dd/MM/yyyy"
                        format="dd-MM-y"
                        name="startDay"
                        showMonthDropdown
                        showYearDropdown
                        dropdownMode="select"
                        maxDetail="year"
                     />
                     {/* --------------- FIELDSET PART --------------- */}
                     <fieldset className="FieldsetAddress">
                        <legend>Address</legend>
                        {/* ----- STREET ----- */}
                        <label>Street</label>
                        <input
                           id="street"
                           type="text"
                           placeholder="Street Name"
                           value={formValues.addressStreet}
                           onChange={handleInputChange}
                           name="addressStreet"
                           required={true}
                        />
                        {/* ----- CITY ----- */}
                        <label>City</label>
                        <input
                           id="city"
                           type="text"
                           placeholder="City Name"
                           value={formValues.addressCity}
                           onChange={handleInputChange}
                           name="addressCity"
                           required={true}
                        />
                        {/* ----- STATE ----- */}
                        <label>State</label>
                        <Dropdown
                           options={options}
                           value={formValues.addressState}
                           name="addressState"
                           placeholder={"Select a state..."}
                           required={true}
                           onChange={(state) =>
                              setFormValues({
                                 ...formValues,
                                 ["addressState"]: state,
                              })
                           }
                        />
                        {/* ----- ZIP CODE ----- */}
                        <label>Zip Code</label>
                        <input
                           id="zip-code"
                           type="number"
                           placeholder="Zip Code Number"
                           min="1"
                           max="99999"
                           value={formValues.addressZipcode}
                           onChange={handleInputChange}
                           name="addressZipcode"
                           required={true}
                        />
                     </fieldset>
                     {/* ----- DEPARTMENT ----- */}
                     <label htmlFor="department">Department</label>
                     <Dropdown
                        options={departmentCategories}
                        value={formValues.department}
                        name="department"
                        placeholder={"Select a category..."}
                        required={true}
                        onChange={(department) =>
                           setFormValues({
                              ...formValues,
                              ["department"]: department,
                           })
                        }
                     />
                     <div className="btn-div">
                        <button id="save-button">Save</button>
                     </div>
                  </form>
               </section>
            </div>
         </main>
      </>
   );
}

export default Home;
