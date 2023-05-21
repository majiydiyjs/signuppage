import { ATM_PIN } from "../actyionType";
const initialState = {
  username: "",
};

const myreducers = (state = initialState, action) => {
  if (action.type == ATM_PIN) {
    return {
      ...state,
      ...action.payload,
    };
  } else {
    return state;
  }
};
export default myreducers;
