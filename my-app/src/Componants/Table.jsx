import React, { useContext } from 'react';
import { EmployeeContext } from './EmployeeContext';
import { Link } from 'react-router-dom';

function Table() {
  const { employees } = useContext(EmployeeContext);
    console.log(employees);
    
  return (
    <div id="employee-div" className="containerEmployeePage">
      <h1>Current Employees</h1>
      <table className="table">
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Start Date</th>
            <th>Department</th>
            <th>Date of Birth</th>
            <th>Street</th>
            <th>City</th>
            <th>State</th>
            <th>Zip Code</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee, index) => (
            <tr key={index}>
              <td>{employee.firstName}</td>
              <td>{employee.lastName}</td>
              <td>{employee.startDate}</td>
              <td>{employee.department}</td>
              <td>{employee.dateOfBirth}</td>
              <td>{employee.street}</td>
              <td>{employee.city}</td>
              <td>{employee.state}</td>
              <td>{employee.zipCode}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <Link to="/">Home</Link>
    </div>
  );
}

export default Table;
