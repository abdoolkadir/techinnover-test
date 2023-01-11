import axios, { AxiosError } from 'axios';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

import { toast } from 'react-toastify';

import InputField from '../components/InputField';
import SubmitButton from '../components/SubmitButton';
import { useState } from 'react';

// Styling
const LoginForm = styled.form`
  width: 50%;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media screen and (max-width: 768px) {
    width: 80%;
  }
`;

// Save Cookie function
function setCookie(name: string, value: any) {
  // Convert the object to a JSON string
  const jsonValue = JSON.stringify(value);

  // Encode the string to be safe for use as a cookie value
  const encodedValue = encodeURIComponent(jsonValue);

  // Set the cookie
  const expires = '';
  document.cookie = `${name}=${encodedValue};${expires};path=/`;
}

// Types
type UserSubmitForm = {
  email: string;
  password: string;
};

const validationSchema = Yup.object().shape({
  email: Yup.string().required('Email is required').email('Email is invalid'),
  password: Yup.string()
    .required('Password is required')
    .min(6, 'Password must be at least 6 characters')
    .max(40, 'Password must not exceed 40 characters')
});

// Render Function
const LoginPage = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors }
  } = useForm<UserSubmitForm>({
    resolver: yupResolver(validationSchema)
  });

  const onSubmit = async (data: UserSubmitForm) => {
    setIsLoading(true);

    if (data) {
      try {
        const res = await axios({
          method: 'POST',
          url: 'https://auth-test-api-techinnover.herokuapp.com/api/v1/user/login',
          headers: {
            'Content-Type': 'application/json'
          },
          data
        });

        setIsLoading(false);
        setCookie('userId', res.data._id);

        toast.success('Login successful!');
      } catch (error: any) {
        setIsLoading(false);
        if (error.response) {
          toast.error(`Login Failed: ${error.response?.data.message}`);
        } else {
          toast.error(`Login Failed: ${error.message}`);
        }
      }
    }
  };

  return (
    <LoginForm onSubmit={handleSubmit(onSubmit)}>
      <h1>Login</h1>
      <InputField
        label="Email address"
        type="email"
        placeholder="Enter your email address"
        register={{ ...register('email') }}
        error={errors.email?.message}
      />
      <InputField
        label="Password"
        type="password"
        placeholder="Enter your password"
        register={{ ...register('password') }}
        error={errors.password?.message}
      />

      <SubmitButton title={isLoading ? 'loading...' : 'Login'} />
    </LoginForm>
  );
};
export default LoginPage;
