import { Link } from 'react-router-dom';
import styled from 'styled-components';

const BtnOutline = styled(Link)`
  padding: 18px 20px;
  border-radius: 6px;
  border: 1px solid #7d5fff;
  text-decoration: none;
`;

interface Props {
  text: string;
  link: string;
}
const LinkBtnOutline = ({ text, link }: Props) => {
  return <BtnOutline to={link}>{text}</BtnOutline>;
};
export default LinkBtnOutline;
