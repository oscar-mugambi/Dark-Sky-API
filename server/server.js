const express = require("express");
const app = express();
const fetch = require("node-fetch");
const port = 5000;

app.listen(port, () => console.log("Server started"));

app.get("/weather/:location", async (request, response) => {
  const location = request.params.location.split(",");

  console.log(location[2]);

  if (location[2]) {
    const lat = location[0];
    const lon = location[1];
    const date = location[2];
    const api_url = `https://api.darksky.net/forecast/a94db762f9872b8cb7601a2b6562f958/${lat},${lon},${date}`;
    const api_uri = api_url.concat("?units=ca");
    const fetch_response = await fetch(api_uri);
    const json = await fetch_response.json();
    response.json(json);
  } else {
    const lat = location[0];
    const lon = location[1];
    const api_url = `https://api.darksky.net/forecast/a94db762f9872b8cb7601a2b6562f958/${lat},${lon}`;
    const api_uri = api_url.concat("?units=ca");
    const fetch_response = await fetch(api_uri);
    const json = await fetch_response.json();

    response.json(json);
    console.log("more values", json);
  }
});
