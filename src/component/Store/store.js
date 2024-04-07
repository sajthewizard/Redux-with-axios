import { applyMiddleware, createStore } from "redux";
import { fetchReducer } from "../reducer/fetchReducer";
import thunk from 'redux-thunk'







export const store=createStore(fetchReducer,applyMiddleware(thunk))