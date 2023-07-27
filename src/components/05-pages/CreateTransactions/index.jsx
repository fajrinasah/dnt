/*-------------------------------------------------*/
// IMPORT FROM DEPENDENCIES
/*-------------------------------------------------*/
import { IoClose } from "react-icons/io5";
import { useState } from "react";

/*-------------------------------------------------*/
// IMPORT FROM PROJECT'S FILES
/*-------------------------------------------------*/
import ProductList from "../../04-templates/CreateTransactions/ProductList";
import "./styles.css";
import QuantityStepper from "../../02-molecules/CreateTransactions/QuantityStepper";
import { useDispatch } from "react-redux";
import { createTransactions } from "../../../store/slices/transactions/thunks";

const products = [
  {
    id: 3,
    name: "English Breakfast",
    image:
      "https://res.cloudinary.com/dpdgmr3xw/image/upload/v1689920075/products/english-breakfast_aayryh.jpg",
    description:
      "Start your day with a cup of english breakfast tea, a robust and full-bodied black tea blend. A classic choice for any tea lover.",
    price: 18000,
    product_status_id: 1,
    created_at: "2023-07-18T01:09:42.000Z",
    updated_at: "2023-07-18T01:09:42.000Z",
  },
  {
    id: 4,
    name: "Blood Orange",
    image:
      "https://res.cloudinary.com/dpdgmr3xw/image/upload/v1689920155/products/blood-orange_fkcv7i.jpg",
    description:
      "Sip the sunshine with blood orange tea, a refreshing herbal blend of citrus, hibiscus and rose hips.",
    price: 20000,
    product_status_id: 1,
    created_at: "2023-07-18T01:39:18.000Z",
    updated_at: "2023-07-18T01:39:18.000Z",
  },
  {
    id: 5,
    name: "Orange Spice",
    image:
      "https://res.cloudinary.com/dpdgmr3xw/image/upload/v1689920168/products/orange-spices_kqsjin.jpg",
    description:
      "Warm up with a cup of orange spice tea, a fragrant and flavorful black tea blend with orange peel and spices. A cozy and comforting brew.",
    price: 20000,
    product_status_id: 1,
    created_at: "2023-07-18T04:20:02.000Z",
    updated_at: "2023-07-18T04:20:02.000Z",
  },
  {
    id: 9,
    name: "Decaf English Breakfast",
    image:
      "https://res.cloudinary.com/dpdgmr3xw/image/upload/v1690266971/products/ez29uuvcudkpcwfqbyyk.jpg",
    description:
      "Relish the rich and full-bodied flavor of Decaf English Breakfast tea, a classic black tea blend without the caffeine. A satisfying and robust brew.",
    price: 24000,
    product_status_id: 1,
    created_at: "2023-07-25T06:03:14.000Z",
    updated_at: "2023-07-25T06:37:27.000Z",
  },
];

export function CreateTransactions() {
  const [cartItems, setCartItems] = useState([]);

  const dispatch = useDispatch();

  const addToCart = (product) => {
    // Check if the product is already in the cart
    const existingItem = cartItems.find((item) => item.id === product.id);

    if (existingItem) {
      // If the product is already in the cart, update the quantity
      setCartItems((prevCartItems) =>
        prevCartItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      // If the product is not in the cart, add it with a quantity of 1
      setCartItems((prevCartItems) => [
        ...prevCartItems,
        { ...product, quantity: 1 },
      ]);
    }

    console.log(cartItems);
  };

  const removeFromCart = (productId) => {
    setCartItems((prevCartItems) =>
      prevCartItems.filter((item) => item.id !== productId)
    );
  };

  const increaseQuantity = (productId) => {
    setCartItems((prevCartItems) =>
      prevCartItems.map((item) =>
        item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const reduceQuantity = (productId) => {
    setCartItems((prevCartItems) =>
      prevCartItems.map((item) =>
        item.id === productId
          ? { ...item, quantity: Math.max(0, item.quantity - 1) }
          : item
      )
    );
  };

  const calculateTotalPrice = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  const handleCheckout = () => {
    const cart = cartItems.map(({ id, quantity }) => ({
      product_id: id,
      quantity,
    }));

    dispatch(createTransactions({ products: cart }));

    setCartItems([]);
  };

  return (
    <div className="flex space-x-10">
      <div className="w-[75%] grid grid-cols-4 gap-10">
        <ProductList
          products={products}
          addToCart={addToCart} // Pass the addToCart function as a prop
        />
      </div>
      <div className="w-[25%] p-5 space-y-10">
        <div className="w-full py-2 border-b-2 border-dnt-main">
          <h1 className="text-4xl text-dnt-contrast font-semibold">My Order</h1>
        </div>

        {cartItems.map((item) => (
          <div className="pb-2 border-b border-dnt-main">
            <div key={"ct" + item.id} className="grid grid-cols-12 gap-3 mb-3">
              <div className="col-span-11">
                <div className="flex space-x-5 bg-dnt-main rounded-lg p-5 mb-5">
                  <div className="w-20 h-20 2xl:w-28 2xl:h-28 bg-white rounded-lg overflow-hidden">
                    <img
                      className="object-cover object-center w-full h-full"
                      src={item.image}
                      alt={item.name}
                    />
                  </div>
                  <div>
                    <h1 className="text-xl 2xl:text-2xl leading-snug font-semibold">
                      {item.name}
                    </h1>
                    <span className="text-xl">Rp {item.price}</span>
                  </div>
                </div>
                <div className="flex justify-between">
                  <QuantityStepper
                    key={"qs" + item.id}
                    product={item}
                    increase={increaseQuantity}
                    reduce={reduceQuantity}
                  />
                  <span className="text-xl font-semibold">
                    Rp {item.price * item.quantity}
                  </span>
                </div>
              </div>
              <div className="flex justify-center">
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="w-fit h-fit rounded-lg p-3 bg-dnt-main"
                >
                  <IoClose />
                </button>
              </div>
            </div>
          </div>
        ))}

        {cartItems.length > 0 && (
          <div>
            <div className="w-full flex justify-between">
              <span className="text-xl">Total:</span>
              <span className="text-xl font-semibold">
                Rp {calculateTotalPrice()}
              </span>
            </div>
            <button className="bg-dnt-contrast p-2" onClick={handleCheckout}>
              Checkout
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
