import "./footer.css";
import GPTlogo from '../../assets/GPTlogo.svg';
import Links from '../../comp/Links/Links';

const Footer = () => {
  const links = [
    {
      id: 1,
      title: "Overons" 
    },
    {
      id: 2,
      title: "Social Media" 
    },
    {
      id: 3,
      title: "Counters" 
    },
    {
      id: 4,
      title: "Contact" 
    },
  ];
  const companyLinks = [
    {
      id: 1,
      title: "Terms & Conditions" 
    },
    {
      id: 2,
      title: "Privacy Policy" 
    },
    {
      id: 3,
      title: "Contact" 
    },
  ];

  const contactLinks = [
    {
      id: 1,    /* border: 2px solid red; */
      title: "Crechterwoord K12 182 DK Alknjkcb" 
    },
    {
      id: 2,
      title: "085-132567" 
    },
    {
      id: 3,
      title: "info@payme.net" 
    },
  ];

  return(
    <footer className="gpt3__footer-container">
        <div className="gpt3-footer-heading-container">
          <div className="gpt3__footer-heading">
            <h2>Do you want to step in to the future before others</h2>
            <div className="gpt3__footer-btn-container"><button className="gpt3__footer-btn"><span className="gpt3__footer-btn-text">Request Early Access</span></button></div>
          </div>
        </div>

        <div className="gpt__footer-sec"> 
          <div className="gpt3__footer-logo">
            <img src={GPTlogo} alt="Footer logo" />
            <p>Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved</p>
          </div>
          
          <Links title={"Links"} childLinks={links} />
          <Links title={"Company"} childLinks={companyLinks} />
          <Links title={"Get in Touch"} childLinks={contactLinks} />

        </div>
        <p>&#169; (©) 2022 GPT-3. All rights reserved.</p>
    </footer>
  );
}
export default Footer;
