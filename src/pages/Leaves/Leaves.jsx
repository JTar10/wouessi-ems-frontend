import React, { useState } from "react";
import LeaveRequestPopup from "../../components//LeaveRequestPopup/LeaveRequestPopup.jsx";
import "../../styles/pages/Leaves.css";

const Leaves = () => {
  const [showPopup, setShowPopup] = useState(false);

  const handleOpenPopup = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="leaves-page">
      <h1>Leaves</h1>
      <button onClick={handleOpenPopup}>Add leave request</button>
      {showPopup && <LeaveRequestPopup onClose={handleClosePopup} />}
    </div>
  );
};

export default Leaves;