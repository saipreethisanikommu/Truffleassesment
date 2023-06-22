import React from 'react';

const Summary = ({ formData, onEdit }) => {
    return (
        <div>
            <h2>Summary</h2>
            <p>Patient Name: {formData.patientName}</p>
            {/* Display other form fields */}

            <button onClick={onEdit}>Edit</button>
        </div>
    );
};

export default Summary;
