import "./Calendar.scss";
import ReactCalendar from "react-calendar";
import { useState } from "react";

function Calendar() {
   const [date, setDate] = useState(new Date());
   return (
      <>
         <div style={{ backgroundColor: "lightBlue" }}>
            <div className="app">
               <h1 className="text-center">React Calendar</h1>
               <div className="calendar-container">
                  <ReactCalendar onChange={setDate} value={date} />
               </div>
               <p className="text-center">
                  <span className="bold">Selected Date:</span>{" "}
                  {date.toDateString()}
               </p>
            </div>
         </div>
      </>
   );
}

export default Calendar;
