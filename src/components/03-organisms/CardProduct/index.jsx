/*-------------------------------------------------*/
// IMPORT FROM DEPENDENCIES
/*-------------------------------------------------*/

/*-------------------------------------------------*/
// IMPORT FROM PROJECT'S FILES
/*-------------------------------------------------*/
import "./styles.css";

export default function CardProduct({ name, category, price, image, addToCart }) {
  return (
    <div className="w-full h-[30rem] max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden transition ease-in duration-100 hover:scale-[1.01] hover:shadow-xl">
      <div className="w-full h-72 flex justify-center bg-black">
        <img
          className="object-cover object-center w-full h-full"
          src={image}
          alt=""
        />
      </div>
      <div className="px-5 py-5">
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
        <span className="text-3xl font-bold text-dnt-contrast">Rp {price}</span>
        <div className="flex items-center justify-between">
          <button onClick={addToCart} className="text-dnt-main bg-dnt-contrast rounded-lg p-1">
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}
