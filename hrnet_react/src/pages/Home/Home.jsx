import "./Home.scss";
import axios from "axios";
import { useState } from "react";
import { states } from "../../data/states.json";
// import Calendar from "../../components/Calendar/Calendar";
// import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

/////////////////////////////////////////////////////////////////////////
// INITIAL VALUES OF FORM
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
// LIST OF STATES (ASKED IN FORM)
const listStates = states;
/////////////////////////////////////////////////////////////////////////

function Home() {
   const [formValues, setFormValues] = useState(initialValues);

   const handleInputChange = (e) => {
      e.preventDefault();
      const { name, value } = e.target;
      setFormValues({
         ...formValues,
         [name]: value,
      });
      // console.log(formValues);
   };

   const submitForm = () => {
      // e.preventDefault();
      console.log("FINAL VALUES OF FORM", formValues);
      // await axios
      //    .post(URL, {
      //       prenom: formValues.firstName,
      //       nom: formValues.lastName,
      //    })
      //    .then((res) => {
      //       console.log(res.data);
      //    });
      // console.log("testJson", JSON.stringify(testJson));
      axios
         .get("formdata.json")
         .then((res) => console.log(res.data))
         .catch((err) => console.log(err));
   };

   return (
      <>
         <main>
            <h1>HRnet</h1>
            <section className="CreateEmployees">
               <a href="/employees">View Current Employees</a>
               <h2>Create Employee</h2>
               <form
                  /**
                   * ICI, ON VA INSERER LA MODAL LORS DE L'ENVOI DU FORMULAIRE
                   */
                  onSubmit={(e) => {
                     e.preventDefault(),
                        // console.log("FINAL BOSS: ", formValues);
                        submitForm();
                  }}
                  id="create-employee"
               >
                  <label htmlFor="first-name">First Name</label>
                  <input
                     type="text"
                     id="first-name"
                     placeholder="Firstname"
                     value={formValues.firstName}
                     onChange={handleInputChange}
                     name="firstName"
                  />

                  <label htmlFor="last-name">Last Name</label>
                  <input
                     type="text"
                     id="last-name"
                     placeholder="Lastname"
                     value={formValues.lastName}
                     onChange={handleInputChange}
                     name="lastName"
                  />

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
                     name="birthDay"
                     showMonthDropdown
                     showYearDropdown
                     dropdownMode="select"
                  />

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
                     name="startDay"
                     showMonthDropdown
                     showYearDropdown
                     dropdownMode="select"
                  />

                  <fieldset className="FieldsetAddress">
                     <legend>Address</legend>
                     <label>Street</label>
                     <input
                        id="street"
                        type="text"
                        placeholder="Street Name"
                        value={formValues.addressStreet}
                        onChange={handleInputChange}
                        name="addressStreet"
                     />

                     <label>City</label>
                     <input
                        id="city"
                        type="text"
                        placeholder="City Name"
                        value={formValues.addressCity}
                        onChange={handleInputChange}
                        name="addressCity"
                     />

                     <label>State</label>
                     <select
                        id="state"
                        value={formValues.addressState}
                        onChange={handleInputChange}
                        name="addressState"
                     >
                        {listStates.map((state, index) => {
                           return (
                              <option value={index} key={index}>
                                 {state.name}
                              </option>
                           );
                        })}
                     </select>

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
                     />
                  </fieldset>

                  <label htmlFor="department">Department</label>
                  <select
                     id="department"
                     value={formValues.department}
                     onChange={handleInputChange}
                     name="department"
                  >
                     <option>Sales</option>
                     <option>Marketing</option>
                     <option>Engineering</option>
                     <option>Human Resources</option>
                     <option>Legal</option>
                  </select>
                  <div className="btn-div">
                     <button id="save-button">Save</button>
                  </div>
               </form>
            </section>
            <div id="confirmation">Employee Created!</div>
         </main>
      </>
   );
}

export default Home;
