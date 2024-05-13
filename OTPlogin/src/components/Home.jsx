import {useNavigate} from "react-router-dom";

export function Home () {
    const navigate = useNavigate();
    const navigateToLogin = () => {
        navigate("/login");
    }
    return (
        <div className= "phoneContainer">
            <input className= "phoneNumber" placeholder="Enter Phone Number"></input>
            <button className= "otpButton" onClick={() => navigateToLogin()}>Send OTP</button>
        </div>
    )
}