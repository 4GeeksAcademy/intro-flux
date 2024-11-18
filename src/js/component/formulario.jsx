import React, { useState } from "react";


export const Formulario = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    const [credentials, setCredentials] = useState([])

    const handleEmailChange = e => {
        setEmail(e.target.value)
    }
    const handlePasswordChange = e => {
        setPassword(e.target.value)
    }

    const handleSubmit = e => {
        e.preventDefault();
        setCredentials([...credentials, {email, password}])
    }


    return (
        <form onSubmit={handleSubmit}>
            <input type="email" value={email} onChange={handleEmailChange} />
            <input type="password" value={password} onChange={handlePasswordChange} />
            <input type="submit" value={'login'} />
        </form>
    )

}