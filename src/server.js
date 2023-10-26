import express from "express";
import "dotenv/config";
import morgan from "morgan";
import { topStoriesRouter } from "./routes/topStoriesRoutes.js";
import cors from 'cors';

const allowedDomains = [
    'http://localhost:3000'
  ];

  const corsOptions = {
    origin: function (origin, callback) {
      if (origin === undefined || allowedDomains.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error('Not allowed by CORS'));
      }
    },
  };

const app = express();
app.use(cors(corsOptions));
app.use(morgan("combined"));

const port = process.env.PORT || 5000;

app.use("/api/nytimes/top-stories", topStoriesRouter);

app.listen(port, () => {
  console.log(`express test server is running on http://localhost:${port}`);
});
