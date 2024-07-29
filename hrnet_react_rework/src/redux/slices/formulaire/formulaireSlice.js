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
const initialState = {
   // id: null,
   firstName: "",
   lastName: "",
   birthDay: new Date(),
   startDay: new Date(),
   addressStreet: "",
   addressCity: "",
   addressState: "",
   addressZipcode: "",
   department: "",
};

const formulaireSlice = createSlice({
   name: "formulaire",
   initialState,
   reducers: {
      setForm: (state, action) => {
         // state.id = action.payload.id;
         state.firstName = action.payload.firstName;
         state.lastName = action.payload.lastName;
         state.birthDay = action.payload.birthDay;
         state.startDay = action.payload.startDay;
         state.addressStreet = action.payload.addressStreet;
         state.addressCity = action.payload.addressCity;
         state.addressState = action.payload.addressState;
         state.addressZipcode = action.payload.addressZipcode;
         state.department = action.payload.department;
      },
   },
});

export default formulaireSlice.reducer;
export const { setForm } = formulaireSlice.actions;
