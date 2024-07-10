import "./Home.scss";
import Header from "../../components/Header/Header.jsx";
import { useEffect, useState } from "react";
import { states } from "../../data/states.json";
// DATEPICKER
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
// DROPDOWN
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
/////////////////////////////////////////////////////////////////////////////////
// NPM LEWISMODAL : IMPORT
// import Modal, { openModal, closeModal } from "../../components/Modal/Modal";
import Modal, { openModal } from "lewismodal";

/////////////////////////////////////////////////////////////////////////////////
// DEPARTMENT : SETUP
const departmentCategories = [
   "Sales",
   "Marketing",
   "Engineering",
   "Human Resources",
   "Legal",
];
// INITIAL FORM VALUES : SETUP
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
   // INITIAL FORM VALUES
   const [formValues, setFormValues] = useState(initialValues);
   // EDIT FORM VALUES ONCHANGE() FOR EACH INPUT
   const handleInputChange = (e) => {
      e.preventDefault();
      const { name, value } = e.target;
      setFormValues({
         ...formValues,
         [name]: value,
      });
   };
   // ENVOI DU FORMULAIRE VIA SETUP EN LOCALSTORAGE
   const submitForm = () => {
      console.log("FINAL VALUES OF FORM", formValues);
      localStorage.setItem(
         `${formValues.firstName}`,
         JSON.stringify(formValues)
      );
   };
   // LISTE DES ETATS
   // const etatsunisAbbr = states.map((state) => [state.abbreviation]);
   // const etatsunisNoms = states.map((state) => [state.name]);
   const etatsunis = states.map((state, index) => [
      index,
      state.name,
      state.abbreviation,
      // (state.value = index),
      // " - ",
      // state.name,
   ]);

   const [newStatesArray, setNewStatesArray] = useState([]);

   useEffect(() => {
      states.forEach((state, index) => {
         setNewStatesArray((previousArray) => [...previousArray, state]);
         newStatesArray.push([index, state.name, state.abbreviation]);
      });
   }, []);

   console.log(newStatesArray);
   return (
      <>
         <Header actualPage={"View Employees"} />
         <main>
            {/* <Modal
               modalMessage={"Employee Created!"}
               modalBackground={"red"}
               modalFontColor={"white"}
               modalFontSize={64}
            /> */}
            {/*
               *******************************
               *** THIS IS THE LOCAL MODAL ***
               *******************************
               <div id="validationModal">
               <button id="closeValidationModal" onClick={closeModal}></button>
               <div id="confirmation">Employee Created !</div>
               </div>
               *****************************
               *** THIS IS THE NPM MODAL ***
               *****************************
            */}
            <Modal />

            <section className="WHealth-FormSection">
               <h1 className="WHealth-Title">Create Employee</h1>
               <form
                  id="WHealth-Formulaire"
                  onSubmit={(e) => {
                     e.preventDefault(), submitForm(), openModal();
                  }}
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
                     className="HrnetDatePickers"
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
                     className="HrnetDatePickers"
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
                     <label id="streeLabel">Street</label>
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
                        className="HrnetDropdown"
                        options={etatsunis}
                        value={formValues.addressState.name}
                        name="addressState"
                        placeholder={"Select a state..."}
                        required={true}
                        // ICI, ON RECUPERE L'INDEX DE L'ETAT AVANT D'EN PRENDRE SON ABBREVIATION
                        onChange={(state, id) => {
                           console.log(state, "id", id),
                              setFormValues({
                                 ...formValues,
                                 ["addressState"]:
                                    states[state.value[0]].abbreviation,
                              });
                        }}
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
                     className="HrnetDropdown"
                     options={departmentCategories}
                     value={formValues.department}
                     name="department"
                     placeholder={"Select a category..."}
                     required={true}
                     onChange={(department) =>
                        setFormValues({
                           ...formValues,
                           ["department"]: department.value,
                        })
                     }
                  />
                  <div className="btn-div">
                     <button id="save-button">Save</button>
                  </div>
               </form>
            </section>
         </main>
      </>
   );
}

export default Home;
