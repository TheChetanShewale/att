import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import "./styles.css";

import Divider from "../../components/divider";

const Performance = () => {
  const [updatedDate, setUpdatedDate] = useState("12th Jan 2024");
  const [data, setData] = useState([
    {
      symbol: "RVNL.NS",
      scrip: "RVNL",
      entryPrice: 34,
      //entryDate: "20 Apr 2023",
      entryDate: "Oct 2021",
      status: "closed",
      exitPrice: 135,
      exitDate: "May 2023",
      currentPrice: 203.25,
      roi: null,
    },
    {
      symbol: "ADANIPOWER.NS",
      scrip: "Adani Power",
      entryPrice: 195.9,
      //entryDate: "20 Apr 2023",
      entryDate: "April 2023",
      status: "active",
      exitPrice: null,
      exitDate: null,
      currentPrice: 541.15,
      roi: null,
    },
    {
      symbol: "GREENPOWER.NS",
      scrip: "Green Power",
      entryPrice: 11.26,
      //entryDate: "25 Jul 2023",
      entryDate: "July 2023",
      status: "active",
      exitPrice: null,
      exitDate: null,
      currentPrice: 23.80,
      roi: null,
    },
    {
      symbol: "IRB.NS",
      scrip: "IRB Infra Dev Ltd.",
      entryPrice: 34.04,
      //entryDate: "11 Sep 2023",
      entryDate: "September 2023",
      status: "active",
      exitPrice: null,
      exitDate: null,
      currentPrice: 46.05,
      roi: null,
    },
    {
      symbol: "INFOBEAN.NS",
      scrip: "Infobeans Technologies Ltd.",
      entryPrice: 461.2,
      entryDate: "September 2023",
      status: "active",
      exitPrice: null,
      exitDate: null,
      currentPrice: 456.25,
      roi: null,
    },
  ]);

  const [indexData, setIndexData] = useState([
    {
      scrip: "Nifty 50",
      entryPrice: 20200,
      //entryDate: "20 Apr 2023",
      entryDate: "December 2023 (First Week)",
      status: "closed",
      exitPrice: 21500,
      exitDate: "January 2024 (First Week)",
      currentPrice: 21513,
      roi: null,
    },
  ]);

  const calculateROI = (buyPrice, currentPrice) => {
    // Ensure that the inputs are numbers
    if (typeof currentPrice !== "number" || typeof buyPrice !== "number") {
      throw new Error("Both currentPrice and buyPrice must be numbers");
    }

    // Calculate ROI
    const roi = ((currentPrice - buyPrice) / buyPrice) * 100;

    return Number.isInteger(roi) ? roi.toFixed(0) : roi.toFixed(2);
  };

  const fetchData = async (entry, epoch) => {
    try {
      const response = await fetch(
        `https://query1.finance.yahoo.com/v8/finance/chart/${entry.symbol}?date=${epoch}`
      );
      const jsonData = await response.json();
      const currentPrice = jsonData?.chart?.result[0]?.meta?.regularMarketPrice;
      return currentPrice;
    } catch (error) {
      console.error("Error fetching data from API:", error);
      return entry.entryPrice;
    }
  };

  useEffect(() => {
    //const epoch = Math.floor(Date.now() / 1000);
    const updateCurrentStockPrices = async () => {
      const updatedData = await Promise.all(
        data.map(async (entry) => {
          //const currentPrice = await fetchData(entry, epoch);
          const roi = calculateROI(
            entry.entryPrice,
            entry.exitPrice ? entry.exitPrice : entry.currentPrice
          );
          return { ...entry, roi };
        })
      );
      setData(updatedData);
    };

    const updateCurrentIndexPrices = async () => {
      const updatedData = await Promise.all(
        indexData.map(async (entry) => {
          //const currentPrice = await fetchData(entry, epoch);
          const roi = calculateROI(
            entry.entryPrice,
            entry.exitPrice ? entry.exitPrice : entry.currentPrice
          );
          return { ...entry, roi };
        })
      );
      setIndexData(updatedData);
    };

    // Call the function to update current prices
    updateCurrentStockPrices();
    updateCurrentIndexPrices();
  }, []);

  return (
    <div className="container-fluid">
      <div className="row justify-content-center">
        {/* Left Column */}
        <div className="col-sm-1 d-none d-sm-block" />
        {/* Center Column */}
        <div className="col-sm-10">
          {/* First Section */}
          <div className="mt-4 enable-scroll">
            <h4 className="medium">
              Recent Positional/Long Term Trades (Stocks)
            </h4>
            <div className="closing-desc mb-2">{`Closing price updated on: ${updatedDate}, Current price may be different as we update the closing price during periodic maintainance.`}</div>
            <table className="table table-bordered text-center">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Scrip</th>
                  <th scope="col">Entry Date</th>
                  <th scope="col">Status</th>
                  <th scope="col">Entry Price</th>
                  <th scope="col">Closing Price</th>
                  <th scope="col">RoI</th>
                  <th scope="col">Exit Price</th>
                  <th scope="col">Exit Date</th>
                </tr>
              </thead>
              <tbody>
                {data.map((entry, index) => (
                  <tr key={index}>
                    <th scope="row">{index + 1}</th>
                    <td>{entry.scrip}</td>
                    <td>{entry.entryDate}</td>
                    <td>
                      <div className={entry.status}>{entry.status}</div>
                    </td>
                    <td>{entry.entryPrice}</td>
                    <td>
                      {entry.currentPrice === null
                        ? "Loading..."
                        : entry.currentPrice}
                    </td>
                    <td>
                      <div className={entry.roi > 0 ? "profit" : "loss"}>
                        {entry.roi === null ? "Loading..." : `${entry.roi} %`}
                      </div>
                    </td>
                    <td>{entry.status === "active" ? "-" : entry.exitPrice}</td>
                    <td>{entry.status === "active" ? "-" : entry.exitDate}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-2 enable-scroll">
            <h4 className="medium">
              Recent Positional Trades (Indices - Spot Price)
            </h4>
            <div className="closing-desc mb-2">{`Closing price updated on: ${updatedDate}, Current price may be different as we update the closing price during periodic maintainance.`}</div>
            <table className="table table-bordered text-center">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Index</th>
                  <th scope="col">Entry Date</th>
                  <th scope="col">Status</th>
                  <th scope="col">Entry Price</th>
                  <th scope="col">Closing Price</th>
                  <th scope="col">RoI</th>
                  <th scope="col">Exit Price</th>
                  <th scope="col">Exit Date</th>
                </tr>
              </thead>
              <tbody>
                {indexData.map((entry, index) => (
                  <tr key={index}>
                    <th scope="row">{index + 1}</th>
                    <td>{entry.scrip}</td>
                    <td>{entry.entryDate}</td>
                    <td>
                      <div className={entry.status}>{entry.status}</div>
                    </td>
                    <td>Around {entry.entryPrice}</td>
                    <td>
                      {entry.currentPrice === null
                        ? "Loading..."
                        : entry.currentPrice}
                    </td>
                    <td>
                      <div className={entry.roi > 0 ? "profit" : "loss"}>
                        {entry.roi === null ? "Loading..." : `${entry.roi} %`}
                      </div>
                    </td>
                    <td>
                      {entry.status === "active"
                        ? "-"
                        : `Around ${entry.exitPrice}`}
                    </td>
                    <td>{entry.status === "active" ? "-" : entry.exitDate}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="closing-desc">
            <span className="fw-bold">Note:</span> Past performance is not a
            gurantee of the future performance.{" "}
            <span className="text-decoration-underline">
              The ideas here are to showcase our analysis quality and
              transparency.
            </span>
            <span className="fw-bold"> This not an investment advice.</span>
          </p>
          <Divider classes={"mt-4 mb-4"} />
        </div>
        {/* Right Column */}
        <div className="col-sm-1 d-none d-sm-block" />
      </div>
    </div>
  );
};

export default Performance;
