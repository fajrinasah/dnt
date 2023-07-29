/*-------------------------------------------------*/
// IMPORT FROM DEPENDENCIES
/*-------------------------------------------------*/

/*-------------------------------------------------*/
// IMPORT FROM PROJECT'S FILES
/*-------------------------------------------------*/
import { IoBagAddOutline, IoCart } from "react-icons/io5";
import "./styles.css";

export default function CardProduct({
  name,
  category,
  price,
  image,
  addToCart,
}) {
  return (
    <div className="w-full flex justify-center items-center">
      <div className="w-full h-[30rem] max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden transition ease-in duration-100 hover:shadow-lg">
        <div className="w-full h-72 flex justify-center bg-black">
          <img
            className="object-cover object-center w-full h-full"
            src={image}
            alt=""
          />
        </div>
        <div className="px-5 py-5 space-y-5">
          {/* <a href="/">
            <h5 className="text-lg font-semibold tracking-tight text-gray-900">
              {category}
            </h5>
          </a> */}
          <div>
            <h5 className="text-2xl font-semibold tracking-tight text-gray-900">
              {name}
            </h5>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-3xl font-bold text-dnt-contrast">
              Rp {price}
            </span>
            <div className="flex items-center justify-between">
              <button
                onClick={addToCart}
                className="text-dnt-accent text-2xl bg-dnt-main rounded-lg p-2 transition-all ease-in duration-100 hover:bg-dnt-accent hover:text-orange-950"
              >
                <IoBagAddOutline></IoBagAddOutline>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
