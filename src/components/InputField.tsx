import styled from 'styled-components';

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const InputLabel = styled.label`
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: #667085;
`;

const Input = styled.input`
  border: 1px solid #eaeced;
  border-radius: 7px;
  padding: 15px;

  &:focus {
    outline: 1px solid #7d5fff;
  }
`;

const ErrorMessage = styled.p`
  color: #cc0000;
  font-size: 14px;
  margin: 0;
`;

interface Props {
  label: string;
  type: string;
  placeholder: string;
  error: any;
  register: object;
}

const InputField = ({ placeholder, label, type, register, error }: Props) => {
  return (
    <InputWrapper>
      <InputLabel>{label}</InputLabel>
      <Input type={type} placeholder={placeholder} {...register} />
      <ErrorMessage>{error}</ErrorMessage>
    </InputWrapper>
  );
};
export default InputField;
