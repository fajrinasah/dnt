/*-------------------------------------------------*/
// IMPORT FROM DEPENDENCIES
/*-------------------------------------------------*/

/*-------------------------------------------------*/
// IMPORT FROM PROJECT'S FILES
/*-------------------------------------------------*/
import { IoAdd, IoRemove } from "react-icons/io5";
import "./styles.css";

export default function QuantityStepper({ product, increase, reduce }) {
  return (
    <div className="flex space-x-2">
      <button className="p-2 rounded-full bg-dnt-main hover:bg-dnt-accent disabled:opacity-75 disabled:cursor-not-allowed" onClick={() => reduce(product.id)} disabled={product.quantity <= 1}>
        <IoRemove></IoRemove>
      </button>
      <h1 className="w-20 text-2xl flex items-center justify-center rounded-lg border border-slate-400 text-center">{product.quantity}</h1>
      <button className="p-2 rounded-full bg-dnt-main hover:bg-dnt-accent disabled:opacity-75 disabled:cursor-not-allowed" onClick={() => increase(product.id)}>
        <IoAdd></IoAdd>
      </button>
    </div>
  );
}
