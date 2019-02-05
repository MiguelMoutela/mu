import { PubSub } from "graphql-yoga";


const pubsub = new PubSub();

export const context = ({ request }) => ({
  pubsub
});
