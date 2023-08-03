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
  PieChart,
  Pie,
  Cell,
} from "recharts";

/*-------------------------------------------------*/
// IMPORT FROM PROJECT'S FILES
/*-------------------------------------------------*/
import "./styles.css";
import {
  createSalesReports,
  getProductsSold,
} from "../../../../store/slices/reports/thunks";
import { formatIDR } from "../../../../helpers/formatCurrency";

export default function ProductSold() {
  const dispatch = useDispatch();
  const [chartType, setChartType] = useState("line");

  const { productsSold } = useSelector((state) => {
    return {
      productsSold: state.reports.productsSold,
    };
  });

  useEffect(() => {
    dispatch(getProductsSold(""));
  }, [dispatch]);

  function getRandomHexColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";

    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }

    return color;
  }

  const formatDataForPieChart = () => {
    return productsSold.map((product) => ({
      name: product.name,
      value: product.quantity,
      fill: getRandomHexColor(),
    }));
  };

  const formatDataForBarChart = () => {
    return productsSold.map((product) => ({
      name: product.name,
      quantity: product.quantity,
      fill: getRandomHexColor(),
    }));
  };

  return (
    <>
      <div className="p-8">
        <h1 className="text-6xl text-center mb-6">Products Sold</h1>
        <div className="flex justify-between space-x-5 p-8 bg-dnt-accent rounded-lg mb-7">
          <div></div>
          <div className="flex items-center space-x-10">
            {/* <div className="flex items-center">
              <label className="text-2xl font-bold mr-4">Start Date:</label>
              <input
                type="date"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                className="bg-transparent text-2xl border-y border-y-slate-50 border-x-0 outline-none focus:outline-none"
              />
            </div>
            <div className="flex items-center">
              <label className="text-2xl font-bold mr-4">End Date:</label>
              <input
                type="date"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
                className="bg-transparent text-2xl border-y border-y-slate-50 border-x-0 outline-none focus:outline-none"
              />
            </div> */}

            {/* <button
              onClick={handleFilter}
              className="bg-dnt-main text-dnt-contrast py-2 px-4 rounded-lg"
            >
              Filter
            </button> */}
          </div>
        </div>
        <select
          className="text-2xl border-y border-y-slate-50 border-x-0 outline-none focus:outline-none"
          onChange={(e) => setChartType(e.target.value)}
          value={chartType ? chartType : "line"}
        >
          <option value="line">Line</option>
          <option value="bar">Bar</option>
          <option value="pie">Pie</option>
        </select>
        <div className="w-full h-full flex justify-center py-7 px-5">
          {productsSold && productsSold.length > 0 ? (
            <ResponsiveContainer width="100%" height={400}>
              {(() => {
                if (chartType === "line") {
                  return (
                    <LineChart
                      data={productsSold}
                      margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                      }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis dataKey="quantity" />
                      <Tooltip />
                      <Legend />
                      <Line
                        type="monotone"
                        dataKey="quantity"
                        name="Total Sold"
                        stroke="#c9ada7"
                        fill="#c9ada7"
                      />
                    </LineChart>
                  );
                } else if (chartType === "bar") {
                  return (
                    <BarChart
                      data={formatDataForBarChart()} // Use the formatted data here
                      margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                      }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis dataKey="quantity" />
                      <Tooltip />
                      <Bar
                        type="monotone"
                        dataKey="quantity"
                        name="Total Sold"
                      >
                        {formatDataForBarChart().map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.fill} />
                        ))}
                      </Bar>
                    </BarChart>
                  );
                } else if (chartType === "pie") {
                  return (
                    <PieChart
                      margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                      }}
                    >
                      <Tooltip />
                      <Pie
                        cx="50%"
                        cy="50%"
                        data={formatDataForPieChart()} // Use the formatted data here
                        dataKey="value"
                        nameKey="name"
                        label="name"
                      >
                        {formatDataForPieChart().map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.fill} />
                        ))}
                      </Pie>
                    </PieChart>
                  );
                }
              })()}
            </ResponsiveContainer>
          ) : (
            <p className="text-lg mt-6">No sales data available.</p>
          )}
        </div>
        <div className="p-5">
          <table class="w-full table-auto">
            <thead className="bg-dnt-accent">
              <tr>
                <th className="p-2">Image</th>
                <th className="p-2">Name</th>
                <th className="p-2">Total Sold</th>
                <th className="p-2">Total Sales(Revenue)</th>
              </tr>
            </thead>
            <tbody>
              {productsSold ? (
                productsSold.map((v) => (
                  <tr className="border-y border-dnt-accent" key={v.id}>
                    <td className="flex justify-center items-center">
                      <img
                        src={v.image}
                        alt=""
                        className="w-28 h-28 rounded-lg"
                      />
                    </td>
                    <td className="text-center">{v.name}</td>
                    <td className="text-center">{v.quantity}</td>
                    <td className="text-center">
                      {formatIDR(v.total_product_price)}
                    </td>
                  </tr>
                ))
              ) : (
                <tr className="border-y border-dnt-accent">
                  <td className="text-center" colSpan={2}>
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
