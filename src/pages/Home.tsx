import styled from 'styled-components';
import LinkBtnOutline from '../components/LinkBtnOutline';

const NavLinkWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
`;

interface Props {}
const Home = (props: Props) => {
  return (
    <div>
      <h1>Techinnover Test</h1>

      <NavLinkWrapper>
        <LinkBtnOutline link="/signup" text="Sign Up" />
        <LinkBtnOutline link="/login" text="Login" />
      </NavLinkWrapper>
    </div>
  );
};
export default Home;
