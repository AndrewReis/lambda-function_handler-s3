export const run = async (event) => {
  console.log('EVENT: ', JSON.stringify(event, null, 2));
  const response = {
    statusCode: 200,
    body: JSON.stringify('Hello from Github Actions!'),
  };
  return response;
};
