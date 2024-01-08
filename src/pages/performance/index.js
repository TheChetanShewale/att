import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import "./styles.css";

const Performance = () => {
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
      currentPrice: null,
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
      currentPrice: null,
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
      currentPrice: null,
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
      currentPrice: null,
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
      currentPrice: null,
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
    const epoch = Math.floor(Date.now() / 1000);
    const updateCurrentPrices = async () => {
      const updatedData = await Promise.all(
        data.map(async (entry) => {
          const currentPrice = await fetchData(entry, epoch);
          const roi = calculateROI(
            entry.entryPrice,
            entry.exitPrice ? entry.exitPrice : currentPrice
          );
          return { ...entry, currentPrice, roi };
        })
      );
      setData(updatedData);
    };

    // Call the function to update current prices
    updateCurrentPrices();
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
            <h3 className="medium">PT</h3>
            <table className="table table-bordered text-center">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Scrip</th>
                  <th scope="col">Entry Date</th>
                  <th scope="col">Status</th>
                  <th scope="col">Entry Price</th>
                  <th scope="col">Current Price</th>
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
        </div>
        {/* Right Column */}
        <div className="col-sm-1 d-none d-sm-block" />
      </div>
    </div>
  );
};

export default Performance;
