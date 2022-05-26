import React from "react";

export default function BandMateForm(props) {
const { update, submit, errors } = props;
const { username, email, password, terms } = props.values;


    const onChange = evt => {
        const { name, value, checked, type } = evt.target;
        const newValue = type === 'checkbox' ? checked : value;
        update(name, newValue);
    }

    const onSubmit = evt => {
        evt.preventDefault();
        submit();
    }
    

    return(
        <form onSubmit={onSubmit}>
            <p>{errors.username}</p>
            <p>{errors.email}</p>
            <p>{errors.password}</p>
            <p>{errors.terms}</p>
            <label>Name:
                <input
                    type='text'
                    name='username'
                    placeholder='Type your fullname here...'
                    value={username}
                    onChange={onChange}
                />
            </label>
            <label>Email:
                <input
                    type='email'
                    name='email'
                    placeholder='Type your email here...'
                    value={email}
                    onChange={onChange}
                />
            </label>
            <label>Password:
                <input
                    type='password'
                    name='password'
                    placeholder='Type your password here...'
                    value={password}
                    onChange={onChange}
                />
            </label>
            <label>I accept the Terms of Service:
                <input
                    type='checkbox'
                    name='terms'
                    onChange={onChange}
                    checked={terms}
                />
            </label>
            <input type='submit' value='Create a Bandmember Account'></input>
        </form>
    )
}
