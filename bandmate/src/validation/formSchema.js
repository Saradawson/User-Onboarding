import * as yup from 'yup';

const formSchema = yup.object().shape({
  fullname: yup
    .string()
    .trim()
    .required('You need to have a name'),
  email: yup
    .string()
    .trim()
    .required('You need to put an email'),
  password: yup
    .string()
    .trim()
    .required('You need to have a password'),
  terms: yup
    .bool()
    .oneOf([true], 'Accept the terms and conditions to continue')
})

export default formSchema;