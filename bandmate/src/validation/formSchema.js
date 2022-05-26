import * as yup from 'yup';

const formSchema = yup.object().shape({
  username: yup
    .string()
    .trim()
    .required('You need to have a name')
    .min(2, 'Username must be 2 characters long'),
  email: yup
    .string()
    .email('Must be a valid email')
    .required('Email is required'),
  password: yup
    .string()
    .trim()
    .required('You need to have a password')
    .min(7, 'Password must be 3 characters long'),
  terms: yup
    .boolean()
    .oneOf([true], 'You must to accept the terms')
})

export default formSchema;