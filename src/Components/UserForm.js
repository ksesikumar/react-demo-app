import React, { useState } from "react";

function UserForm() {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`form submitted with data: ${JSON.stringify(formData)}`);

    };


    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Name:</label>
                <input type="text" name="name" value={formData.name} onChange={handleChange} />
            </div>

            <div>
                <label>Email:</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} />
            </div>

            <div>
                <label>Message:</label>
                <textarea name="message" value={formData.message} onChange={handleChange} />
            </div>

            <div>
                <button type="submit">Submit</button>
            </div>

        </form>

    );
}

export default UserForm;