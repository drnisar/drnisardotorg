const Footer = () => {
  return (
    <div className=" container-fluid bg-secondary-subtle row justify-content-center p-5 mt-5">
      <div className="col-sm-9 col-md-5 align-items-end ">
        <dl>
          <dt>Address</dt>
          <dl>Room 101, Basement floor, Khyber Teaching Hospital Peshawar</dl>
          <dt>Call for Consultation</dt>
          <dl>
            <a href="tel:+923025997208">0302 599 7208</a>
          </dl>
        </dl>
      </div>
      <div className="col-sm-9 col-md-5 align-items-center">
        <dl>
          <dt>Consultation Timings</dt>
          <dt>IBP Clinic</dt>
          <dd>Monday to Friday 2 pm to 5 pm (Ramadan)</dd>
          <dd>Monday to Friday 3 pm to 7 pm (Non Ramadan)</dd>
          <dt>OPD</dt>
          <dl>Thursday 9 am to 1 pm</dl>
        </dl>
      </div>
    </div>
  );
};

export default Footer;
