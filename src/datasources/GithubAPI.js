const { RESTDataSource } = require('apollo-datasource-rest');


class GithubAPI extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = 'https://api.github.com/';
    }

    async getAllRepositories() {
        return this.get(
            `repositories`,
        );
    }


    async getRepositoryById(params) {
        return this.get(
            `repositories/${params.repositoryId}`,
        );
    }
}

module.exports = GithubAPI;
