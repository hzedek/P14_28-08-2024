import "./Calendar.scss";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const ReactCalendar = () => {
   const [startDate, setStartDate] = useState(new Date());

   return (
      <>
         <DatePicker
            className="HrnetEdits"
            selected={startDate}
            onSelect={(date) => setStartDate(date)}
            dateFormat="dd/MM/yyyy"
         />
      </>
   );
};
export default ReactCalendar;
