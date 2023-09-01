import React from "react";
import ImageA from '../images/boggle1.png';
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="container text-center">
      <div className=" text-center">
        <h1 className="*text-center">Rules</h1>
      </div>
      <div className="text-center">
        <img className="img-home" src={ImageA} alt="rules"></img>
      </div>
      <div className="text-center mt-3">
        <button className="btn btn-primary"
            onClick={() => navigate('/game')}>
          Play Now!
        </button>
      </div>
    </div>
  );
}

export default Home;