import { Feature } from "../../comp";
import "./features.css";

const Features = ({ title, desc }) => {
  const featureItems = [
    {
      id: 1,
      title: "Improving end distrusts instantly ",
      desc: "From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded.",
    },
    {
      id: 2,
      title: "Become the tended active",
      desc: "Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to.",
    },
    {
      id: 3,
      title: "Message or am nothing",
      desc: "Led ask possible mistress relation elegance eat likewise debating. By message or am nothing amongst chiefly address.",
    },
    {
      id: 4,
      title: "Really boy law county",
      desc: "Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now. In built table in an rapid blush.",
    },
  ];
  return (
    <div className="gpt3__features-container">
      <div className="gpt3__features">
        <h1 className="gpt3__features-title">
          The Future is Now and You Just Need To Realize It. Step into Future
          Today & Make it Happen.
        </h1>
        <p>Request Early Access to Get Started</p>
      </div>
      <div className="gpt3__features-feature">
        {featureItems.map((item) => {
          return (
            <Feature
              title={item.title}
              desc={item.desc}
              FeatureClassName={"feature"}
            />
          );
        })}
      </div>
    </div>
  );
};
export default Features;
