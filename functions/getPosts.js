/**
  * GET /posts
  *
  * Returns a collection of posts.
  * @returns {Array.Object}
  */
module.exports.handler = (event, context, callback) => {
  console.log('getPosts');
  const response = {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*', // Required for CORS support to work
    },
    body: JSON.stringify({
      posts: [
        {
          id: 1,
          title: 'A post',
          text: 'Lorem notsum',
        },
      ],
    }),
  };

  callback(null, response);
};
