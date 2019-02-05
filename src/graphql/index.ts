import { makeExecutableSchema } from "graphql-tools";
import { DIRECTIVES } from "graphql-codegen-typescript-mongodb";

import typeDefs from "./typeDefs";
import resolvers from "./resolvers";

const schema = makeExecutableSchema({
    typeDefs: [DIRECTIVES, ...typeDefs],
    resolvers
});

export default schema;
