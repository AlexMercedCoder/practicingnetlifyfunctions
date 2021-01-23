//We export the function
exports.handler = async function(event, context) {

    //Fetch request details from event object
    const {path, httpMethod, headers, queryStringParameters, body} = event

    // return some JSON data with a staus of 200
    return {
      statusCode: 200,
      body: JSON.stringify({
        path,
        httpMethod,
        queryStringParameters,
        body
      })
    }
  }