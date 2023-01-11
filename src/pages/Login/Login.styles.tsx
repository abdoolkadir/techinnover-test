import styled from 'styled-components';

export const LoginForm = styled.form`
  width: 50%;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media screen and (max-width: 768px) {
    width: 80%;
  }
`;
