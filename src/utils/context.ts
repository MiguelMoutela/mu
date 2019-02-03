import { PubSub } from "graphql-yoga";

import { models } from "./models";

const pubsub = new PubSub();

export const context = ({ request }) => ({
  models,
  pubsub
});
