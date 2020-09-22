const initialState = {
   medicines: [],
};

//To Store the Actions
const medicine = (state = initialState, action) => {
   switch (action.type) {
      case "GET_MEDICINE":
         return Object.assign({}, state, { medicines: action.payload });
      default:
         return state;
   }
};

export default medicine;
