import React from 'react';
import {ADD_IMAGE, REMOVE_IMAGE} from './Actions';
const initialState = {imageList: []};

function RootReducers(state = initialState, action) {
  switch (action.type) {
    case ADD_IMAGE:
      return {
        ...state,
        imageList: [...state.imageList, action.payload],
      };
    case REMOVE_IMAGE:
      return {
        ...state,
        imageList: state.imageList.filter(item => item !== action.payload),
      };
    default:
      return state;
  }
}

export default RootReducers;
