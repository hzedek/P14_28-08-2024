import React, { useContext, useState } from 'react';
import { EmployeeContext } from './EmployeeContext';
import { Link } from 'react-router-dom';
import { DataGrid } from '@mui/x-data-grid';

function Table() {
  const { employees } = useContext(EmployeeContext);
  const [searchText, setSearchText] = useState('');

  // Columns definition for DataGrid
  const columns = [
    { field: 'firstName', headerName: 'First Name', width: 150 },
    { field: 'lastName', headerName: 'Last Name', width: 150 },
    { field: 'startDate', headerName: 'Start Date', width: 150 },
    { field: 'department', headerName: 'Department', width: 150 },
    { field: 'dateOfBirth', headerName: 'Date of Birth', width: 150 },
    { field: 'street', headerName: 'Street', width: 150 },
    { field: 'city', headerName: 'City', width: 150 },
    { field: 'state', headerName: 'State', width: 100 },
    { field: 'zipCode', headerName: 'Zip Code', width: 100 }
  ];

  // Filter the employees based on searchText
  const filteredRows = employees.filter((employee) =>
    Object.values(employee).some((value) =>
      value.toString().toLowerCase().includes(searchText.toLowerCase())
    )
  );

  // Map filtered employees to rows for DataGrid
  const rows = filteredRows.map((employee, index) => ({
    id: index, // Each row needs a unique ID
    ...employee
  }));

  return (
    <div id="employee-div" className="containerEmployeePage">
      <h1>Current Employees</h1>

      {/* Search input to filter employees */}
      <input
        type="text"
        placeholder="Search employees..."
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        style={{ marginBottom: '20px', padding: '10px', width: '300px' }}
      />

      {/* DataGrid to display the filtered employees */}
      <div style={{ height: 400, width: '100%' }}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5, 10, 15]}
        />
      </div>

      <Link to="/">Home</Link>
    </div>
  );
}

export default Table;
