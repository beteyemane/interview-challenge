const express = require("express");
const items = require("./items");

const app = express();

const port = process.env.PORT || 8080;

app.use(express.static("dist"));

app.get("/api/items", (req, res) => {
  let response = items;

  if (typeof req.query.search != "undefined") {
    response = items.filter((item) =>
      item.name.toLowerCase().includes(req.query.search.toLowerCase())
    );
  }

  res.send({ items: response });
});

app.listen(port, () => console.log(`Listening on port ${port}!`));
