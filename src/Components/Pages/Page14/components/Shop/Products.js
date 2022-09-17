import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const DUMMY_PRODUCT = [
  {
    id: "p1",
    price: 6,
    title: "My First Product",
    description: "The first fancy tiem to look you shine",
  },
  {
    id: "p2",
    price: 5,
    title: "Product 2",
    description: "You must try this ones",
  },
  {
    id: "p3",
    price: 9,
    title: "Product 3",
    description: "Finally reach to a cool touch",
  },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCT.map((product) => (
          <ProductItem
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
