
import * as Yup from 'yup';

export interface LoginValues {
  email: string;
  password: string;
};

// login form validation
export const validationRules = Yup.object({
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