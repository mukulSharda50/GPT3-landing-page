import "./feature.css";
import Bar from "../bar/Bar";

const Feature = ({ title, desc, FeatureClassName }) => {
  return (
    <div className="gpt3__feature-container-row">
      <div>
        <Bar />
        <h2
          className={`${
            FeatureClassName === "feature"
              ? "gpt3__feature-feature-title"
              : "gpt3__feature-title"
          }`}
        >
          {title}
        </h2>
      </div>
      <p
        className={`${
          FeatureClassName === "feature"
            ? "gpt3__feature-feature-desc"
            : "gpt3__feature-desc"
        }`}
      >
        {desc}
      </p>
    </div>
  );
};
export default Feature;
