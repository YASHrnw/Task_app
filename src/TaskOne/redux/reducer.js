// let initialValue = [];

// const reducer = (state = initialValue, action) => {
//   switch (action.type) {
//     case "Add":
//       return [...state, action.payload]
//     case "Delete":
//       return state.filter((i, index) => index !== action.payload)
//     // case "Edit":
//     //   const { index, newValue } = action.payload
//     //   return state.map((ele, i) => (index === i ? newValue : ele))

//     default:
//       return state
//   }
// }

// export default reducer;



// reducer.js

let initialValue = [];

const reducer = (state = initialValue, action) => {
  switch (action.type) {
    case "Add":
      return [...state, action.payload];
    case "Delete":
      return state.filter((_, index) => index !== action.payload);
    // case "Edit":
    //   const { index , newValue } = action.payload;
    //   return state.map((item, i) => (i === index ? newValue : item)); // Fixed mapping logic
    default:
      return state;
  }
};

export default reducer;
