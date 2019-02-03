require("dotenv").config();
import { GraphQLServer } from "graphql-yoga";
import mongoose from "mongoose";

import { options } from "./utils/options";
import { context } from "./utils/context";

const { URI: db } = process.env;

// Connect to MongoDB with Mongoose.
mongoose
  .connect(
    db,
    {
      useCreateIndex: true,
      useNewUrlParser: true
    }
  )
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

const server = new GraphQLServer({
  schema,
  context
});

server.start(options, ({ port }) => {
  console.log(`👉 Server is running on http://localhost:${port}`);
});