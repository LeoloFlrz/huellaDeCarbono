const axios = require("axios");

const url = "https://beta4.api.climatiq.io/estimate";
const authToken = "HDJRZGTJC7MPN4K1CQXW215A8Q47";

const data = {
  legs: [
    {
      from: origin,
      to: destination,
      passengers: passengers,
      class: travelClass,
    },
  ],
};

const config = {
  headers: {
    Authorization: `Bearer ${authToken}`,
    "Content-Type": "application/json",
  },
};

axios
  .post(url, data, config)
  .then((response) => {
    const result = response.data;
    console.log(result);
  })
  .catch((error) => {
    console.error(error);
  });
