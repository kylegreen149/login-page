import React, { useState } from "react"
import '../App.css';
import { ReactComponent as PasswordShow} from "../eye-password-show.svg"
import { ReactComponent as PasswordHide} from "../eye-password-hide.svg"

const PasswordInput = ({value, onChange}) => {
    const [showPassword, setShowPassword] = useState(false)

    return (
        <div style={{ position: "relative", display: "inline-block" }}>
        <input
            type={showPassword ? "text" : "password"}
            name="password"
            placeholder="Enter password"
            value={value}
            onChange={onChange}
            style={{ paddingRight: "30px" }}
        />
        <span
            onClick={() => setShowPassword(!showPassword)}
            style={{
            position: "absolute",
            right: "10px",
            top: "50%",
            transform: "translateY(-50%)",
            cursor: "pointer",
            fontSize: "16px"
            }}
        >
            {showPassword ? <PasswordHide className="password-hide" width="16px" height="16px"/> : <PasswordShow className="password-show" width="16px" height="16px"/>}
        </span>
        </div>

    )
}

export default PasswordInput