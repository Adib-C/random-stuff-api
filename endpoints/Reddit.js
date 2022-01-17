function getReddit(
  authorizations,
  rapidAPIHosts,
  rapidAPIKeys,
  searchType,
  method
) {
  let axios = require("axios").default;

  let options = {
    method: "GET",
    url: "https://random-stuff-api.p.rapidapi.com/reddit/" + method,
    params: { searchType: searchType },
    headers: {
      authorization: authorizations,
      "x-rapidapi-host": rapidAPIHosts,
      "x-rapidapi-key": rapidAPIKeys,
    },
  };

  axios
    .request(options)
    .then(function (response) {
      console.log(response.data);
      return response.data;
    })
    .catch(function (error) {
      console.error(error.response);
      return error;
    });
}

module.exports = { getReddit };
