import { createStore } from "redux";
import RootReducers from "./RootReducers";

export const store = createStore(RootReducers);