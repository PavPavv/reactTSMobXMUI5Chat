
import * as Yup from 'yup';

export interface SignUpValues {
  name: string;
  email: string;
  password: string;
};

// login form validation
export const validationRules = Yup.object({
  name: Yup
    .string()
    .min(2, 'Name must be at least 6 characters long')
    .required('Please, enter password'), 
  email: Yup
    .string()
    .email()
    .min(6, 'Email or password must be at least 6 characters long')
    .required('Please, enter login'),
  password: Yup
    .string()
    .min(6, 'Login or password must be at least 6 characters long')
    .required('Please, enter password'),  
});