import "./header.css";
import ai from "../../assets/ai.png";
import people from "../../assets/people.png";
import { useState } from "react";

const Header = () => {
  const [email, setEmail] = useState("");
  return (
    <div className="gpt3__header-container" id="home">
      <div className="gpt3__header-content">
        <h1> Let’s Build Something amazing with GPT-3 OpenAI</h1>
        <p>
          Yet bed any for travelling assistance indulgence unpleasing. Not
          thoughts all exercise blessing. Indulgence way everything joy
          alteration boisterous the attachment. Party we years to order allow
          asked of.
        </p>
        <form className="gpt3__header-form">
          <input
            type="text"
            value={email}
            placeholder="Your Email Address"
            onChange={(e) => {
              setEmail(e.currentTarget.value);
            }}
          />
          <input type="button" value="Get Started" />
        </form>
        <div className="gpt3__header-people-signed">
          <img src={people} alt="people" />
          <p>1,600 people requested access a visit in last 24 hours</p>
        </div>
      </div>
      <div className="gpt3__header-img">
        <img src={ai} alt="AI" />
      </div>
    </div>
  );
};
export default Header;
