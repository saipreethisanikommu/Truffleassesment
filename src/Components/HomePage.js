import React, { useState } from 'react';
import Form from './Form';

const HomePage = () => {
    const [showForm, setShowForm] = useState(false);
    const [billList, setBillList] = useState([]);

    const handleFormSubmit = (formData) => {
        setBillList((prevBillList) => [...prevBillList, formData]);
        setShowForm(false);
    };

    const handleAddBill = () => {
        setShowForm(true);
    };

    return (
        <div>
            <h2>Home Page</h2>
            {showForm ? (
                <Form onSubmit={handleFormSubmit} />
            ) : (
                <>
                    <button onClick={handleAddBill}>Add Bill</button>
                    <ul>
                        {billList.map((bill, index) => (
                            <li key={index}>
                                <p>Patient Name: {bill.patientName}</p>
                                <p>Patient Address: {bill.patientAddress}</p>
                                <p>Hospital Name: {bill.hospitalName}</p>
                                <p>Date of Appointment: {bill.dateOfAppointment}</p>
                                <p>Bill Amount: {bill.billAmount}</p>
                                <p>Policy Number: {bill.policyNumber}</p>
                                <p>Doctor's Name: {bill.doctorName}</p> {/* Add doctor's name */}
                                <p>Diagnosis: {bill.diagnosis}</p> {/* Add diagnosis */}
                                <p>Treatment Description: {bill.treatmentDescription}</p> {/* Add treatment description */}
                                {bill.billImage && (
                                    <div>
                                        <h4>Bill Image URL:</h4>
                                        <p>{bill.billImage}</p>
                                    </div>
                                )}
                            </li>
                        ))}
                    </ul>
                </>
            )}
        </div>
    );
};

export default HomePage;
