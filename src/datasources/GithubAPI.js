const { RESTDataSource } = require('apollo-datasource-rest');


class GithubAPI extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = 'https://api.github.com/';
    }

    willSendRequest(request) {
        // token for public_repo only
        request.headers.set('Authorization', 'token MY_TOKEN_HERE');
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
