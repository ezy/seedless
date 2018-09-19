/**
  * GET /private
  *
  * Returns a collection of private.
  * @returns {Array.Object}
  */
module.exports.handler = (event, context, callback) => {
  console.log('getPrivate');
  console.log(event);

  const user = JSON.parse(event.requestContext.authorizer.user);
  console.log(user);

  const response = {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*', // Required for CORS support to work
    },
    body: JSON.stringify({
      private: [
        {
          id: 1,
          name: 'Secret squirrel',
        },
      ],
    }),
  };

  callback(null, response);
};
