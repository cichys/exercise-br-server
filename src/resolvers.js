module.exports = {
    Query: {
        repositories: async (_, __, { dataSources }) =>
            dataSources.githubAPI.getAllRepositories(),
        repository: (_, { id }, { dataSources }) =>
            dataSources.githubAPI.getRepositoryById({ repositoryId: id }),
    },
};
