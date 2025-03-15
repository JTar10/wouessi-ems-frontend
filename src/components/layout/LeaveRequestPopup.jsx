import React, { useState } from "react";

import AttachFile from "../../assets/images/AttachFile.jpg";

import Dropdown from "../../components/common/Dropdown";

import "../../styles/components/LeaveRequestPopup.css";



const LeaveRequestPopup = ({ onClose }) => {

  const [formData, setFormData] = useState({

    leaveType: "sick",

    employeeName: "",

    startDate: "",

    endDate: "",

    reason: "",

    file: null,

  });



  const handleChange = (e) => {

    const { name, value } = e.target;

    setFormData({

      ...formData,

      [name]: value,

    });

  };



  const handleDropdownChange = (selectedValue) => {

    setFormData({

      ...formData,

      leaveType: selectedValue,

    });

    console.log("Selected Leave Type:", selectedValue);

  };



  const handleFileChange = (e) => {

    const file = e.target.files[0];

    setFormData({

      ...formData,

      file: file,

    });

  };



  const handleSubmit = (e) => {

    e.preventDefault();

    console.log("Leave Request Submitted:", formData);

    if (formData.file) {

      console.log("File to upload:", formData.file);

    }

    onClose();

  };



  return (

    <div className="popup-overlay">

      <div className="popup-content">

        <form onSubmit={handleSubmit}>

          <div className="form-group">

            <table>

              <tr>

                <td>

                  <h1 style={{ marginTop: "30px", marginRight: "15px" }}>Apply for leave</h1>

                </td>

                <td style={{ width: "100%" }}>

                  <div className="leaveType" style={{ marginTop: "50px" }}>

                    <Dropdown

                      label="Type"

                      options={[

                        { value: "sick", label: "Sick Leave" },

                        { value: "vacation", label: "Vacation Leave" },

                        { value: "personal", label: "Personal Leave" },

                      ]}

                      value={formData.leaveType}

                      onChange={handleDropdownChange}

                    />

                  </div>

                </td>

              </tr>



              <tr>

                <td colSpan="3" style={{ width: "100%" }}>

                  <hr style={{ width: "100%", marginTop: "40px", marginBottom: "30px", opacity: 0.5 }} />

                </td>

              </tr>



              <tr>

                <td colSpan="3" style={{ width: "100%" }}>

                  <div className="form-group" style={{ width: "100%" }}>

                    <label className="field-labels"><b>Employee's name</b></label>

                    <textarea

                      style={{ backgroundColor: "white", resize: "none", height: "1.2em", width: "100%" }}

                      name="employeeName"

                      value={formData.employeeName}

                      onChange={handleChange}

                      required

                    />

                  </div>

                </td>

              </tr>



              <tr>

                <td colSpan="1" style={{ width: "45%" }}>

                  <div className="form-group">

                    <label className="field-labels"><b>Start date</b></label>

                    <input

                      type="date"

                      name="startDate"

                      value={formData.startDate}

                      onChange={handleChange}

                      required

                      style={{ backgroundColor: "white" }}

                    />

                  </div>

                </td>



                <td style={{ width: "10%", textAlign: "center", verticalAlign: "middle" }}>

                  <p style={{ margin: "0 5px" }}>to</p>

                </td>



                <td colSpan="1" style={{ width: "45%" }}>

                  <div className="form-group">

                    <label className="field-labels"><b>End date</b></label>

                    <input

                      type="date"

                      name="endDate"

                      value={formData.endDate}

                      onChange={handleChange}

                      required

                      style={{ backgroundColor: "white" }}

                    />

                  </div>

                </td>

              </tr>



              <tr>

                <td colSpan="3">

                  <div className="form-group" style={{ marginTop: "20px" }}>

                    <textarea

                      placeholder="Reason for leave"

                      name="reason"

                      value={formData.reason}

                      onChange={handleChange}

                      required

                      style={{ backgroundColor: "white", resize: "none", height: "1.2em", width: "100%" }}

                    />

                  </div>

                </td>

              </tr>



              <tr>

                <td>

                  <h4 style={{ marginBottom: "40px" }}>Supporting documents</h4>

                </td>

                <td>

                  <div className="form-group" style={{ width: "200px" }}>

                    <label htmlFor="file-upload" style={{ cursor: "pointer" }}>

                      <img src={AttachFile} alt="Attach File" style={{ width: "116px", height: "32px" }} />

                    </label>

                    <input

                      id="file-upload"

                      type="file"

                      name="file"

                      onChange={handleFileChange}

                      accept=".pdf,.doc,.docx,.jpg,.png"

                      style={{ display: "none" }}

                    />

                  </div>

                </td>

              </tr>



              <tr>

                <td colSpan="3">

                  <div className="form-actions" style={{ textAlign: "right" }}>

                    <button className="close-button" type="button" onClick={onClose}>

                      <b>Close</b>

                    </button>

                    <button className="submit-button" type="submit">

                      Send request

                    </button>

                  </div>

                </td>

              </tr>

            </table>

          </div>

        </form>

      </div>

    </div>

  );

};



export default LeaveRequestPopup;