import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import ImgSlider from "./ImgSlider";
import Viewers from "./Viewers";
import Recommends from "./Recommends";
import NewDisney from "./NewDisney";
import Originals from "./Originals";
import Trending from "./Trending";
import { selectUserName } from "../features/user/userSlice";
import db from "../firebase";
import { setMovie } from "../features/movie/movieSlice";

const Home = () => {
  const dispatch = useDispatch();
  const userName = useSelector(selectUserName);

  let recommends = [];
  let newDisneys = [];
  let originals = [];
  let trendings = [];

  useEffect(() => {
    // there is an error occurred. It sys db.collection is not a function
    db.collection('movies').onSnapshot((snapshot) => {
      snapshot.docs.map((doc) => {
        console.log(recommends);

        switch (doc.data().type) {
          case 'recommend':
            recommends = [...recommends, { id: doc.id, ...doc.data() }];
            break;
          case 'new':
            newDisneys = [...newDisneys, { id: doc.id, ...doc.data() }];
            break;
          case 'original':
            originals = [...originals, { id: doc.id, ...doc.data() }];
            break;
          case 'trending':
            trendings = [...trendings, { id: doc.id, ...doc.data() }];
            break;
          default:
            break;
        }
      });

      dispatch(setMovie({
        recommend: recommends,
        newDisney: newDisneys,
        original: originals,
        trending: trendings
      }));
    });

  }, [userName]);

  return (
    <Container>
      <ImgSlider />
      <Viewers />
      <Recommends />
      <NewDisney />
      <Originals />
      <Trending />
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
