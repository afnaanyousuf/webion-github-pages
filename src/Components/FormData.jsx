import React, { useState } from 'react';
import Footer from './Footer';

const Formdata = () => {
    const [formData, setFormData] = useState({
        name: "",
        role: "",
        email: "",
        phone: "",
        course: "",
        status: ""
    });

    const [entries, setEntries] = useState([]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setEntries([...entries, formData]);
        setFormData({ name: "", role: "", email: "", phone: "", course: "", status: "" });
    };

    const handleDelete = (index) => {
        const updatedEntries = entries.filter((_, i) => i !== index);
        setEntries(updatedEntries);
    };

    return (
        <div style={{ padding: "20px", color: "#c8ff0d" }}>
            <h2 className='formdata-header'>Fill This Form</h2>
            <div className="form">
                <div className="container">
                    <div className="form-wrapper">
                        <form onSubmit={handleSubmit}>
                            <div className="row">
                                <div className="col-md-6">
                                    <label>Name:</label>
                                    <input type="text" name="name" placeholder='Enter your Name' value={formData.name} onChange={handleChange} />
                                </div>
                                <div className="col-md-6">
                                    <label>Role:</label>
                                    <input type="text" name="role" placeholder='Enter your Role' value={formData.role} onChange={handleChange} />
                                </div>
                                <div className="col-md-6">
                                    <label>Email:</label>
                                    <input type="email" name="email" placeholder='Enter your email' value={formData.email} onChange={handleChange} />
                                </div>
                                <div className="col-md-6">
                                    <label>Phone Number:</label>
                                    <input type="text" name="phone" placeholder='Enter your phone no' value={formData.phone} onChange={handleChange} />
                                </div>
                                <div className="col-md-6">
                                    <label>Course:</label>
                                    <select name="course" value={formData.course} onChange={handleChange}>
                                        <option value="">Select a Course</option>
                                        <option value="UI/UX Designing">UI/UX Designing</option>
                                        <option value="JavaScript Fundamentals">JavaScript Fundamentals</option>
                                        <option value="React Basics">React Basics</option>
                                        <option value="Advanced CSS">Advanced CSS</option>
                                        <option value="Backend Development">Backend Development</option>
                                    </select>
                                </div>
                                <div className="col-md-6">
                                    <label>Status:</label>
                                    <select name="status" value={formData.status} onChange={handleChange}>
                                        <option value="">Select Status</option>
                                        <option value="Placed">Placed</option>
                                        <option value="Unplaced">Unplaced</option>
                                    </select>
                                </div>
                            </div>
                            <button type="submit" className='form-submit'>Submit</button>
                        </form>
                        
                        <h2 className='submit-data'>Submitted Forms</h2>
                        <div className="container">
                            <div className="row">
                                {entries.map((entry, index) => (
                                    <div key={index} className="col-md-4 col-sm-12">
                                        <div style={{ border: "1px solid greenyellow", padding: "10px", margin: "10px 5px", fontSize: "20px" }}>
                                            <p><strong>Name:</strong> {entry.name}</p>
                                            <p><strong>Role:</strong> {entry.role}</p>
                                            <p><strong>Email:</strong> {entry.email}</p>
                                            <p><strong>Phone:</strong> {entry.phone}</p>
                                            <p><strong>Course:</strong> {entry.course}</p>
                                            <p><strong>Status:</strong> {entry.status}</p>
                                            <button 
                                                onClick={() => handleDelete(index)} 
                                                style={{ background: "red", padding: "10px", borderRadius: "10px", color: "#000000", marginTop: "5px", width:"100%" }}>
                                                Delete
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Formdata;
