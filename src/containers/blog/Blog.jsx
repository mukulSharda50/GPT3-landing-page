import "./blog.css";
import { Article } from "../../comp";
import blog01 from '../../assets/blog01.png';
import blog02 from '../../assets/blog02.png';
import blog03 from '../../assets/blog03.png';
import blog04 from '../../assets/blog04.png';
import blog05 from '../../assets/blog05.png';

const Blog = () => {
  return (
    <div className="gpt3__blog-container" id="casestudy">
      <h2>A lot is happening, We are blogging about it.</h2>
      <div className="gpt3__blog-blogposts">
        <div className="gpt3__blog-blogposts-left">
          <Article img={blog01} date={"Sep 26, 2021"} desc={"GPT-3 and Open  AI is the future. Let us exlore how it is?"} />
        </div>
        <div className="gpt3__blog-blogposts-right">
          <Article img={blog02} date={"Sep 26, 2021"} desc={"GPT-3 and Open  AI is the future. Let us exlore how it is?"} />
          <Article img={blog03} date={"Sep 26, 2021"} desc={"GPT-3 and Open  AI is the future. Let us exlore how it is?"} />
          <Article img={blog04} date={"Sep 26, 2021"} desc={"GPT-3 and Open  AI is the future. Let us exlore how it is?"} />
          <Article img={blog05} date={"Sep 26, 2021"} desc={"GPT-3 and Open  AI is the future. Let us exlore how it is?"} />
        </div>
      </div>
    </div>
  );
};
export default Blog;
