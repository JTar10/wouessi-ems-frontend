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
            <div> {/*table*/}
              <div style={{display: "flex"}}> {/*row*/}
                <div>
                  <h1 style={{ marginTop: "30px", marginRight: "15px" }}>Apply for Leave</h1>
                </div>
                <div className="leaveType" style={{ marginTop: "50px", width: "100%" }}>
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
                <div>
                  
                </div>
              </div> {/*row*/}
                <div>
                  <hr style={{width: "100%", marginTop: "20px", marginBottom: "30px", marginLeft: "5px", opacity: 0.25 }} />
                </div>
              <div> {/*row*/}
                <div className="form-group" style={{ width: "100%" }}>
                  <label className="field-labels"><b>Employee's Name</b></label>
                  <textarea
                    style={{ backgroundColor: "white", resize: "none", height: "1.2em", width: "100%" }}
                    name="employeeName"
                    value={formData.employeeName}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div > 
              <div style={{display: "flex"}}> {/*row*/}
                <div className="form-group" style={{ width: "40%" }}>
                  <label className="field-labels"><b>Start Date</b></label>
                  <input
                    type="date"
                    name="startDate"
                    value={formData.startDate}
                    onChange={handleChange}
                    required
                    style={{ backgroundColor: "white" }}
                  />
                </div>
                <div style={{ width: "20%", textAlign: "center", verticalAlign: "middle" }}>
                  <p style={{ marginTop: "30px", marginLeft: "18px" }}>to</p>
                </div>
                <div className="form-group" style={{ width: "40%" }}>
                  <label className="field-labels"><b>End Date</b></label>
                  <input
                    type="date"
                    name="endDate"
                    value={formData.endDate}
                    onChange={handleChange}
                    required
                    style={{ backgroundColor: "white" }}
                  />
                </div>
              </div>
              <div> {/*row*/}
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
              </div>
              <div style={{display: "flex"}}> {/*row*/}
                <div>
                  <h4 style={{ marginBottom: "30px" }}>Supporting Documents</h4>
                </div>
                <div className="form-group" style={{ width: "200px", marginTop: "15px", marginLeft: "10px" }}>
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
              </div>
              <div className="form-actions" style={{display: "flex", justifyContent: "right", width: "100%"}}> {/*row*/}
                <div>
                  <button className="close-button" type="button" onClick={onClose} >
                    <b>Close</b>
                  </button>
                  <button className="submit-button" style={{marginLeft: "20px"}}>
                    Send Request
                  </button>
                </div>
              </div>
            </div> {/*table end*/}
          </div>
        </form>
      </div>
    </div>
  );
};

export default LeaveRequestPopup;