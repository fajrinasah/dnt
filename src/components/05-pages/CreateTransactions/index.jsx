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
    id: 11,
    name: "Rocky",
    image:
      "https://res.cloudinary.com/dpdgmr3xw/image/upload/v1690281758/products/pitmggtlwj3fm63oendh.jpg",
    description:
      "A crunchy and nutty donut with chunks of roasted peanuts in the dough and on the glaze. A satisfying treat for peanut lovers.",
    price: 14000,
    product_status_id: 1,
    created_at: "2023-07-25T10:42:38.000Z",
    updated_at: "2023-07-25T10:42:38.000Z",
  },
  {
    id: 12,
    name: "Little Surprise",
    image:
      "https://res.cloudinary.com/dpdgmr3xw/image/upload/v1690281983/products/clobv3rbquw4d9fuyicy.jpg",
    description:
      "A surprise donut that changes every day and has limited quantity per day. A unique treat for adventurous donut lovers. Come early and try it before it runs out. You never know what you’ll get.",
    price: 18000,
    product_status_id: 2,
    created_at: "2023-07-25T10:46:24.000Z",
    updated_at: "2023-07-25T16:10:19.000Z",
  },
  {
    id: 13,
    name: "Choco Rose",
    image:
      "https://res.cloudinary.com/dpdgmr3xw/image/upload/v1690300477/products/fgoqrckutzun9chrkk43.jpg",
    description:
      "A decadent donut with a rich chocolate glaze and a delicate rose flavor. A romantic treat for chocolate and flower lovers. Sprinkled with edible rose petals for a beautiful touch.",
    price: 16000,
    product_status_id: 1,
    created_at: "2023-07-25T15:54:37.000Z",
    updated_at: "2023-07-25T15:54:37.000Z",
  },
  {
    id: 14,
    name: "Cappuccino",
    image:
      "https://res.cloudinary.com/dpdgmr3xw/image/upload/v1690300637/products/ovvnykfj6wgcx6lro4sp.jpg",
    description:
      "A scrumptious donut with a creamy cappuccino glaze and a sprinkle of fine sugar on top. A perfect treat for coffee and donut lovers.",
    price: 16000,
    product_status_id: 1,
    created_at: "2023-07-25T15:57:17.000Z",
    updated_at: "2023-07-25T15:57:17.000Z",
  },
  {
    id: 15,
    name: "Classic Snow",
    image:
      "https://res.cloudinary.com/dpdgmr3xw/image/upload/v1690300693/products/v9ldnou2mudveezlsfci.jpg",
    description:
      "A simple but delicious donut with a golden crust and a soft interior. A timeless treat for any occasion. Sprinkled with fine sugar on top for a touch of sweetness.",
    price: 12000,
    product_status_id: 1,
    created_at: "2023-07-25T15:58:13.000Z",
    updated_at: "2023-07-25T15:58:13.000Z",
  },
  {
    id: 16,
    name: "Choco Cashew",
    image:
      "https://res.cloudinary.com/dpdgmr3xw/image/upload/v1690300766/products/rlvn09ptnqqcibcrz7ry.jpg",
    description:
      "A heavenly donut with a luscious chocolate cream and crunchy cashew nuts. A nutty treat for chocolate and cashew lovers. Drizzled with caramel sauce for an extra indulgence.",
    price: 16000,
    product_status_id: 1,
    created_at: "2023-07-25T15:59:26.000Z",
    updated_at: "2023-07-25T15:59:26.000Z",
  },
  {
    id: 17,
    name: "Blueberry",
    image:
      "https://res.cloudinary.com/dpdgmr3xw/image/upload/v1690300829/products/mpt0hv9pklvutn44fabe.jpg",
    description:
      "A juicy donut with a burst of blueberry jam in every bite. A fruity treat for blueberry and donut lovers. Coated with powdered sugar for a snowy effect.",
    price: 14000,
    product_status_id: 1,
    created_at: "2023-07-25T16:00:29.000Z",
    updated_at: "2023-07-25T16:00:29.000Z",
  },
  {
    id: 18,
    name: "Chocolate",
    image:
      "https://res.cloudinary.com/dpdgmr3xw/image/upload/v1690300902/products/zxcnmmp86ixar6ysluzm.jpg",
    description:
      "A rich and gooey donut with a dark chocolate jam in the middle. A dreamy treat for chocolate and donut lovers. ",
    price: 14000,
    product_status_id: 1,
    created_at: "2023-07-25T16:01:42.000Z",
    updated_at: "2023-07-25T16:01:42.000Z",
  },
  {
    id: 19,
    name: "Bubblegum",
    image:
      "https://res.cloudinary.com/dpdgmr3xw/image/upload/v1690300941/products/bv9ohmhwdjomjnbvcewn.jpg",
    description:
      "A fun and colorful donut with a bubblegum flavor and a chewy texture. A playful treat for kids and adults alike.",
    price: 14000,
    product_status_id: 1,
    created_at: "2023-07-25T16:02:21.000Z",
    updated_at: "2023-07-25T16:02:21.000Z",
  },
  {
    id: 20,
    name: "Decaf Earl Grey",
    image:
      "https://res.cloudinary.com/dpdgmr3xw/image/upload/v1690300987/products/ulb82at6nmburrijqa5o.jpg",
    description:
      "A fun and colorful donut with a bubblegum flavor and a chewy texture. A playful treat for kids and adults alike.",
    price: 18000,
    product_status_id: 1,
    created_at: "2023-07-25T16:03:08.000Z",
    updated_at: "2023-07-25T16:03:08.000Z",
  },
];

export function CreateTransactions() {
  const [cartItems, setCartItems] = useState([]);

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

  const dispatch = useDispatch();

  const handleCheckout = () => {
    const cart = cartItems.map(({ id, quantity }) => ({ product_id: id, quantity }));

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
            <button className="bg-dnt-contrast p-2" onClick={handleCheckout}>Checkout</button>
          </div>
        )}

      </div>
    </div>
  );
}
