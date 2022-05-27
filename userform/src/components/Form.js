import React, { useState, useEffect } from 'react';

const Form = ((props) => {
    const {values, handlerChange} = props;

    useEffect(() => {
        console.log(values)
    }, [values])

    return(
        <form>
           <h3>Create User</h3>
           <label>
               First Name
               <input 
                    name='first_name'
                    type='text'
                    values={values.text}
                    onChange={handlerChange}
                    placeholder='Enter first name'   
               />
           </label>
           <label>
               Last Name
               <input 
                    name='last_name'
                    type='text'
                    // values={values.text}
                    // onChange={handlerChange}
                    placeholder='Enter last name'   
               />
           </label>
           <label>
               Email
               <input 
                    name='email'
                    type='email'
                    // values={values.email}
                    // onChange={handlerChange}
                    placeholder='Enter email'   
               />
           </label>
           <label>
               Password
               <input 
                    name='password'
                    type='password'
                    // values={values.password}
                    // onChange={handlerChange}
                    placeholder='Enter password'   
               />
           </label>
           <label>
               Terms of Service
               <input 
                    name='accepted'
                    type='checkbox'
                    // values={values.checkbox}
                    // onChange={handlerChange}   
               />
           </label>
           <button name='submit' type='submit'>
               Submit 
           </button>
        </form>
    )
})

export default Form;