import React from "react";

function StockApi() {
  const axios = require("axios");

  const options = {
    method: "GET",
    url: "https://yahoo-finance15.p.rapidapi.com/api/yahoo/hi/history/AAPL/15m",
    params: { diffandsplits: "false" },
    headers: {
      "X-RapidAPI-Key": "99de303d9amshfddd63bdeb7c3aap12c3ecjsnfd3ff273142d",
      "X-RapidAPI-Host": "yahoo-finance15.p.rapidapi.com",
    },
  };
  axios
    .request(options)
    .then(function (response) {
      console.log(response.data);
    })
    .catch(function (error) {
      console.error(error);
    });
  return (
    <div>
      StockApi
      <h1>kirtan</h1>
    </div>
  );
}

export default StockApi;
