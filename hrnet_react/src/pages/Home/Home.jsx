import "./Home.scss";

function Home() {
   return (
      <>
         <main>
            <div>
               <h1>HRnet</h1>
            </div>
            <div>
               <a href="/employees">View Current Employees</a>
               <h2>Create Employee</h2>
               <form action="#" id="create-employee">
                  <label>First Name</label>
                  <input type="text" id="first-name" />

                  <label>Last Name</label>
                  <input type="text" id="last-name" />

                  <label>Date of Birth</label>
                  <input id="date-of-birth" type="text" />

                  <label>Start Date</label>
                  <input id="start-date" type="text" />

                  <fieldset>
                     <legend>Address</legend>

                     <label>Street</label>
                     <input id="street" type="text" />

                     <label>City</label>
                     <input id="city" type="text" />

                     <label>State</label>
                     <select id="state"></select>

                     <label>Zip Code</label>
                     <input id="zip-code" type="number" />
                  </fieldset>

                  <label>Department</label>
                  <select id="department">
                     <option>Sales</option>
                     <option>Marketing</option>
                     <option>Engineering</option>
                     <option>Human Resources</option>
                     <option>Legal</option>
                  </select>
               </form>

               <button>Save</button>
            </div>
            <div id="confirmation">Employee Created!</div>
         </main>
      </>
   );
}

export default Home;
