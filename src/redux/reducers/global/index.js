const initialState = {
   categories: [],
   packages: [],
   packageTypes: [],
   racks: [],
   medicine: [],
   companies: [],
   payments: [],
};

//To Store the Actions
const global = (state = initialState, action) => {
   switch (action.type) {
      case "CATEGORY":
         return Object.assign({}, state, { categories: action.payload });
      case "PACKAGE":
         return Object.assign({}, state, { packages: action.payload });
      case "RACK":
         return Object.assign({}, state, { racks: action.payload });
      case "PACKAGETYPE":
         return Object.assign({}, state, { packageTypes: action.payload });
      case "COMPANIES":
         return Object.assign({}, state, { companies: action.payload });
      case "PAYMENTS":
         return Object.assign({}, state, { payments: action.payload });
      case "GET_MEDICINE":
         return Object.assign({}, state, { medicine: action.payload });
      default:
         return state;
   }
};

export default global;
