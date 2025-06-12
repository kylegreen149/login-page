import React, { useState } from "react"
import PasswordInput from "./PasswordInput"

const Signup = () => {
    const [formData, setFormData] = useState({"email": "", "username": "", "password": ""})
    const [errors, setErrors] = useState({"email": "", "username": "", "password": ""})
    const isDisabled = !formData.email || !formData.username || !formData.password || errors.email || errors.username || errors.password

    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Standard email pattern
        return emailRegex.test(email);
    }

    const validateUsername = (username) => {
        const usernameRegex = /^[a-zA-Z0-9._]{6,}$/; 
        return usernameRegex.test(username);
    }

    const validatePassword = (password) => {
        const uppercase = password.match(/[A-Z]/g) || [];
        const lowercase = password.match(/[a-z]/g) || [];
        const numbers = password.match(/\d/g) || [];
        const specialChars = password.match(/[@#$%^&*()_+!]/g) || [];

        return (
        password.length >= 8 &&
        uppercase.length >= 2 &&
        lowercase.length >= 2 &&
        numbers.length >= 2 &&
        specialChars.length >= 2
        )
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });

        // Validate Email
        if (name === "email") {
        setErrors({ ...errors, email: validateEmail(value) ? "" : "Invalid email format" });
        }

        // Validate Username

        if (name === "username") {
            setErrors({...errors, username: validateUsername(value) ? "" : "Username must have 6+ characters"})
        }

        // Validate Password
        if (name === "password") {
        setErrors({
            ...errors,
            password: validatePassword(value)
            ? ""
            : "Password must meet complexity requirements (8+ characters, 2+ upper/lowercase letters, 2+ numbers, 2+ special characters)",
        });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault()
        if (errors.email || errors.username || errors.password) {
            console.log("Fix errors before submitting.");
        } else {
            console.log("Successfully created account with:", formData);
        }
    }

    return (
        <>
            <h2>Sign-up Page</h2>
            <form onSubmit={handleSubmit}>
                <label>Email
                    <input type="email" name="email" placeholder="Enter email" value={formData.email} onChange={handleChange}/>
                    {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
                </label>
                <label>Username
                    <input type="text" name="username" placeholder="Enter username" value={formData.username} onChange={handleChange}/>
                    {errors.username && <p style={{ color: "red" }}>{errors.username}</p>}
                </label>
                <label>Password
                    <PasswordInput value={formData.password} onChange={handleChange} />
                    {errors.password && <p style={{ color: "red" }}>{errors.password}</p>}
                </label>
                <button type="submit" disabled={isDisabled}>Sign Up</button>
            </form>
        </>

    )
}

export default Signup