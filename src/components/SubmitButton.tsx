import styled from 'styled-components';

const Button = styled.button`
  background: #7d5fff;
  border-radius: 6px;
  padding: 12px;
  border: 0;
  font-weight: 400;
  font-size: 17px;
  line-height: 21px;
  cursor: pointer;
  letter-spacing: -0.02em;

  color: #ffffff;
`;

interface Props {
  title: string;
}
const SubmitButton = ({ title }: Props) => {
  return <Button type="submit">{title}</Button>;
};
export default SubmitButton;
