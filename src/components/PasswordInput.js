import React, { useState } from "react"
import { ReactComponent as EyeIcon} from "./eye-password-show"
import { ReactComponent as EyeIcon2} from "./eye-password-hide"

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
            right: "5px",
            top: "50%",
            transform: "translateY(-50%)",
            cursor: "pointer",
            }}
        >
            {showPassword ? <EyeIcon2 /> : <EyeIcon />}
        </span>
        </div>

    )
}

export default PasswordInput