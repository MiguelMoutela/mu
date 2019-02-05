export default `
    type Team {
        _id: ID!
        name: String!
        players: [Player]
    }

    type Query {
        getTeam(_id: ID!): Team!
        getAllTeams: [Team!]!
    }

    type Mutation {
        createTeam(name: String!, players: [Player]!): Team
        updateTeam(name: String): Team
        deleteTeam(_id: ID!): Team
    }
`;
