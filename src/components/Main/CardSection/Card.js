import React from "react";
import "./CardSection.css";
import EditBtnModal from "../../Modals/EditBtnModal";
import DeleteBtnModal from "../../Modals/DeleteBtnModal";

const Card = (info) => {
  return (
    <>
      <div className="cardDetail">
        <img src={info.avatar || "./images/customerImage.png"} alt="picAvatar" />
        <p className="idPara">00{info.id}</p>
        <p className="namePara">
          {info.name ? info.name : `${info.first_name} ${info.last_name}`}
        </p>
        <p className="mailPara">{info.email}</p>
        <div className="cardBtnSection">
          <button
            type="button"
            class=" btn btn-primary btn-editCustomer"
            data-bs-toggle="modal"
            data-bs-target="#editBtnModal"
          >
            EDIT
          </button>
          <button
            type="button"
            class="btn btn-primary btn-deleteCustomer"
            data-bs-toggle="modal"
            data-bs-target="#deleteBtnModal"
          >
            DELETE
          </button>
        </div>
      </div>
      <EditBtnModal id={info?.id} />
      <DeleteBtnModal id={info?.id} />
    </>
  );
};

export default Card;
