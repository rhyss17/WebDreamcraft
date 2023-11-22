import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="dhiwise-navigation">
      <h1>Homepage</h1>
      <p className="headline">
        This project was generated By{" "}
        <a href="https://www.dhiwise.com">Dhiwise</a>. Quickly use below links
        to navigate through all pages.
      </p>
      <ul>
        <li>
          <Link to="/">Login</Link>
        </li>
        <li>
          <Link to="/figmastyliclesalonlandingpage">
            FIgmaStylicleSalonLandingPage
          </Link>
        </li>
        <li>
          <Link to="/admindashboard">AdminDashboard</Link>
        </li>
        <li>
          <Link to="/signup">SignUp</Link>
        </li>
        <li>
          <Link to="/adminlogin">AdminLogIn</Link>
        </li>
        <li>
          <Link to="/adminframe">AdminFrame</Link>
        </li>
        <li>
          <Link to="/home1">Home1</Link>
        </li>
        <li>
          <Link to="/massage">Massage</Link>
        </li>
        <li>
          <Link to="/beautysalon">BeautySalon</Link>
        </li>
        <li>
          <Link to="/wellnesscenter">WellnessCenter</Link>
        </li>
        <li>
          <Link to="/yogastudio">YOGASTUDIO</Link>
        </li>
        <li>
          <Link to="/aboutus">AboutUs</Link>
        </li>
        <li>
          <Link to="/contactus">ContactUs</Link>
        </li>
        <li>
          <Link to="/personalrecommendation">PersonalRecommendation</Link>
        </li>
        <li>
          <Link to="/customerreviews">CustomerReviews</Link>
        </li>
        <li>
          <Link to="/yogastudiothree">YOGASTUDIOThree</Link>
        </li>
        <li>
          <Link to="/yogastudioone">YOGASTUDIOOne</Link>
        </li>
        <li>
          <Link to="/yogastudiotwo">YOGASTUDIOTwo</Link>
        </li>
      </ul>
    </div>
  );
};
export default Home;
