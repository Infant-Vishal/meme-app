import React from "react";
import { useSelector } from "react-redux";
import { Container, Row } from "react-bootstrap";
import NavbarComponent from "../components/Navbar";
import MemeCard from "../components/MemeCard";
import "../assets/css/memePage.css";

const FavMemesPage = () => {
  const favMemeArr = useSelector((state) => state.favMemeReducer.favMemeArr);

  return (
    <div className="meme-page-bg">
      <NavbarComponent />
      <Container>
        <Row>
          {favMemeArr.map((meme) => {
            return <MemeCard meme={meme} key={meme.id} />;
          })}
        </Row>
      </Container>
    </div>
  );
};

export default FavMemesPage;
