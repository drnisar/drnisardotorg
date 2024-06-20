import whatsappImage from "../assets/WhatsAppButtonGreenSmall.svg";
import localizeLogo from "../assets/localizeLogo.svg";

const ContactPageDetails = () => {
  return (
    <div className="my-5 container-fluid bg-light bg-gradient p-5">
      <div className="row align-items-center">
        <div className="col text-center md-text-center">
          <img src={localizeLogo} alt="" width="120px" />
        </div>
        <div className=" col-8 justify-content-center">
          <dl className="row">
            <dt className="col-sm-3">Call Us</dt>
            <dd className="col-sm-9">+92 330 555 1116</dd>
            <dt className="col-sm-3">Whatsapp</dt>
            <dd className="col-sm-9">
              <a
                aria-label="Chat on WhatsApp"
                href="https://wa.me/923215113569"
                target="_blank"
              >
                {" "}
                <img alt="Chat on WhatsApp" src={whatsappImage} />
              </a>
            </dd>
            <dt className="col-sm-3">Email us</dt>
            <dd className="col-sm-9">
              <a
                className="btn btn-outline-success btn-rounded"
                href="mailto:drnisar@hotmail.com"
              >
                Email @ drnisar@hotmail.com
              </a>
            </dd>
            <dt className="col-sm-3">Visit Us</dt>
            <dd className="col-sm-9">
              <a
                href="https://maps.app.goo.gl/yWuR4jTmUF2GXRq79"
                target="_blank"
                rel="noopener noreferrer"
              >
                Google Maps
              </a>
            </dd>
          </dl>
        </div>
      </div>
    </div>
  );
};

export default ContactPageDetails;
