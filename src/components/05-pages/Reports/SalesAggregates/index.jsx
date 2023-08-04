/*-------------------------------------------------*/
// IMPORT FROM DEPENDENCIES
/*-------------------------------------------------*/
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  XAxis,
  YAxis,
  Tooltip,
  Bar,
  ResponsiveContainer,
  BarChart,
} from "recharts";
import { Accordion } from "flowbite-react";

/*-------------------------------------------------*/
// IMPORT FROM PROJECT'S FILES
/*-------------------------------------------------*/
import { getSalesAggregates } from "../../../../store/slices/reports/thunks";
import { getAllCashiers } from "../../../../store/slices/manageCashiers/thunks";
import "./styles.css";
import { formatIDR } from "../../../../helpers/formatCurrency";

const dt = new Date();

export default function SalesAggregates() {
  const dispatch = useDispatch();
  const [date, setDate] = useState(dt.toISOString().split("T")[0]);
  const [chartType, setChartType] = useState("line");
  const [selectedCashier, setSelectedCashier] = useState("");

  const { salesAggregates, cashiers } = useSelector((state) => {
    return {
      salesAggregates: state.reports.salesAggregates,
      cashiers: state.cashiers.cashiersList.cashiers,
    };
  });

  useEffect(() => {
    dispatch(getSalesAggregates(`?date=${date}&username=${selectedCashier}`));
    dispatch(getAllCashiers(""));
  }, [dispatch]);

  const handleFilter = () => {
    dispatch(getSalesAggregates(`?date=${date}&username=${selectedCashier}`));
  };

  const formatTime = (dateString) => {
    const dateObj = new Date(dateString);
    return dateObj.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
      timeZone: "UTC",
    });
  };

  return (
    <>
      <div className="p-8">
        <h1 className="text-6xl text-center mb-6">Sales Aggregates</h1>
        <div className="flex justify-between space-x-5 p-8 bg-dnt-accent rounded-lg mb-7">
          <div></div>
          <div className="flex items-center space-x-10">
            <div className="flex items-center">
              <label className="text-2xl font-bold mr-4">Sales:</label>
              <select
                value={selectedCashier}
                onChange={(e) => setSelectedCashier(e.target.value)}
                className="text-2xl border-y border-y-slate-50 border-x-0 outline-none focus:outline-none"
              >
                <option value="">All Cashiers</option>
                {cashiers &&
                  cashiers.map((cashier) => (
                    <option value={cashier.username}>{cashier.username}</option>
                  ))}
              </select>
            </div>
            <div className="flex items-center">
              <label className="text-2xl font-bold mr-4">Date:</label>
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="bg-transparent text-2xl border-y border-y-slate-50 border-x-0 outline-none focus:outline-none"
              />
            </div>

            <button
              onClick={handleFilter}
              className="bg-dnt-main text-dnt-contrast py-2 px-4 rounded-lg"
            >
              Filter
            </button>
          </div>
        </div>
        <select
          className="text-2xl border-y border-y-slate-50 border-x-0 outline-none focus:outline-none"
          onChange={(e) => setChartType(e.target.value)}
          value={chartType ? chartType : "line"}
        >
          <option value="line">Line</option>
          <option value="bar">Bar</option>
        </select>
        <div className="w-full h-full flex justify-center py-7 px-5">
          {salesAggregates ? (
            <ResponsiveContainer width="100%" height={400}>
              {chartType === "line" ? (
                <LineChart
                  data={salesAggregates.transactions}
                  margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="created_at" tickFormatter={formatTime} />
                  <YAxis dataKey="total_transaction_price" />
                  <Tooltip />
                  <Legend />
                  <Line
                    type="monotone"
                    dataKey="total_transaction_price"
                    name="Total Sales"
                    stroke="#c9ada7"
                    fill="#c9ada7"
                  />
                </LineChart>
              ) : (
                <BarChart
                  data={salesAggregates.transactions}
                  margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="created_at" tickFormatter={formatTime} />
                  <YAxis dataKey="total_transaction_price" tickFormatter={formatIDR} />
                  <Tooltip />
                  <Legend />
                  <Bar
                    type="monotone"
                    dataKey="total_transaction_price"
                    name="Total Sales"
                    stroke="#c9ada7"
                    fill="#c9ada7"
                  />
                </BarChart>
              )}
            </ResponsiveContainer>
          ) : (
            <p className="text-lg mt-6">No sales data available.</p>
          )}
        </div>
        <div className="p-5">
          <table className="w-full table-auto">
            <thead className="bg-dnt-accent">
              <tr>
                <th className="p-2">Time</th>
                <th className="p-2">Total Sales</th>
                <th className="p-2">Products Sold</th>
              </tr>
            </thead>
            <tbody>
              {salesAggregates ? (
                salesAggregates.transactions.map((transaction) => (
                  <tr
                    key={transaction.date}
                    className="border-y border-dnt-accent"
                  >
                    <td className="text-center">
                      {formatTime(transaction.created_at)}
                    </td>
                    <td className="text-center">
                      {formatIDR(transaction.total_transaction_price)}
                    </td>
                    <td>
                      <Accordion collapseAll={true}>
                        <Accordion.Panel>
                          <Accordion.Title>Show Product Sold</Accordion.Title>
                          <Accordion.Content>
                            <ul>
                              <li key={transaction.id}>
                                <ul>
                                  {transaction.products.map((product) => (
                                    <li
                                      key={product.product_id}
                                      className="py-2"
                                    >
                                      <div className="flex items-center space-x-5">
                                        <img
                                          src={product.image}
                                          alt=""
                                          className="w-24 h-24 rounded-lg"
                                        />
                                        <div>
                                          <h1 className="text-2xl">
                                            {product.name}
                                          </h1>
                                          <h3 className="text-xl">
                                            Qty: {product.quantity}
                                          </h3>
                                        </div>
                                      </div>
                                    </li>
                                  ))}
                                </ul>
                              </li>
                            </ul>
                          </Accordion.Content>
                        </Accordion.Panel>
                      </Accordion>
                    </td>
                  </tr>
                ))
              ) : (
                <tr className="border-y border-dnt-accent">
                  <td className="text-center" colSpan={3}>
                    No sales data available.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
