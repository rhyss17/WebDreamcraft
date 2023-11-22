import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const YOGASTUDIOTwo = React.lazy(() => import("pages/YOGASTUDIOTwo"));
const YOGASTUDIOOne = React.lazy(() => import("pages/YOGASTUDIOOne"));
const YOGASTUDIOThree = React.lazy(() => import("pages/YOGASTUDIOThree"));
const CustomerReviews = React.lazy(() => import("pages/CustomerReviews"));
const PersonalRecommendation = React.lazy(
  () => import("pages/PersonalRecommendation"),
);
const ContactUs = React.lazy(() => import("pages/ContactUs"));
const AboutUs = React.lazy(() => import("pages/AboutUs"));
const YOGASTUDIO = React.lazy(() => import("pages/YOGASTUDIO"));
const WellnessCenter = React.lazy(() => import("pages/WellnessCenter"));
const BeautySalon = React.lazy(() => import("pages/BeautySalon"));
const Massage = React.lazy(() => import("pages/Massage"));
const Home1 = React.lazy(() => import("pages/Home1"));
const AdminFrame = React.lazy(() => import("pages/AdminFrame"));
const AdminLogIn = React.lazy(() => import("pages/AdminLogIn"));
const SignUp = React.lazy(() => import("pages/SignUp"));
const AdminDashboard = React.lazy(() => import("pages/AdminDashboard"));
const FIgmaStylicleSalonLandingPage = React.lazy(
  () => import("pages/FIgmaStylicleSalonLandingPage"),
);
const Login = React.lazy(() => import("pages/Login"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="*" element={<NotFound />} />
          <Route
            path="/figmastyliclesalonlandingpage"
            element={<FIgmaStylicleSalonLandingPage />}
          />
          <Route path="/admindashboard" element={<AdminDashboard />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/adminlogin" element={<AdminLogIn />} />
          <Route path="/adminframe" element={<AdminFrame />} />
          <Route path="/home1" element={<Home1 />} />
          <Route path="/massage" element={<Massage />} />
          <Route path="/beautysalon" element={<BeautySalon />} />
          <Route path="/wellnesscenter" element={<WellnessCenter />} />
          <Route path="/yogastudio" element={<YOGASTUDIO />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route
            path="/personalrecommendation"
            element={<PersonalRecommendation />}
          />
          <Route path="/customerreviews" element={<CustomerReviews />} />
          <Route path="/yogastudiothree" element={<YOGASTUDIOThree />} />
          <Route path="/yogastudioone" element={<YOGASTUDIOOne />} />
          <Route path="/yogastudiotwo" element={<YOGASTUDIOTwo />} />
          <Route path="/dhiwise-dashboard" element={<Home />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
