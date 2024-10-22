import React from "react";
import UserImg from "../assets/user2.png";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();
    const handleRedirect = () => {
        navigate('/users')
    }
  return (
    <div className="flex flex-1 flex-col items-center justify-center md:justify-around md:flex-row">
      <img src={UserImg} alt="User" className="max-w-xs md:max-w-md" />

      <div className="md:max-w-[50%] p-8 flex flex-col max-md:items-center items-start">
        <h1 className="text-3xl font-bold md:text-4xl lg:text-5xl max-md:text-center">UserDeck - User Management</h1>
        <p className="py-6 max-md:hidden ">
          Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
          excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a
          id nisi.
        </p>
        <p className="py-6 text-center md:hidden">
          Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda.
        </p>
        <button className="btn btn-primary" onClick={handleRedirect}>Get Started</button>
      </div>
    </div>
  );
};

export default Home;
