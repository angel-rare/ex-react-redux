import { actionTypes } from "../actions/action";

const initialState = {
  value: 10
};

const numReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.INC_NUM:
      return {
        ...state,
        value: state.value + action.step
      };
    case actionTypes.DEC_NUM:
      return {
        ...state,
        value: state.value - action.step
      };
    case actionTypes.RESET_NUM:
      return {
        ...state,
        value: 10
      };
    default:
      return state;
  }
};

export default numReducer;
