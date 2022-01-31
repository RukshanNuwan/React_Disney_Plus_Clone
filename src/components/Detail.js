import {useEffect, useState} from "react";
import styled from "styled-components";
import {useParams} from "react-router-dom";
import db from "../firebase";
import {doc, getDoc} from 'firebase/firestore';

const Detail = () => {
  const [detailData, setDetailData] = useState({});
  const {id} = useParams();

  useEffect(() => {
    const docRef = doc(db, 'movies', id);

    getDoc(docRef).then((doc) => {
      if (doc.exists) {
        setDetailData(doc.data());
      } else {
        console.log('no such document in firebase');
      }
    }).catch((error) => {
      console.log('Error getting document: ', error);
    });
  }, [id]);

  return (
    <Container>
      <Background>
        <img src={detailData.backgroundImg} alt={detailData.title}/>
      </Background>

      <ImageTitle>
        <img src={detailData.titileImg} alt={detailData.title}/>
      </ImageTitle>

      <ContentMeta>
        <Controls>
          <Player>
            <img src="/images/play-icon-black.png" alt=""/>
            <span>Play</span>
          </Player>

          <Trailer>
            <img src="/images/play-icon-white.png" alt=""/>
            <span>Trailer</span>
          </Trailer>

          <AddList>
            <span/>
            <span/>
          </AddList>

          <GroupWatch>
            <div>
              <img src="/images/group-icon.png" alt=""/>
            </div>
          </GroupWatch>
        </Controls>

        <SubTitle>{detailData.subTitle}</SubTitle>

        <Description>{detailData.description}</Description>
      </ContentMeta>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  top: 72px;
  min-height: calc(100vh - 250px);
  padding: 0 calc(3.5vw + 5px);
  display: block;
  overflow-x: hidden;
`;

const Background = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  opacity: 0.8;
  z-index: -1;

  img {
    width: 100vw;
    height: 100vh;

    @media (max-width: 768px) {
      width: initial;
    }
  }
`;

const ImageTitle = styled.div`
  height: 30vw;
  min-height: 170px;
  width: 100%;
  margin: 0 auto;
  padding-bottom: 24px;
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
  -webkit-box-pack: start;

  img {
    max-width: 600px;
    min-width: 200px;
    width: 35vw;
  }
`;

const ContentMeta = styled.div`
  max-width: 874px;
`;

const Controls = styled.div`
  min-height: 56px;
  margin: 24px 0;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
`;

const Player = styled.button`
  height: 56px;
  margin: 0 22px 0 0;
  padding: 0 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 15px;
  letter-spacing: 1.8px;
  text-align: center;
  text-transform: uppercase;
  border-radius: 4px;
  cursor: pointer;
  background: #F9F9F9;
  border: none;
  color: rgb(0, 0, 0);

  img {
    width: 32px;
  }

  &:hover {
    background: #C6C6C6;
  }

  @media (max-width: 768px) {
    height: 45px;
    padding: 0 22px;
    margin: 0 10px 0 0;
    font-size: 12px;

    img {
      width: 25px;
    }
  }
`;

const Trailer = styled(Player)`
  background: #0000004C;
  border: 1px solid #F9F9F9;
  color: #f9f9f9;
`;

const AddList = styled.div`
  height: 44px;
  width: 44px;
  margin-right: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #00000099;
  border-radius: 50%;
  border: 2px solid #fff;
  cursor: pointer;

  span {
    display: inline-block;
    background-color: #f9f9f9;

    &:first-child {
      height: 2px;
      width: 16px;
      transform: translate(1px, 0) rotate(0deg);
    }

    &:nth-child(2) {
      height: 16px;
      width: 2px;
      transform: translateX(-8px) rotate(0deg);
    }
  }
`;

const GroupWatch = styled.div`
  height: 44px;
  width: 44px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background-color: #fff;
  border-radius: 50%;

  div {
    height: 40px;
    width: 40px;
    background: #000;
    border-radius: 50%;

    img {
      width: 100%;
    }
  }
`;

const SubTitle = styled.div`
  min-height: 20px;
  color: #f9f9f9;
  font-size: 15px;

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

const Description = styled.div`
  padding: 16px 0;
  line-height: 1.4;
  font-size: 20px;
  color: #f9f9f9;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

export default Detail;
