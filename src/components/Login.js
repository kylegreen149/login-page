import React, { useState } from "react"

const Login = () => {
    const [formData, setFormData] = useState({"username": "", "password": ""})
    const isDisabled = !formData.username || !formData.password

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name] : e.target.value})
        // console.log(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("Attempted login with:", formData)
    }

    return (
        <>
            <h2>Login Page</h2>
            <form onSubmit={handleSubmit}>
                <label>Username
                    <input type="text" name="username" placeholder="Enter username" value={formData.username} onChange={handleChange}/>
                </label>
                <label>Password
                    <input type="password" name="password" placeholder="Enter password" value={formData.password} onChange={handleChange}/>
                </label>
                <button type="submit" disabled={isDisabled}>Login</button>
            </form>
        </>
    )
}

// Step 1. Create basic JSX (skeleton)
// Step 2. Import useState and incorporate logic

export default Login