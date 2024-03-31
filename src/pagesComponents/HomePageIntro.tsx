import homePageIntroImage from "../assets/homePageIntro.jpeg";
const HomePageIntro = () => {
  return (
    <div className="my-5 bg-light bg-gradient p-5">
      <div className="row align-items-center justify-content-center">
        <div className=" col-10 col-md-6">
          <img
            src={homePageIntroImage}
            alt=""
            className="img-fluid mb-3"
            width=""
          />
        </div>
        <div className="col-10 col-md-4 p-lead text-muted">
          <p>
            We offer a variety of clinical services at our clinic. Those include
            consultations, diagnostic workup and surgical solutions to our
            patients. Modern patient care involves multidisciplinary approach
            towards certain conditions, we offer those services under one roof.
          </p>
          <p>
            The ambience of our setup is comfortable and airconditioned to your
            comfort in all seasons of the year.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomePageIntro;
