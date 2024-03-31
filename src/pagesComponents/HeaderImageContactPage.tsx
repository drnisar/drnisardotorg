interface Props {
  img: string;
}

const HeaderImageContactPage = ({ img }: Props) => {
  return (
    <div className="container-lg m-5">
      <div className="row justify-content-center align-items-center">
        <div className="col-8 col-md-5 text-center text-md-start">
          <h1>
            <div className="display-4 ">Get in touch</div>
          </h1>
          <p className="lead my-4 text-muted">
            Feel free to contact us for your queries. We will try to address
            your concerns at the earliest. Our response time on average is
            within two hours in working hours.
          </p>
        </div>
        <div className="col-4 col-md-5 text-center d-none d-md-block">
          <img className="img-fluid " src={img} alt="Surgeon Photo" />
        </div>
      </div>
    </div>
  );
};

export default HeaderImageContactPage;
