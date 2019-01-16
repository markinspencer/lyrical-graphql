const app = require("./server/server");
const port = 5000;

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
