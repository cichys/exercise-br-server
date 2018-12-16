const { ApolloServer, gql } = require('apollo-server');

const GithubAPI = require('./datasources/GithubAPI');
const resolvers = require('./resolvers');
const typeDefs = require('./typeDefs');


const server = new ApolloServer({ 
    typeDefs,
    resolvers,
    dataSources: () => ({
        githubAPI: new GithubAPI(),
    })
});


server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
});
