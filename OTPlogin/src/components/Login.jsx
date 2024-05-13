import React, { useState, useRef } from "react";

export function Login() {
    const [otp, setOtp] = useState(Array(4).fill(""));


    const handleChange = (value, index) => {
        const val = parseInt(value);
        if (isNaN(val)) return;
        const newOtp = [...otp];
        newOtp[index] = value;
        setOtp(newOtp);

        if (document.getElementById(index+1)) {
            document.getElementById(index+1).focus();
        }

    };

    return (
        <div className="otpContainer">
            <div className="orpInputs">
                {otp.map((data, index) => (
                    <input
                        className="otpInput"
                        type="text"
                        maxLength="1"
                        key={index}
                        id ={index + ""}
                        value = {data ? data : ""}
                        onChange={(e) => {
                            handleChange(e.target.value, index)
                        }}
                    />
                ))}
            </div>
            <button className="loginButton">Login</button>
        </div>
    );
}
