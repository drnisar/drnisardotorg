import { CardContent } from "../pagesContent/Content";
import HomeCard from "./HomeCard";

const ServicesSection = () => {
  return (
    <div className="container-lg mt-5">
      <div className="row  justify-content-center">
        <div className="text-center">
          <h3 className="display-5">Our Clinical Services</h3>
        </div>

        {CardContent.map((card) => (
          <div className="col-8 col-md-5 col-lg-4 col-xl-3">
            <HomeCard
              title={card.title}
              detail={card.detail}
              image={card.image}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesSection;
