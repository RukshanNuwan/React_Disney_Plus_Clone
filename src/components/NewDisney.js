import styled from "styled-components";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectNewDisney } from "../features/movie/movieSlice";

const NewDisney = () => {
  const movies = useSelector(selectNewDisney);

  return (
    <Container>
      <h4>New to Disney+</h4>
      <Content>
        {movies && movies.map((movie, index) => (
          <Wrap key={index}>
            {movie.id}
            <Link to={'/detail/' + movie.id}>
              <img src={movie.cardImg} alt={movie.title} />
            </Link>
          </Wrap>
        ))}
      </Content>
    </Container>
  );
};

const Container = styled.div`
  padding: 0 0 26px;
`;

const Content = styled.div`
  display: grid;
  grid-gap: 25px;
  gap: 25px;
  grid-template-columns: repeat(4, minmax(0, 1fr));

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;

const Wrap = styled.div`
  position: relative;
  padding-top: 56.25%;
  border-radius: 10px;
  box-shadow: rgb(0 0 0 / 69%) 0 26px 30px -10px, rgb(0 0 0 / 73%) 0 16px 10px -10px;
  cursor: pointer;
  overflow: hidden;
  transition: all 250ms;
  border: 3px solid #F9F9F919;

  img {
    position: absolute;
    top: 0;
    height: 100%;
    width: 100%;
    inset: 0;
    display: block;
    object-fit: cover;
    opacity: 1;
    transition: opacity 500ms ease-in-out 0s;
    z-index: 1;
  }

  &:hover {
    box-shadow: rgb(0 0 0 / 80%) 0 40px 58px -16px, rgb(0 0 0 / 72%) 0 30px 22px -10px;
    transform: scale(1.05);
    border-color: #F9F9F9CC;
  }
`;

export default NewDisney;
