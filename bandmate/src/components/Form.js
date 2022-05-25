import React from "react";

export default function BandMateForm(props) {
    const { values, update, submit } = props;

    const onChange = evt => {
        const name = evt.target.name;
        const { value } = evt.target;
        update(name, value);
    }

    const onSubmit = evt => {
        evt.preventDefault();
        submit();
    }

    return(
        <form onSubmit={onSubmit}>
            <label>Fullname:
                <input
                    type='text'
                    name='fullname'
                    placeholder='Type your fullname here...'
                    
                    onChange={onChange}
                />
            </label>
            <label>Email:
                <input
                    type='email'
                    name='email'
                    placeholder='Type your email here...'
                    value={values.email}
                    onChange={onChange}
                />
            </label>
            <label>Password:
                <input
                    type='password'
                    name='password'
                    placeholder='Type your password here...'
                    value={values.password}
                    onChange={onChange}
                />
            </label>
            <label>I accept the Terms of Service:
                <input
                    type='radio'
                    name='terms'
                    value='accepted'
                    onChange={onChange}
                    checked={values.terms === 'accepted'}
                />
            </label>
            <input type='submit' value='submit'></input>
        </form>
    )
}
