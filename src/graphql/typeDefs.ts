import { mergeTypes } from "merge-graphql-schemas";

import Player from "./Player/typeDefs";
import Team from "./Team/typeDefs";

const typeDefs = [Player, Team];

export default mergeTypes(typeDefs, { all: true });
