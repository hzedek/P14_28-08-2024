import React, { useState, useContext } from 'react';
import { EmployeeContext } from './EmployeeContext';
import states from './states';
import '../Styles/styles.css';

function Form() {
  const { dispatch } = useContext(EmployeeContext);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    startDate: '',
    street: '',
    city: '',
    state: '',
    zipCode: '',
    department: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: 'ADD_EMPLOYEE',
      payload: formData,
    });
    setFormData({
      firstName: '',
      lastName: '',
      dateOfBirth: '',
      startDate: '',
      street: '',
      city: '',
      state: '',
      zipCode: '',
      department: '',
    });
  };

  return (
    <div className="container">
      <h2>Create Employee</h2>
      <form id="create-employee" onSubmit={handleSubmit}>
        <label htmlFor="firstName">First Name</label>
        <input
          onChange={handleChange}
          type="text"
          name="firstName"
          id="firstName"
          value={formData.firstName}
        />

        <label htmlFor="lastName">Last Name</label>
        <input
          onChange={handleChange}
          type="text"
          name="lastName"
          id="lastName"
          value={formData.lastName}
        />

        <label htmlFor="dateOfBirth">Date of Birth</label>
        <input
          onChange={handleChange}
          id="dateOfBirth"
          type="date"
          name="dateOfBirth"
          value={formData.dateOfBirth}
        />

        <label htmlFor="startDate">Start Date</label>
        <input
          id="startDate"
          value={formData.startDate}
          name="startDate"
          type="date"
          onChange={handleChange}
        />

        <fieldset className="address">
          <legend>Address</legend>

          <label htmlFor="street">Street</label>
          <input
            id="street"
            name="street"
            type="text"
            value={formData.street}
            onChange={handleChange}
          />

          <label htmlFor="city">City</label>
          <input
            value={formData.city}
            id="city"
            name="city"
            type="text"
            onChange={handleChange}
          />

          <label htmlFor="state">State</label>
          <select name="state" id="state" onChange={handleChange}>
            <option value="">Select a state</option>
            {states.map((state) => (
              <option key={state.abbreviation} value={state.abbreviation}>
                {state.name}
              </option>
            ))}
          </select>

          <label htmlFor="zipCode">Zip Code</label>
          <input
            id="zipCode"
            name="zipCode"
            type="number"
            value={formData.zipCode}
            onChange={handleChange}
          />
        </fieldset>

        <label htmlFor="department">Department</label>
        <select
          value={formData.department}
          name="department"
          id="department"
          onChange={handleChange}
        >
          <option></option>
          <option>Sales</option>
          <option>Marketing</option>
          <option>Engineering</option>
          <option>Human Resources</option>
          <option>Legal</option>
        </select>
        <button type="submit">Save</button>
      </form>
    </div>
  );
}

export default Form;
