import React, { useState } from "react";
import { IoClose } from "react-icons/io5";
import "./AddBtnModal.css";
import { useDispatch } from "react-redux";
import {  editCustomer } from "../../redux/slices/customerSlice";

const EditBtnModal = ({id}) => {
  const [formData, setFormData] = useState({
    customername: "",
    email: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value, // Update the specific field based on input name
    });
  };

  const dispatch = useDispatch();
  return (
    <>
      <div
        class="modal fade"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        id="editBtnModal"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div
          class="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-md"
          style={{ width: "400px" }}
        >
          <div class="modal-content">
            <div class="modal-header">
              <h2 class="modal-title">Edit Customer</h2>
              <IoClose className="modal-btn-close" data-bs-dismiss="modal" />
            </div>
            <div class="modal-body">
              <div className="container">
                <div className="row">
                  <div className="col-12 col-lg-11 col-md-11 mx-auto">
                    <form
                      method="POST"
                      className="d-flex flex-column"
                      style={{ gap: "20px" }}
                    >
                      <input
                        type="text"
                        name="customername"
                        id="customernameid"
                        placeholder="customer Name"
                        value={formData.customername}
                        onChange={handleInputChange}
                        className="customer-input"
                      />
                      <input
                        type="email"
                        name="email"
                        id="emailid"
                        placeholder="Email"
                        required="true"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="customer-input"
                      />
                      <button
                        type="button"
                        class="addCustomer"
                        data-bs-dismiss="modal"
                        onClick={() =>
                          dispatch(
                            editCustomer({
                              id: id,
                              customername: formData?.customername,
                              email: formData?.email,
                            })
                          )
                        }
                      >
                        EDIT CUSTOMER
                      </button>
                    </form>
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

export default EditBtnModal;
