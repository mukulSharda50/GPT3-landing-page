import "./navbar.css";
import logo from "../../assets/logo.png";
const Navbar = () => {
  return (
    <div className="gpt3__navbar-container">
      <img src={logo} alt="gpt3" />
      <ul className="gpt3__navbar-navlinks">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#wgpt3">What is GPT-3?</a>
        </li>
        <li>
          <a href="#openAI">Open AI</a>
        </li>
        <li>
          <a href="#casestudy">Case Studies</a>
        </li>
        <li>
          <a href="#library">Library</a>
        </li>
      </ul>
      <div className="gpt3__navbar-signin">
        <p>Sign in</p>
        <button className="gpt3__navbar-signin-btn">Sign Up</button>
      </div>
    </div>
  );
};
export default Navbar;
