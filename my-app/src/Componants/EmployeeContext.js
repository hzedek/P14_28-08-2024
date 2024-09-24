import React, { createContext, useReducer } from 'react';

const initialState = {
  employees: [],
};

// Reducer function to manage state
const employeeReducer = (state, action) => {
  console.log("Action received in reducer:", action); 
  switch (action.type) {
    case 'ADD_EMPLOYEE':
      return {
        ...state,
        employees: [...state.employees, action.payload],
      };
    default:
      return state;
  }
};

// Create context
export const EmployeeContext = createContext();

// Create provider component
export const EmployeeProvider = ({ children }) => {
  const [state, dispatch] = useReducer(employeeReducer, initialState);
console.log("Employees in context:",state.employees);

  return (
    <EmployeeContext.Provider value={{ employees: state.employees, dispatch }}>
      {children}
    </EmployeeContext.Provider>
  );
};
