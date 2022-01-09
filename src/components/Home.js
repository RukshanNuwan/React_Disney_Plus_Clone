import styled from "styled-components";
import ImgSlider from "./ImgSlider";

const Home = () => {
  return (
    <Container>
        <ImgSlider/>
    </Container>
  );
};

const Container = styled.main`
  position: relative;
  top: 72px;
  min-height: calc(100vh - 250px);
  padding: 0 calc(3.5vw + 5px);
  display: block;
  overflow-x: hidden;

  &:after {
    position: absolute;
    background: url("/images/home-background.png") center center / cover no-repeat fixed;
    content: '';
    inset: 0;
    opacity: 1;
    z-index: -1;
  }
`;

export default Home;
