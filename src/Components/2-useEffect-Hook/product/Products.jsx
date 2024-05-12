import { useState, useEffect } from "react";
import styles from "./product.module.css";

const url = "https://fakestoreapi.com/products";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        // successful response
        const response = await fetch(url);
        const result = await response.json();
        // console.log("result", result);
        setProducts(result);
      } catch (error) {
        console.log(error);
      }
    };
    fetchProducts();
  }, []);
  // console.log("products", products);
  return (
    <div>
      <hr />
      <h1>Product List</h1>
      <div className={styles.cards}>
        {products.map((product) => {
          return (
            <div className={styles.card} key={product.id}>
              <img
                className={styles.productImage}
                src={product.image}
                alt="product image"
              />
              <div className={styles.cardBody}>
                <p>{product.description}</p>
                <span className={styles.price}>Price: {product.price}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Products;
