import "./Home.scss";
import { states } from "../../data/states.json";

function Home() {
   const listStates = states;

   return (
      <>
         <main>
            <h1>HRnet</h1>
            <section className="CreateEmployees">
               <a href="/employees">View Current Employees</a>
               <h2>Create Employee</h2>
               <form action="#" id="create-employee">
                  <label htmlFor="first-name">First Name</label>
                  <input type="text" id="first-name" placeholder="Firstname" />

                  <label htmlFor="last-name">Last Name</label>
                  <input type="text" id="last-name" placeholder="Lastname" />

                  <label htmlFor="date-of-birth">Date of Birth</label>
                  <input
                     type="date"
                     id="date-of-birth"
                     min="1924-01-01"
                     max="2006-06-01"
                  />

                  <label htmlFor="start-date">Start Date</label>
                  <input
                     type="date"
                     id="start-date"
                     min="1950-01-01"
                     max="2024-06-01"
                  />

                  <fieldset className="FieldsetAddress">
                     <legend>Address</legend>

                     <label>Street</label>
                     <input id="street" type="text" placeholder="Street Name" />

                     <label>City</label>
                     <input id="city" type="text" placeholder="City Name" />

                     <label>State</label>
                     <select id="state">
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
                     />
                  </fieldset>

                  <label htmlFor="department">Department</label>
                  <select id="department">
                     <option>Sales</option>
                     <option>Marketing</option>
                     <option>Engineering</option>
                     <option>Human Resources</option>
                     <option>Legal</option>
                  </select>
               </form>

               <button id="save-button">Save</button>
            </section>
            <div id="confirmation">Employee Created!</div>
         </main>
      </>
   );
}

export default Home;
