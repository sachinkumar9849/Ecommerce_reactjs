import React from "react";
import styled from "styled-components";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Services from "./components/Services";
import FeaturedProduct from "./components/FeaturedProduct";

const Home = () => {
  const data ={
    name: "Home page"

  };
  return (
    <Wrapper className="container">
      <HeroSection myData={data}/>
      <Services/>
      <FeaturedProduct/>
      <Footer/>
    </Wrapper>
  );
};
const Wrapper = styled.section``;
export default Home;
