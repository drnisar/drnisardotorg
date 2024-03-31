interface Props {
  img: string;
}

const HeaderImage = ({ img }: Props) => {
  return (
    <div className="container-lg">
      <div className="row justify-content-center align-items-center">
        <div className="col-8 col-md-5 text-center text-md-start">
          <h1>
            <div className="display-4 ">Dr Nisar Ahmed</div>
            <div className="display-6  text-muted">MBBS, MRCS, FCPS, MHR</div>
          </h1>
          <p className="lead my-4 text-muted">
            Welcome to our website. Thank you for showing your interest. Here we
            would like to give you the information that you need.
          </p>
        </div>
        <div className="col-4 col-md-5 text-center d-none d-md-block">
          <img className="img-fluid " src={img} alt="Surgeon Photo" />
        </div>
      </div>
    </div>
  );
};

export default HeaderImage;
