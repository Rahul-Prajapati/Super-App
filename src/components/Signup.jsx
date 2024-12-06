import { useState } from "react";
import { useNavigate } from "react-router-dom";
import './Signup.css';

const Signup = () => {

    const [formDetails, setFormDetails] = useState({
        name: '',
        username: '',
        email: '',
        mobile: '',
        termsAndConditions: false,
    })

    const [error, setError] = useState({
        name: false,
        username: false,
        email: false,
        mobile: false,
        termsAndConditions: false,
    })

    const [errorMessage, setErrorMessage] = useState({
        name: 'Name is required.',
        username: 'Username must be at least 5 characters long.',
        email: 'Enter a valid email address.',
        mobile: 'Enter a valid 10-digit mobile number.',
        termsAndConditions: 'Checked This Box if you want to proceed'
    });

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const { name, email, mobile, username, termsAndConditions } = formDetails;
        let hasError = false;
        setError({
            name: false,
            email: false,
            mobile: false,
            userName: false,
            termsAndConditions: false,
        })

        if (!name.trim()) {
            hasError = true;
            setError((prevState) => { return { ...prevState, name: true } })
        }

        if (!username.trim() || username.length < 5) {
            hasError = true;
            setError((prevState) => { return { ...prevState, username: true } })
        }

        if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            hasError = true;
            setError((prevState) => { return { ...prevState, email: true } })
        }

        if (!mobile.trim() || !/^\d{10}$/.test(mobile)) {
            hasError = true;
            setError((prevState) => { return { ...prevState, mobile: true } })
        }

        if (!termsAndConditions) {
            hasError = true;
            setError((prevState) => { return { ...prevState, termsAndConditions: true } })
        }

        if (hasError) {
            return;
        }
        localStorage.setItem("user", JSON.stringify(formDetails));
        navigate("/movies");
    }

    return (
        <div className="Container" >

            <h1 className="Header" > Super app</h1>

            <h5 className="SubHeading" >Create your new account</h5>

            <div className="miniContainer" >

                <form
                    className="Form"
                    onSubmit={handleSubmit} >

                    <div className="Inputcredential">

                        <input
                            type="text"
                            placeholder="Name"
                            value={formDetails.name}
                            onChange={(e) => setFormDetails({ ...formDetails, name: e.target.value })}
                        />

                        {error.name && <span className="danger">{errorMessage.name}</span>}

                        <input
                            type="text"
                            placeholder="username"
                            value={formDetails.username}
                            onChange={(e) => setFormDetails({ ...formDetails, username: e.target.value })}
                        />

                        {error.username && <span className="danger">{errorMessage.username}</span>}

                        <input
                            type="text"
                            placeholder="Email"
                            value={formDetails.email}
                            onChange={(e) => setFormDetails({ ...formDetails, email: e.target.value })}
                        />

                        {error.email && <span className="danger">{errorMessage.email}</span>}

                        <input
                            type="text"
                            placeholder="Mobile"
                            value={formDetails.mobile}
                            onChange={(e) => setFormDetails({ ...formDetails, mobile: e.target.value })}
                        />

                        {error.mobile && <span className="danger">{errorMessage.mobile}</span>}

                    </div>

                    <div className="CheckboxDiv">

                        <input
                            id="checkbox"
                            type="checkbox"
                            checked={formDetails.termsAndConditions}
                            onChange={(e) => setFormDetails({ ...formDetails, termsAndConditions: e.target.checked })}
                        />
                        <label htmlFor="checkbox">Share my registration data with Superapp</label>

                    </div>

                    {error.termsAndConditions && <span className="danger">{errorMessage.termsAndConditions}</span>}

                    <div className="button-bg">
                        <button>SIGN UP</button>
                    </div>

                </form>

                <p className="termsAndConditions instruct" >By clicking on Sign up. you agree to Superapp <span>Terms and Conditions of Use</span></p>

                <p className="privacyPolicy instruct"  >To learn more about how Superapp collects, uses, shares and protects your personal data please head Superapp <span>Privacy Policy</span></p>

            </div>

        </div >
    )
}

export default Signup