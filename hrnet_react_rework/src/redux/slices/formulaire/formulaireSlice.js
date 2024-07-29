import { createSlice } from "@reduxjs/toolkit";

const formulaireSlice = createSlice({
   name: "formulaire",
   initialState: {},
   reducers: {
      setForm: (currentState, action) => {
         const newForm = { ...currentState, ...action.payload };
         console.log("SET FORM: ", newForm);
         return newForm;
      },
   },
});

export default formulaireSlice.reducer;
export const { setForm } = formulaireSlice.actions;
