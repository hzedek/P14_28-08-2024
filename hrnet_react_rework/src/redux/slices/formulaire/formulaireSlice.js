import { createSlice } from "@reduxjs/toolkit";

const initialState = []; // initialState = Array

const formulaireSlice = createSlice({
   name: "formulaire",
   initialState,
   reducers: {
      setForm: (state, action) => {
         /**
          * Le Payload tout juste reçu est édité ici
          * pour formater les dates Birthday et Startday.
          * Après ça, le Payload est renvoyé en ENTIER.
          */
         action.payload = {
            ...action.payload,
            birthDay: action.payload.birthDay.toLocaleDateString(), // Edit format Birthday
            startDay: action.payload.startDay.toLocaleDateString(), // Edit format Startday
         };
         return [...state, action.payload];
      },
   },
});

export default formulaireSlice.reducer;
export const { setForm } = formulaireSlice.actions;
