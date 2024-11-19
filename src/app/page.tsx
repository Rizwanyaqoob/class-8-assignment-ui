import React from "react";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Project from "./components/project";
import Extension from "./components/extension";
import Customize from "./components/customize";
import Work from "./components/work";
import Sponsor from "./components/oursponsor";
import Footer from "./components/footer";

const Home = () =>{
  return(
  <div>
    <Navbar/>
    <Hero/>
    <Project/>
    <Extension/>
    <Customize/>
    <Work/>
    <Sponsor/>
    <Footer/>
  </div>
  )
}

export default Home