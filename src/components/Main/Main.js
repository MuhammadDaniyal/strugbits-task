import React from "react";
import { LuPlus } from "react-icons/lu";
import CardSection from "./CardSection/CardSection";
import AddBtnModal from "../Modals/AddBtnModal";

const Main = () => {
  return (
    <>
      <button
        type="button"
        class="d-flex justify-content-center align-items-center btn btn-primary btn-addCustomer mt-2"
        data-bs-toggle="modal"
        data-bs-target="#addBtnModal"
      >
        <LuPlus className="iconCustomer" />
        <span>ADD NEW CUSTOMER</span>
      </button>
      <CardSection />
      <AddBtnModal />
    </>
  );
};

export default Main;
