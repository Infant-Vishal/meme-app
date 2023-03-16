import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container, Row } from "react-bootstrap";
import { toast, ToastContainer } from "react-toastify";
import NavbarComponent from "../components/Navbar";
import SearchBar from "../components/SearchBar";
import MemeCard from "../components/MemeCard";
import "../assets/css/memePage.css";

const MemePage = () => {
  const [memeData, setMemeData] = useState([]);
  const [filteredMemeData, setFilteredMemeData] = useState([]);
  const [loading, setLoading] = useState();

  const getMemeData = async () => {
    await axios
      .get(" https://api.imgflip.com/get_memes")
      .then((response) => {
        setLoading(false);
        setMemeData(response.data.data.memes);
      })
      .catch((err) => {
        toast.error(`${err.message}`, {
          position: "bottom-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      });
  };

  useEffect(() => {
    setLoading(true);
    getMemeData();
  }, []);

  const outputData = () => {
    if (filteredMemeData.length === 0) {
      return memeData;
    } else {
      return filteredMemeData;
    }
  };

  return (
    <div className="meme-page-bg">
      <ToastContainer />
      <NavbarComponent />
      <SearchBar
        memeData={memeData}
        setFilteredMemeData={setFilteredMemeData}
      />
      <div>
        {loading ? <div>Loading...</div> : null}
        {filteredMemeData[0] === "No data" ? (
          <div className="text-center mt-5">
            <h3>No Data Found</h3>
          </div>
        ) : (
          <Container>
            <Row>
              {outputData().map((meme) => {
                return <MemeCard meme={meme} key={meme.id} />;
              })}
            </Row>
          </Container>
        )}
      </div>
    </div>
  );
};

export default MemePage;
