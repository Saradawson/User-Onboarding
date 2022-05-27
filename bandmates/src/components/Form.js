import React, { useState, useHistory, useEffect } from 'react';
import axios from 'axios';
import * as yup from 'yup';

const initialFormValues = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    terms: false
}

const RegisterForm = (props) => {
    const formSchema = yup.object().shape({
        firstName: '',
        lastName: '',
        email: yup.toString().min(4, 'email is required'),
        password: '',
        terms: yup.boolean().oneOf([true], 'Please Accept The Terms.')
    })

    const history = useHistory();

    const [form, setForm] = useState(initialFormValues);
    const [disabled, setDisabled] = useState(true);
    const [errors, setErrors] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        terms: false    
    })

    const validateChange = (key, value) => {
        yup.reach(formSchema, key)
            .validate(value)
            .then(() => {
                setErrors({ ...errors, [key]: '' })
            })
            .catch((error) => {
                setErrors({ ...errors, [key]: error.errors[0] })
            })
    }

    const changeHandler = (evt) => {
        const{name, type, checked} = evt.target;
        console.log(name, value, type);
        const value = type === 'checkbox' ? checked : evt.target.value;
        setForm({ ...form, [name]: value})
    }
    const submitHandler = (evt) => {
        evt.preventDefault();
        console.log(form);
        axios.post('https://reqres.in/api/users', form)
        .then(res => {
            console.log(res.data);
            props.addToMyState(res.data);
            setForm(initialFormValues);
            history.push('/users');
        })
    }

    useEffect(()=>{
        console.log(errors)
    }, [errors])

    return(
        <section>
            Register
            <form data-style='form' onSubmit={submitHandler}>
                <label>
                    Email {errors.email}
                    <input 
                    onChange={changeHandler}
                    name='email'
                    type='email'
                    />
                </label>
            </form>
        </section>
    )
}

export default RegisterForm;