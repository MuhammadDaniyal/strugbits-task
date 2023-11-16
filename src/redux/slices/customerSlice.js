const { createSlice, nanoid, current } = require("@reduxjs/toolkit");

const initialState = {
  customers: JSON.parse(window.localStorage.getItem("customers"))
    ? JSON.parse(window.localStorage.getItem("customers"))
    : [],
};

const customerSlice = createSlice({
  name: "customers",
  initialState,
  reducers: {
    // declare actions in this
    addCustomer: (state, action) => {
      const data = {
        id: nanoid(),
        name: action.payload.customername,
        email: action.payload.email,
      };
      state.customers.push(data);
      localStorage.setItem("customers", JSON.stringify(state.customers));
    },
    editCustomer: (state, action) => {
      let editedList = state.customers.findIndex(
        (item) => item.id === action.payload.id
      );
      console.log(editedList);
      console.log("SATte : ", current(state.customers));
      state.customers[editedList] = {
        id: action.payload.id,
        name: action.payload.customername,
        email: action.payload.email,
      };
      localStorage.setItem("customers", JSON.stringify(state.customers));
    },
    deleteCustomer: (state, action) => {
      console.log(action.payload);
      // console.log("Delete State", current(state.customers));
      const filterCustomers = state.customers.filter(
        (item) => item.id !== action.payload
      );
      state.customers = filterCustomers;
      localStorage.setItem("customers", JSON.stringify(state.customers));
    },
  },
});
export default customerSlice.reducer;
export const { addCustomer, editCustomer, deleteCustomer } =
  customerSlice.actions;
