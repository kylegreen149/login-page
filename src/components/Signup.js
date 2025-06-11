import React, { useState } from "react"

const Signup = () => {
    const [formData, setFormData] = useState({"email": "", "username": "", "password": ""})
    const isDisabled = !formData.email || !formData.username || !formData.password

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name] : e.target.value})
        // console.log(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("Successfully created account with:", formData)
    }

    return (
        <>
            <h2>Sign-up Page</h2>
            <form onSubmit={handleSubmit}>
                <label>Email
                    <input type="email" name="email" placeholder="Enter email" value={formData.email} onChange={handleChange}/>
                </label>
                <label>Username
                    <input type="text" name="username" placeholder="Enter username" value={formData.username} onChange={handleChange}/>
                </label>
                <label>Password
                    <input type="password" name="password" placeholder="Enter password" value={formData.password} onChange={handleChange}/>
                </label>
                <button type="submit" disabled={isDisabled}>Sign Up</button>
            </form>
        </>

    )
}

export default Signup