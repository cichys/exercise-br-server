const { gql } = require('apollo-server');


const typeDefs = gql`
    type Repository {
        id: ID!
        name: String
        full_name: String
        html_url: String
        description: String
        git_url: String
        ssh_url: String
        watchers: Int
        forks: Int
    }
    type Query {
        repositories: [Repository],
        repository(id: ID!): Repository
    }
`;

module.exports = typeDefs;
