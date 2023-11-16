import React from "react";
import { IoClose } from "react-icons/io5";
import "./AddBtnModal.css";
import { useDispatch } from "react-redux";
import { deleteCustomer } from "../../redux/slices/customerSlice";

const DeleteBtnModal = ({ id }) => {

  console.log("dlt btn comp",id);
  const dispatch = useDispatch();
  return (
    <>
      <div
        class="modal fade"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        id="deleteBtnModal"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div
          class="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-md"
          style={{ width: "400px" }}
        >
          <div class="modal-content">
            <div style={{ textAlign: "right", padding: "20px 20px 0px 0px" }}>
              <IoClose
                className="modal-btn-close modal-btn-close-dlt"
                data-bs-dismiss="modal"
              />
            </div>
            <div class="modal-body">
              <div className="container">
                <div className="row">
                  <div className="col-12 col-lg-11 col-md-11 mx-auto">
                    <div className="dltModalContent">
                      <img src={"./images/deleteicon.png"} alt="dltPhoto" />
                      <h3>Are you sure?</h3>
                      <p>
                        Do you really want to delete this customer? This process
                        can not be undone.
                      </p>
                    </div>
                    <div className="dltBtnSection">
                      <button
                        type="button"
                        class=" btn btn-primary btn-cancelDlt"
                        data-bs-dismiss="modal"
                      >
                        CANCEL
                      </button>
                      <button
                        type="button"
                        class="btn btn-primary btn-deleteBtn"
                        data-bs-dismiss="modal"
                        onClick={()=> dispatch(deleteCustomer(id))}
                      >
                        DELETE
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DeleteBtnModal;
