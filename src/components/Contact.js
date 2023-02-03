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
        setInputs(values => ({ ...values, [name]: value }))
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


}
