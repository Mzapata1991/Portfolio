import React, { useRef, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Loader from "./../../components/Loader/Loader";
import useBodyClass from "../../helpers/useBodyClass";
import HeaderFour from "../../components/Header/HeaderFour";
import HeroSliderOne from "../../components/Hero/HeroSliderOne";
import WhoWeAreFour from "../../components/WhoWeAre/WhoWeAreFour";
import Resume from "../../components/Resume/Resume";
import ContactTwo from "../../components/ContactUs/ContactTwo";
import FooterTwo from "../../components/Footer/FooterTwo";
import Portfolio from "../../components/Portfolio/Portfolio";
import FooterOne from "../../components/Footer/FooterOne";

const PersonalResume = () => {
  useBodyClass("wrap-nav-sidebar");
  const home = useRef();
  const about = useRef();
  const portfolio = useRef();
  const resume = useRef();
  const contact = useRef();
  

  const scrollToSection = (e, content) => {
    e.preventDefault();
    switch (content) {
      case "home":
        home.current.scrollIntoView({ behavior: "smooth" });
        break;
      case "about":
        about.current.scrollIntoView({ behavior: "smooth" });
        break;
      case "portfolio":
        portfolio.current.scrollIntoView({ behavior: "smooth" });
        break;
      case "resume":
        resume.current.scrollIntoView({ behavior: "smooth" });
        break;
      case "contact":
        contact.current.scrollIntoView({ behavior: "smooth" });
        break;
      default:
    }
  };

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <Loader>
      <HeaderFour scrollToSection={scrollToSection} />
      <HeroSliderOne ref={home} />
      <WhoWeAreFour ref={about} />
      <Portfolio
        columns="3"
        layout="wide"
        filter="true"
        items="6"
        classAppend="pt-0"
        ref={portfolio}
      />
      <Resume ref={resume} />
      {/* <ContactTwo title="Contact Me" ref={contact} classAppend="mt-50" /> */}
      <FooterTwo />
    </Loader>
  );
};

export default PersonalResume;
