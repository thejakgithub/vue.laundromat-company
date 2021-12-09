const request = require("request");
const dotenv = require("dotenv");
const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const port = process.env.PORT || 5000;

dotenv.config();
app.set("trust proxy", 1);
app.use(
  cors({
    // origin: ["http://localhost:8080"],
    origin: ["https://laundromat-company.netlify.app"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.listen(port, () => {
  console.log("Server is running on port ", +port);
});

app.post("/", (req, res) => {
  if (res) {
    const number = req.body.number;
    request(
      {
        method: "POST",
        uri: "https://notify-api.line.me/api/notify",
        header: {
          "Content-Type": "multipart/form-data",
        },
        auth: {
          bearer: process.env.TOKEN,
        },
        form: {
          message: `The Washing Machine${number} has 1 minute left. 🔔`,
        },
      },
      (err, res, body) => {
        if (err) {
          console.log(err);
        } else {
          console.log(body);
        }
      }
    );
  }
});
