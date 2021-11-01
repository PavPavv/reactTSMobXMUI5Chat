import React from 'react';
import { styled } from '@mui/system';
import Typography from '@mui/material/Typography';

const ErrorMessage = styled(Typography)(({ theme }) => ({
  color: theme.palette.error.main,
}));

type FormErrorMessageprops = {
  children: React.ReactNode;
}

const FormErrorMessage = ({ children }: FormErrorMessageprops): JSX.Element => {
  return (
    <ErrorMessage variant="subtitle1">
      {children}
    </ErrorMessage>
  );  
};

export default FormErrorMessage;