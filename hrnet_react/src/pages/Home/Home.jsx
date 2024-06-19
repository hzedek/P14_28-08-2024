import "./Home.scss";
import { useState } from "react";
import { states } from "../../data/states.json";
import Calendar from "../../components/Calendar/Calendar";

function Home() {
   // Liste des Etats
   const listStates = states;

   const [firstName, setFirstName] = useState("");
   const [lastName, setLastName] = useState("");
   const [birthDay, setBirthDay] = useState(null);
   const [startDay, setStartDay] = useState(null);
   const [addressStreet, setAddressStreet] = useState("");
   const [addressCity, setAddressCity] = useState("");
   const [addressState, setAddressState] = useState("");
   const [addressZipcode, setAddressZipcode] = useState("");
   const [department, setDepartment] = useState("");

   const displayData = (e) => {
      e.preventDefault();
      console.log(
         firstName,
         lastName,
         birthDay,
         startDay,
         addressStreet,
         addressCity,
         addressState,
         addressZipcode,
         department
      );
   };

   return (
      <>
         <main>
            <h1>HRnet</h1>
            <section className="CreateEmployees">
               <a href="/employees">View Current Employees</a>
               <h2>Create Employee</h2>
               <form onSubmit={(e) => displayData(e)} id="create-employee">
                  <label htmlFor="first-name">First Name</label>
                  <input
                     type="text"
                     id="first-name"
                     placeholder="Firstname"
                     value={firstName}
                     onChange={(e) => setFirstName(e.target.value)}
                  />

                  <label htmlFor="last-name">Last Name</label>
                  <input
                     type="text"
                     id="last-name"
                     placeholder="Lastname"
                     value={lastName}
                     onChange={(e) => setLastName(e.target.value)}
                  />

                  <label htmlFor="date-of-birth">Date of Birth</label>
                  <Calendar
                     value={birthDay}
                     onChange={(e) => setBirthDay(e.target.value)}
                  />

                  <label htmlFor="start-date">Start Date</label>
                  <Calendar
                     value={startDay}
                     onChange={(e) => setStartDay(e.target.value)}
                  />

                  <fieldset className="FieldsetAddress">
                     <legend>Address</legend>

                     <label>Street</label>
                     <input
                        id="street"
                        type="text"
                        placeholder="Street Name"
                        value={addressStreet}
                        onChange={(e) => setAddressStreet(e.target.value)}
                     />

                     <label>City</label>
                     <input
                        id="city"
                        type="text"
                        placeholder="City Name"
                        value={addressCity}
                        onChange={(e) => setAddressCity(e.target.value)}
                     />

                     <label>State</label>
                     <select
                        id="state"
                        value={addressState}
                        onChange={(e) => setAddressState(e.target.value)}
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
                        value={addressZipcode}
                        onChange={(e) => setAddressZipcode(e.target.value)}
                     />
                  </fieldset>

                  <label htmlFor="department">Department</label>
                  <select
                     id="department"
                     value={department}
                     onChange={(e) => setDepartment(e.target.value)}
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
