/*-------------------------------------------------*/
// IMPORT FROM DEPENDENCIES
/*-------------------------------------------------*/
import { IoClose } from "react-icons/io5";
import { useEffect, useState } from "react";

/*-------------------------------------------------*/
// IMPORT FROM PROJECT'S FILES
/*-------------------------------------------------*/
import ProductList from "../../04-templates/CreateTransactions/ProductList";
import "./styles.css";
import QuantityStepper from "../../02-molecules/CreateTransactions/QuantityStepper";
import { useDispatch, useSelector } from "react-redux";
import { createTransactions } from "../../../store/slices/transactions/thunks";
import Search from "../../02-molecules/CreateTransactions/Search";
import { Button, Modal, Select } from "flowbite-react";
import { getAllProducts } from "../../../store/slices/manageProducts/thunks";

const products = [
  {
    id: 21,
    name: "Witch Blend",
    image:
      "https://res.cloudinary.com/dpdgmr3xw/image/upload/v1690301022/products/ygqvxevgbab4llu5wuxa.jpg",
    description:
      "A magical tea with a blend of hibiscus, orange peel, peppermint, blackberry leaves, and sunflower petals. A refreshing and fruity treat for any occasion. Brew it with hot water and enjoy its enchanting aroma and flavor.",
    price: 22000,
    product_status_id: 2,
    created_at: "2023-07-25T16:03:42.000Z",
    updated_at: "2023-07-25T16:10:27.000Z",
  },
  {
    id: 10,
    name: "Vanilla",
    image:
      "https://res.cloudinary.com/dpdgmr3xw/image/upload/v1690281692/products/nve6ahngf7al1ns47tyn.jpg",
    description:
      "A soft and fluffy donut with a sweet vanilla glaze that melts in your mouth. A classic treat for any occasion.",
    price: 12000,
    product_status_id: 1,
    created_at: "2023-07-25T10:41:32.000Z",
    updated_at: "2023-07-25T10:41:32.000Z",
  },
  {
    id: 22,
    name: "Tranquility",
    image:
      "https://res.cloudinary.com/dpdgmr3xw/image/upload/v1690301059/products/sn1srlonbaupq9rg3rag.jpg",
    description:
      "A soothing tea with a blend of chamomile and mint. A calming and refreshing treat for any time of the day. Enjoy it with honey or lemon for a sweet and zesty flavor.",
    price: 20000,
    product_status_id: 1,
    created_at: "2023-07-25T16:04:19.000Z",
    updated_at: "2023-07-25T16:04:19.000Z",
  },
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
    id: 7,
    name: "Rain Flower Needle",
    image:
      "https://res.cloudinary.com/dpdgmr3xw/image/upload/v1690184594/products/iecyllfnhdzrnkc15bup.jpg",
    description:
      "Enjoy the delicate and refreshing taste of Rain Flower Needle, a rare green tea handcrafted into thin needles. A true artisanal tea.",
    price: 24000,
    product_status_id: 1,
    created_at: "2023-07-24T07:43:13.000Z",
    updated_at: "2023-07-24T07:43:13.000Z",
  },
  {
    id: 8,
    name: "Pink Cotton Candy",
    image:
      "https://res.cloudinary.com/dpdgmr3xw/image/upload/v1690187963/products/b1lz2tgfugjxybpcjqve.jpg",
    description:
      "A soft and sweet donut covered with pink cotton candy glaze and sugar crystals.",
    price: 14000,
    product_status_id: 2,
    created_at: "2023-07-24T08:13:33.000Z",
    updated_at: "2023-07-24T08:55:46.000Z",
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
    id: 23,
    name: "Matcha Latte",
    image:
      "https://res.cloudinary.com/dpdgmr3xw/image/upload/v1690301114/products/nt5hobfyj0vgqmmcrfuh.jpg",
    description:
      "A creamy and frothy drink with a blend of matcha green tea and milk.",
    price: 20000,
    product_status_id: 1,
    created_at: "2023-07-25T16:05:15.000Z",
    updated_at: "2023-07-25T16:05:15.000Z",
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
];

export function CreateTransactions() {
  const [sort, setSort] = useState(true);
  const [cartItems, setCartItems] = useState([]);
  const [searchQuery, setSearchQuery] = useState([]);
  const [openModal, setOpenModal] = useState(false);

  const { productz } = useSelector((state) => {
    return {
      productz: state.products
    }
  })

  console.log(productz)

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProducts({ 
      page: 1,
      sort: sort ? "ASC" : "DESC",
    }));
  }, [dispatch])

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

  const handleSearch = (query) => {
    setSearchQuery(query);
    console.log(query);
  };

  const toggleSlidingAnimation = () => {
    return cartItems.length > 0 ? "block" : "hidden";
  };

  const handleCancel = () => {
    setCartItems([]);
  };

  return (
    <>
      <div className="transition-all duration-200 ease-in-out">
        <div className="w-full flex space-x-10 overflow-hidden">
          <div
            className={`${
              cartItems.length > 0 ? "w-[75%]" : "w-full"
            } p-5 space-y-10`}
          >
            <div className="flex p-5 bg-dnt-accent rounded-lg">
              <Search onSearch={handleSearch}></Search>
            </div>
            <div>
              <div className="flex justify-between">
                <div></div>
                <Select>
                  <option>Name</option>
                  <option>Time</option>
                  <option>Price</option>
                </Select>
              </div>
              <div className="grid grid-cols-2 lg:grid-cols-4 justify-center items-center gap-5">
                <ProductList products={products} addToCart={addToCart} />
              </div>
            </div>
            <div className="p-5">
              <hr className="bg-dnt-accent"/>
            </div>
            <div className="flex justify-center items-center p-2 space-x-10">
              <button className="w-44 text-dnt-accent text-3xl border border-dnt-accent rounded-lg py-3 transition-all ease-in duration-100 hover:bg-dnt-accent hover:text-orange-950">
                Previous
              </button>
              <button className="w-44 text-dnt-accent text-3xl border border-dnt-accent rounded-lg py-3 transition-all ease-in duration-100 hover:bg-dnt-accent hover:text-orange-950">
                Next
              </button>
            </div>
          </div>
          <div
            className={`fixed w-40% lg:w-[25%] h-screen bg-white right-0 p-5 space-y-10 transition-all duration-300 ${toggleSlidingAnimation()}`}
          >
            <div className="w-full py-2 border-b-2 border-dnt-main">
              <h1 className="text-4xl text-dnt-contrast font-semibold">Cart</h1>
            </div>

            <div className="h-[75vh] overflow-y-auto overflow-x-hidden p-2">
              {cartItems.map((item) => (
                <div className="py-2 border-b border-dnt-main">
                  <div
                    key={"ct" + item.id}
                    className="grid grid-cols-12 gap-3 mb-3"
                  >
                    <div className="col-span-10">
                      <div className="flex space-x-5 bg-dnt-main rounded-lg p-4 2xl:p-5 mb-5">
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
                    <div className="flex justify-center col-span-2">
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
            </div>

            {cartItems.length > 0 && (
              <div>
                <div className="w-full flex justify-between mb-5">
                  <h1 className="text-xl">Total:</h1>
                  <h1 className="text-xl font-semibold">
                    Rp {calculateTotalPrice()}
                  </h1>
                </div>
                <div className="flex space-x-5">
                  <button
                    className="bg-dnt-main text-dnt-contrast p-2 rounded-lg transition ease-in duration-200 hover:bg-dnt-accent"
                    onClick={handleCheckout}
                  >
                    Checkout
                  </button>
                  <button
                    className="bg-dnt-main text-dnt-contrast p-2 rounded-lg transition ease-in duration-200 hover:bg-dnt-accent"
                    onClick={handleCancel}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
