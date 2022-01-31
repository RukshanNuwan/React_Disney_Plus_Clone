import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import styled from "styled-components";
import ImgSlider from "./ImgSlider";
import Viewers from "./Viewers";
import Recommends from "./Recommends";
import NewDisney from "./NewDisney";
import Originals from "./Originals";
import Trending from "./Trending";
import {selectUserName} from "../features/user/userSlice";
import db from "../firebase";
import {setMovies} from "../features/movie/movieSlice";
import {collection, onSnapshot} from 'firebase/firestore';

const Home = () => {
  const dispatch = useDispatch();
  const userName = useSelector(selectUserName);

  useEffect(() => {
    const colRef = collection(db, 'movies');

    let recommend = [];
    let newDisney = [];
    let original = [];
    let trending = [];

    onSnapshot(colRef, (snapshot) => {
      snapshot.docs.forEach((doc) => {
        switch (doc.data().type) {
          case 'recommend':
            recommend = [...recommend, {id: doc.id, ...doc.data()}];
            break;
          case 'new':
            newDisney = [...newDisney, {id: doc.id, ...doc.data()}];
            break;
          case 'original':
            original = [...original, {id: doc.id, ...doc.data()}];
            break;
          case 'trending':
            trending = [...trending, {id: doc.id, ...doc.data()}];
            break;
          default:
            break;
        }
      });

      dispatch(setMovies({
        recommend: recommend,
        newDisney: newDisney,
        original: original,
        trending: trending
      }));
    });
  }, [dispatch, userName]);

  return (
    <Container>
      <ImgSlider/>
      <Viewers/>
      <Recommends/>
      <NewDisney/>
      <Originals/>
      <Trending/>
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
