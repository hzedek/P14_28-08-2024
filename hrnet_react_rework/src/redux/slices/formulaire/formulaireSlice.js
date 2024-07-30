import { createSlice } from "@reduxjs/toolkit";

// const formulaireSlice = createSlice({
//    name: "formulaire",
//    initialState: {},
//    reducers: {
//       setForm: (currentState, action) => {
//          const newForm = { ...currentState, ...action.payload };
//          console.log("SET FORM: ", newForm);
//          return newForm;
//       },
//       // editPickedDate: (currentState, action) => {
//       //    const editedForm = {...currentState, }
//       // }
//    },
// });
////////////////////////
////////////////////////
//
const initialState = [];
//
const formulaireSlice = createSlice({
   name: "formulaire",
   initialState,
   reducers: {
      // setForm: (state, action) => {
      //    // state.id = action.payload.id;
      // state.firstName = action.payload.firstName;
      // state.lastName = action.payload.lastName;
      // state.birthDay = action.payload.birthDay.toLocaleDateString();
      // state.startDay = action.payload.startDay.toLocaleDateString();
      // state.addressStreet = action.payload.addressStreet;
      // state.addressCity = action.payload.addressCity;
      // state.addressState = action.payload.addressState;
      // state.addressZipcode = action.payload.addressZipcode;
      // state.department = action.payload.department;
      // },
      setForm: (state, action) => {
         // state = initialState;
         let test = action.payload.birthDay;
         console.log("hey", test.toLocalDateString());
         return [...state, action.payload];
      },
      // setForm: (state, action) => {
      //    state.push({
      //       lnglat: action.payload,
      //    });
      // },
   },
});

export default formulaireSlice.reducer;
export const { setForm } = formulaireSlice.actions;
