const server = require('./server.js');

const port = process.env.PORT || 3300;
server.listen(port, () => {
  console.log("\n*** API running on port 3.3k ***\n");
});