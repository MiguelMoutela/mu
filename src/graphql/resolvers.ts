import { mergeResolvers } from "merge-graphql-schemas";

import Player from "./Player/resolvers";
import Team from "./Team/resolvers";

const resolvers = [Player, Team];

export default mergeResolvers(resolvers);
