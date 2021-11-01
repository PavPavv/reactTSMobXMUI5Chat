
import * as Yup from 'yup';

export interface ChangePasswordValues {
  password: string;
  confirmPassword: string;
};

// login form validation
export const validationRules = Yup.object({
  password: Yup
    .string()
    .min(6, 'Email or password must be at least 6 characters long')
    .required('Please, enter login'),
  confirmPassword: Yup
    .string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required('Please, enter password'),  
});