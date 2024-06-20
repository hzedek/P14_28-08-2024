import "./Home.scss";
import { useState } from "react";
import { states } from "../../data/states.json";
// import Calendar from "../../components/Calendar/Calendar";
// import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

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

const listStates = states;

function Home() {
   const [formValues, setFormValues] = useState(initialValues);

   const handleInputChange = (e) => {
      e.preventDefault();
      const { name, value } = e.target;
      setFormValues({
         ...formValues,
         [name]: value,
      });
      console.log(formValues);
      console.log("value de formvalues", formValues.birthDay);
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
                  // onSubmit={(e) => handleInputChange(e)}
                  onSubmit={(e) =>
                     console.log("FINAL BOSS: ", e.preventDefault(), formValues)
                  }
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
                     // selected={birthDay}
                     // value={formValues.startDay}
                     selected={formValues.birthDay}
                     onSelect={(date) =>
                        setFormValues({
                           ...formValues,
                           ["birthDay"]: date,
                        })
                     }
                     dateFormat="dd/MM/yyyy"
                     name="birthDay"
                  />

                  <label htmlFor="start-date">Start Date</label>

                  <DatePicker
                     type="date"
                     className="HrnetEdits"
                     // selected={startDay}
                     // value={formValues.startDay}
                     selected={formValues.startDay}
                     onSelect={(date) =>
                        setFormValues({
                           ...formValues,
                           ["startDay"]: date,
                        })
                     }
                     dateFormat="dd/MM/yyyy"
                     name="startDay"
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
                     />

                     <label>City</label>
                     <input
                        id="city"
                        type="text"
                        placeholder="City Name"
                        value={formValues.addressCity}
                        onChange={handleInputChange}
                     />

                     <label>State</label>
                     <select
                        id="state"
                        value={formValues.addressState}
                        onChange={handleInputChange}
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
                     />
                  </fieldset>

                  <label htmlFor="department">Department</label>
                  <select
                     id="department"
                     value={formValues.department}
                     onChange={handleInputChange}
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
