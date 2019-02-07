const typeDefs = `
    type Player {
        _id: ID!
        name: String!
        age: Int!
        position: String!
        number: Int!
        team: Team
    }

    type Query {
        getPlayer(_id: ID!): Player!
        getAllPlayers: [Player!]!
    }

    type Mutation {
        createPlayer(email: String!, password: String!): Player
        updatePlayer(email: String!, password: String!): Player
        deletePlayer(_id: ID!): Player
    }
`;

export default typeDefs;
