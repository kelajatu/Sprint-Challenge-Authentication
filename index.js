const { server } = require("./server.js");
const cors = require("cors");
const bcrypt = require("bcryptjs");

const port = process.env.PORT || 3300;
server.listen(port, () => {
  console.log(`\n=== Server listening on port ${port}\n`);
});
