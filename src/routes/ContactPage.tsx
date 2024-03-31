import ContactPageDetails from "../pagesComponents/ContactPageDetails";
import ContactPageForm from "../pagesComponents/ContactPageForm";
import HeaderImageContactPage from "../pagesComponents/HeaderImageContactPage";
import contactUsPhoto from "../assets/contactUs.png";
const ContactPage = () => {
  return (
    <div>
      <HeaderImageContactPage img={contactUsPhoto} />
      <ContactPageDetails />
      <ContactPageForm />
    </div>
  );
};

export default ContactPage;
