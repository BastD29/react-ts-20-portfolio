import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducer";
// import { IRootState } from "../models/store/Root";

const store = configureStore({
  reducer: rootReducer,
});

// export type RootStateType = IRootState;
// * we do not need IRootState as RootStateType is inferred from ReturnType<typeof store.getState>
export type RootStateType = ReturnType<typeof store.getState>;
export type AppDispatchType = typeof store.dispatch;

const instance = () => store;

export default instance;
