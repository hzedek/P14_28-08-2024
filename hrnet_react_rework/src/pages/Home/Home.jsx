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
// NPM LEWISMODAL
import LewisModal, { openModal } from "lewismodal";
// ------------------------------------------------
// LOCAL LEWISMODAL
// import LewisModal, {
//    openModal,
// } from "../../../../../LewisModal/src/components/Modal.jsx";
////////////////////////////////////////////////////////////////////////////
import { useSelector, useDispatch } from "react-redux";
import { getForm } from "../../redux/selectors.js";
import { setForm } from "../../redux/slices/formulaire/formulaireSlice.js";

function Home() {
   // Setup SELECTOR du form

   // console.log("form test", form);

   /**
    * USESELECTOR : Un simple "fetch" de data
    *
    * USEDISPATCH : Applique la fonction
    * 1) const dispatch = useDispatch();
    * 2) dispatch(setForm(xx));
    */
   const dispatch = useDispatch();

   /////////////////////////////////////////////////////////////////////////
   // DEPARTMENTS : catégories de métiers
   const departmentCategories = [
      "Sales",
      "Marketing",
      "Engineering",
      "Human Resources",
      "Legal",
   ];
   /////////////////////////////////////////////////////////////////////////
   // INITIAL FORM VALUES : valeurs des champs du formulaire
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
   /////////////////////////////////////////////////////////////////////////
   // FORM VALUES : valeurs ajoutées au formulaire
   const [formValues, setFormValues] = useState(initialValues);
   /////////////////////////////////////////////////////////////////////////
   // EDIT FORM VALUES ONCHANGE() : à chaque edit d'un champ, met à jour le formulaire
   const handleInputChange = (e) => {
      e.preventDefault();
      // Attributs + Update des valeurs visées dans le formulaire
      const { name, value } = e.target;
      setFormValues({
         ...formValues,
         [name]: value,
      });
   };
   /////////////////////////////////////////////////////////////////////////
   // LISTING DES ETATS : 2 catégories, Nom + Abbréviation
   const etatsunisNameOnly = states.map((state) => [[state.name]]);
   const etatsunisAbbrOnly = states.map((state) => [[state.abbreviation]]);
   // ETAT CHOISI DANS LA LISTE :
   const [selectedState, setSelectedState] = useState(); // Valeur du CHOIX dans la liste
   const [stateName, setStateName] = useState(); // Valeur du champ "VALUE" par le useState ci-dessus ^
   // REFRESH DU CHOIX D'ETAT
   useEffect(() => {
      // console.log("update of SelectedState: ", selectedState);
      return setStateName(selectedState);
   }, []);
   /////////////////////////////////////////////////////////////////////////
   /////////////////////////////////////////////////////////////////////////
   // ENVOI DU FORMULAIRE VIA SETUP EN LOCALSTORAGE
   const [localValue, setLocalValue] = useState(localStorage.length);
   const submitForm = () => {
      setLocalValue(localValue + 1);
      // localStorage.setItem(
      //    `Form Result n°${localValue}`,
      //    JSON.stringify(formValues)
      // );
      dispatch(setForm(formValues));
      console.log("---FINAL FORM---", formValues);
   };

   return (
      <>
         <Header actualPage={"View Employees"} />
         <main>
            {/* NPM LEWISMODAL */}
            {/* <LewisModal /> */}
            {/* ------------------------- */}
            {/* ------------------------- */}
            {/* ------------------------- */}
            {/* NPM LEWISMODAL CUSTOMIZED */}
            <LewisModal
               modalMessage={"Fiche Client Réalisée !"}
               modalFontSize={60}
               modalFontColor={"white"}
               modalWidth={50}
               modalHeight={50}
               modalTextAreaBgColor={"darkgreen"}
               mBlue={100}
               mGreen={50}
               mRed={200}
               mOpacity={66}
            />

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
                     onChange={(date) => {
                        setFormValues({
                           ...formValues,
                           ["birthDay"]: date,
                        });
                        console.log("BIRTH", date);
                     }}
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
                     onChange={(date) => {
                        setFormValues({
                           ...formValues,
                           ["startDay"]: date,
                        });
                        console.log("START", date);
                     }}
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
                        options={etatsunisNameOnly}
                        value={stateName}
                        name="addressState"
                        placeholder={"Select a state..."}
                        required={true}
                        // ICI, ON RECUPERE L'INDEX DE L'ETAT AVANT D'EN PRENDRE SON ABBREVIATION
                        onChange={(state) => {
                           // Index Value
                           let index = etatsunisNameOnly.indexOf(state.value);
                           // STATE NAME:
                           setSelectedState(state.value[0]);
                           // STATE NAME ABBREVIATION : Value added to <FORM/> !
                           setFormValues({
                              ...formValues,
                              ["addressState"]: etatsunisAbbrOnly[index][0], // ABBREVIATION OF STATE'S NAME
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
