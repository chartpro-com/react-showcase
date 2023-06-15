import React from "react";
import { Link } from "react-router-dom";
import Portrait from "../../assets/images/profile-pic-2.jpg";

function Home() {
  return (
    <section className="home my-5">
      <div className="title">
        <div className="portrait">
          <img src={Portrait} alt="self portrait" />
        </div>
        <h2>Hi, Matt here</h2>
        <p>Welcome to my Portfolio</p>
        <Link to="portfolio">
          <button>View my Projects</button>
        </Link>
      </div>
    </section>
  );
}

export default Home;
