import "./Product.css";

function Product({ title, disc }) {
  return (
    <div className="Product">
      <h3> {title}</h3>
      <h5>{disc}</h5>
    </div>
  );
}
export default Product;
