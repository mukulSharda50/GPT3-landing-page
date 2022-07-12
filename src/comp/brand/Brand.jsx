import "./brand.css";
import companies from "../../assets/companies.png";

const Brand = () => {
  return (
    <div className="gpt3__brands-container">
      <img src={companies} alt="Brands" />
    </div>
  );
};
export default Brand;
