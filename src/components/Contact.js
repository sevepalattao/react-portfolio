import React, { useState } from "react";
import { validateEmail } from "../utils/helpers";

export default function Contact() {
    const [inputs, setInputs] = useState({});
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        if (e.target.name === 'email') {
            const emailCheck = validateEmail(e.target.value);
            if (!emailCheck) {
                setError("Your email is invalid");
            } else {
                setError('');
            }
        } else {
            if (!e.target.value.length) {
                setError(`${e.target.name} is required`);
            } else {
                setError('');
            }
        }

        if (!error) {
            setInputs(values => ({ ...values, [name]: value }));
        }
    }

    return (
        <section className="sections contact">
            <h2>Contact Me</h2>
            <form className="contact-form" onSubmit={handleSubmit}>
                <div>
                <input type='text' placeholder='Name' value={inputs.name} name='Name'
                className="contact-name" onBlur={handleChange}></input>
                </div>
                <div>
                <input type='text' placeholder='Email' value={inputs.email} name='Email'
                className="contact-email" onBlur={handleChange}></input>
                </div>
                <div>
                <textarea type='text' rows='5' placeholder='Message' value={inputs.message} name='Message'
                className="contact-message" onBlur={handleChange}></textarea>
                </div>
                    <div>
                        <p className="error">{error}</p>
                    </div>
                <button type='submit'>Submit</button>
            </form>

        </section>
    )
}
