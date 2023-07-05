const express = require("express");
const app = express();
const cors = require("cors");

// middleware
app.use(express.json());
app.use(express.urlencoded());

const port = process.env.PORT || 3001;

const { deploy } = require("./scripts/deploy");

app.use(cors());

app.get("/", async (req, res) => {
  res.send("Hi there");
});

app.post("/deploy", async (req, res) => {
  const { tokenSupply, name, symbol, collectionURI } = req.body;

  const deployedContract = await deploy(
    tokenSupply,
    name,
    symbol,
    collectionURI
  );
  res.send({
    message: `Contract successfully deployed at: ${deployedContract.address}`,
    contractAddress: deployedContract.address,
  });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
