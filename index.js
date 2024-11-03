const http = require("http");
const app = require("./app");
const { port } = require("./config/keys");


// Create server
const server = http.createServer(app);

// Listen to the server
server.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
