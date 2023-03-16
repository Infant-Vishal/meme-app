import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { Col } from "react-bootstrap";
import { addFavMeme, deleteFavMeme } from "../redux/actions";
import "../assets/css/memePage.css";

const MemeCard = ({ meme }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const favMemeArr = useSelector((state) => state.favMemeReducer.favMemeArr);

  const handleDetailedPage = (e, meme) => {
    if (e.target.nodeName === "IMG") {
      navigate("/detailed_page", { state: { detailedMeme: meme } });
    }
  };
  const handleFavMemes = (e, meme) => {
    e.preventDefault();
    if (favMemeArr.some((element) => element.id === meme.id)) {
      dispatch(deleteFavMeme(meme));
    } else {
      dispatch(addFavMeme(meme));
    }
  };
  return (
    <Col lg={6}>
      <div
        className="d-flex flex-row justify-content-center"
        onClick={(e) => handleDetailedPage(e, meme)}
      >
        <div className="img-wrapper">
          <img src={meme.url} alt={meme.name} className="meme-img" />
          <div
            type="button"
            className="fav-wrapper"
            onClick={(e) => handleFavMemes(e, meme)}
          >
            {favMemeArr.some((element) => element.id === meme.id) ? (
              <AiFillHeart color="red" fontSize="2em" />
            ) : (
              <AiOutlineHeart color="white" fontSize="2em" />
            )}
          </div>
          <div className="meme-name slide-up">{meme.name}</div>
        </div>
      </div>
    </Col>
  );
};

export default MemeCard;
