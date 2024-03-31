import HeaderImage from "../pagesComponents/HeaderImage";
import HomePageIntro from "../pagesComponents/HomePageIntro";
import OurTeam from "../pagesComponents/OurTeam";
import ServicesSection from "../pagesComponents/ServicesSection";

import flyerPhoto from "../assets/Photo.jpg";

const HomePage = () => {
  return (
    <>
      <HeaderImage img={flyerPhoto} />
      <HomePageIntro />
      <ServicesSection />
      <OurTeam />
    </>
  );
};

export default HomePage;
