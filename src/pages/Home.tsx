import React from "react";
import Navbar from "../components/Navbar";
import Subscription from "../components/Subscription";
import Users from "src/components/Users";
import Documents from "src/components/Documents";
import WorkFlow from "src/components/WorkFlow";
import Testimonial from "src/components/Testimonial";
import Promise from "src/components/Promise";
import Faq from "src/components/Faq";
import Footer from "src/components/Footer"; 
const Home: React.FC = () => (
  <div>
    <Navbar />
    <Subscription />
    <Users />
    <Documents />
    <WorkFlow />
    <Testimonial />
    <Promise />
    <Faq />
    <Footer />
  </div>
);

export default Home;
