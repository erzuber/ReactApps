import { configureStore } from "@reduxjs/toolkit";

import counterReduser from "./counterStore";
import authReducer from "./authStore";

const store = configureStore({
  reducer: {
    counter: counterReduser,
    auth: authReducer,
  },
});

export default store;
