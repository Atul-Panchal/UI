import React from 'react';
import './Central.css'
function Central() {
  return (
    <div className="center-body">
      <div className="card-body">
        <h1 className="card-title">WELCOME OLIVIA!</h1>
        <label className="card-text">For Ethical AI Consultancy, answer a few questions to help me understand your query</label>
      <div>
      <button type="button" className="btn btn-warning">Proceed --&gt;</button>
      </div>
      </div>
    </div>
  );
}

export default Central;
