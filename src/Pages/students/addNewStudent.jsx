import React, { useState } from 'react';

function AddNewStudent() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [imageURL, setImageURL] = useState("");
    const [email, setEmail] = useState("");
    const [gpa, setGpa] = useState(0);


    const handleChange = (event) => {
        setFirstName(event.target.value);
        setLastName(event.target.value);
        setImageURL(event.target.value);
        setEmail(event.target.value);
        setGpa(event.target.value);
    };
    
    return (
        <div>
            <h1> Add Student Form </h1>
            <form>
                <label>
                    First Name: 
                    <input type="text" value={firstName} onChange={handleChange} />
                </label>
                <label>
                    Last Name: 
                    <input type="text" value={lastName} onChange={handleChange} />
                </label>
                <label>
                    Image URL: 
                    <input type="text" value={imageURL} onChange={handleChange} />
                </label>
                <label>
                    Email: 
                    <input type="text" value={email} onChange={handleChange} />
                </label>
                <label>
                    GPA: 
                    <input type="number" value={gpa} onChange={handleChange} />
                </label>
            </form>
        </div>
    );
}

export default AddNewStudent;
