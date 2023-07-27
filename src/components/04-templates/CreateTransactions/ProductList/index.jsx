/*-------------------------------------------------*/
// IMPORT FROM DEPENDENCIES
/*-------------------------------------------------*/

/*-------------------------------------------------*/
// IMPORT FROM PROJECT'S FILES
/*-------------------------------------------------*/
import CardProduct from "../../../03-organisms/CardProduct";
import "./styles.css";

export default function ProductList({ products, addToCart }) {
  return products.map((product) => {
    return (
      <CardProduct
        key={'cp' + product.id}
        category={product.category ? product.category : "YYYY"}
        name={product.name}
        price={product.price}
        image={product.image}
        addToCart={() => addToCart(product)} // Pass addToCart function as a prop
      />
    );
  });
}
