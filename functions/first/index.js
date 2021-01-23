//We export the function
exports.handler = async function (event, context) {
  //Fetch request details from event object
  const { path, httpMethod, headers, queryStringParameters, body } = event;

  // return some JSON data with a staus of 200
  return {
    statusCode: 200,
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "Content-Type",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
    },
    body: JSON.stringify({
      path,
      httpMethod,
      headers,
      queryStringParameters,
      body: JSON.parse(body),
    }),
  };
};
