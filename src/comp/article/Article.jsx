import "./article.css";

const Article = ({ img, date, desc}) => (
  <div className="gpt3__article-container">
    <div className="gpt3__article-img">
      <img src={img} alt={"blog header"}/>
    </div>
    <div className="gpt3__article-content">
      <div className="gpt3__article-heading">
        <p>{ date }</p>
        <h3>{ desc }</h3>
      </div>
      <p>Read Full Article</p>
    </div>
  </div>
);

export default Article;
