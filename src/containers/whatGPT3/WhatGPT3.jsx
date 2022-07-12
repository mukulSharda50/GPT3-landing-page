import Feature from "../../comp/feature/Feature";
import "./whatgpt3.css";

const WhatGPT3 = () => {
  // const featureData = [
  //   {
  //     id: 1,
  //     title: "Chatbots",
  //     desc: "We so opinion friends me message as delight. Whole front do of plate heard oh ought. ",
  //   },
  //   {
  //     id: 2,
  //     title: "Knowledgebase",
  //     desc: "At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments.",
  //   },
  //   {
  //     id: 3,
  //     title: "Education",
  //     desc: "At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments.",
  //   },
  // ];
  return (
      <div className="gpt3__wgpt3-container" id="wgpt3">
        <Feature
          title={"What is GPT-3"}
          desc={
            "We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by."
          }
        />
        <div className="gpt3__wgpt3-headline">
          <h1 className="gpt3__wgpt3-title">
            The possibilities are beyond your imagination
          </h1>
          <p className="gpt3__wgpt3-explore">Explore The Library</p>
        </div>
        <div className="gpt3__wgpt3-row">
          <Feature
            title={"Chatbots"}
            desc={
              "We so opinion friends me message as delight. Whole front do of plate heard oh ought. "
            }
          />
          <Feature
            title={"Knowledgebase"}
            desc={
              "At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments."
            }
          />
          <Feature
            title={"Education"}
            desc={
              "At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments. "
            }
          />
        </div>
      </div>
  );
};
export default WhatGPT3;
