import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { addFavMeme, deleteFavMeme } from "../redux/actions";
import NavbarComponent from "../components/Navbar";
import "../assets/css/memePage.css";

const DetailedPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const { detailedMeme } = location.state || {};
  const favMemeArr = useSelector((state) => state.favMemeReducer.favMemeArr);

  const handleFavMemes = (e, meme) => {
    e.preventDefault();
    if (favMemeArr.some((element) => element.id === meme.id)) {
      dispatch(deleteFavMeme(meme));
    } else {
      dispatch(addFavMeme(meme));
    }
  };

  const handleGoBack = (e) => {
    e.preventDefault();
    navigate(-1);
  };

  return (
    <div className="meme-page-bg">
      <NavbarComponent />
      <div>
        <div
          key={detailedMeme.id}
          className="d-flex flex-row justify-content-center"
        >
          <div className="img-wrapper">
            <img
              src={detailedMeme.url}
              alt={detailedMeme.name}
              className="meme-img"
            />
            <div
              type="button"
              className="fav-wrapper"
              onClick={(e) => handleFavMemes(e, detailedMeme)}
            >
              {favMemeArr.some((element) => element.id === detailedMeme.id) ? (
                <AiFillHeart color="red" fontSize="2em" />
              ) : (
                <AiOutlineHeart color="white" fontSize="2em" />
              )}
            </div>
            <div className="meme-name slide-up">{detailedMeme.name}</div>
          </div>
        </div>
        <div className="d-flex flex-row justify-content-center">
          <button className="btn btn-info mt-4" onClick={handleGoBack}>
            Go back
          </button>
        </div>
      </div>
    </div>
  );
};

export default DetailedPage;
