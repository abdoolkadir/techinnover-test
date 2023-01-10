import styled from 'styled-components';

const Wrapper = styled.div`
  height: 100vh;
  width: 90vw;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

interface Props {
  children: JSX.Element;
}
const Container = ({ children }: Props) => {
  return <Wrapper>{children}</Wrapper>;
};
export default Container;
