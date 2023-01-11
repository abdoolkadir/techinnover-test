import axios, { AxiosError } from 'axios';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

import { toast } from 'react-toastify';

import InputField from '../components/InputField';
import DropdownSelect from '../components/DropdownSelect';
import SubmitButton from '../components/SubmitButton';
import { useState } from 'react';

// Styling
const SignUpForm = styled.form`
  width: 50%;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media screen and (max-width: 768px) {
    width: 80%;
  }
`;

// Types

type UserSubmitForm = {
  fullName: string;
  email: string;
  password: string;
  userType: string;
};

const validationSchema = Yup.object().shape({
  fullName: Yup.string().required('Fullname is required'),
  email: Yup.string().required('Email is required').email('Email is invalid'),
  password: Yup.string()
    .required('Password is required')
    .min(6, 'Password must be at least 6 characters')
    .max(40, 'Password must not exceed 40 characters'),
  userType: Yup.string().required('Please select a user type')
});

// Render Function
const SignUpPage = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const {
    handleSubmit,
    register,
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
          url: 'https://auth-test-api-techinnover.herokuapp.com/api/v1/user/create',
          headers: {
            'Content-Type': 'application/json'
          },
          data
        });

        setIsLoading(false);

        toast.success('Sign up successful!');

        setTimeout(() => {
          navigate('/login');
        }, 2000);

        // console.log(res);
      } catch (error: any) {
        setIsLoading(false);
        if (error.response) {
          toast.error(`Sign Up Failed: ${error.response?.data.message}`);
        } else {
          toast.error(`Sign Up Failed: ${error.message}`);
        }
      }
    }
  };

  return (
    <SignUpForm onSubmit={handleSubmit(onSubmit)}>
      <h1>Signup</h1>
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
      <InputField
        label="Fullname"
        type="text"
        placeholder="Enter your fullname"
        register={{ ...register('fullName') }}
        error={errors.fullName?.message}
      />
      <DropdownSelect
        label="What is your role"
        register={{ ...register('userType') }}
      />
      <SubmitButton title={isLoading ? 'loading...' : 'Sign In'} />
    </SignUpForm>
  );
};
export default SignUpPage;
