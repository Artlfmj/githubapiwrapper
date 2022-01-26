declare class Wrapper {
    private readonly _apikey;
    private readonly username;
    constructor(options: {
        apikey: string;
        username: string;
    });
    /**
     * Get the current user's repositories
     * @returns {Promise<object>}
     */
    getUserRepositories(): Promise<any>;
    /**
     * Get the information of your user
     * @returns {Promise<object>}
     */
    getUserInfo(): Promise<any>;
    /**
     * Get the starred repositories of a specific user
     * @returns {Promise<object>}
     */
    getUserStarredRepositories(): Promise<any>;
    /**
     * Get subscriptions of a specific user
     * @returns {Promise<object>}
     */
    getUserSubscriptions(): Promise<any>;
    /**
     * Get all information on your user
     * @returns {Promise<object>}
     */
    getUser(): Promise<any>;
    /**
     * Get Information about a specific repository
     * @param repoName Repository name
     * @param user User to whom the repository belongs
     * @returns {Promise<object>}
     */
    getRepositoryInfo(repoName: string, user: string): Promise<any>;
    /**
     * Get the commits of a specific repository
     * @param repoName Repository name
     * @param user Owner of the repository
     * @returns {Promise<object>}
     */
    getRepositoryCommits(repoName: string, user: string): Promise<any>;
    /**
     * Get the contributors of a specific repository
     * @param repoName Repository name
     * @param user Owner of the repository
     * @returns {Promise<object>}
     */
    getRepositoryContributors(repoName: string, user: string): Promise<any>;
    /**
     * Get the languages of a specific repository
     * @param repoName Repository name
     * @param user Owner of the repository
     * @returns {Promise<object>}
     */
    getRepositoryLanguages(repoName: string, user: string): Promise<any>;
    /**
     * Get the branches of a specific repository
     * @param repoName Repository name
     * @param user Owner of the repository
     * @returns {Promise<object>}
     */
    getRepositoryBranches(repoName: string, user: string): Promise<any>;
    /**
     * Get the tags of a specific repository
     * @param repoName Repository name
     * @param user Owner of the repository
     * @returns {Promise<object>}
     */
    getRepositoryTags(repoName: string, user: string): Promise<any>;
    /**
     * Get the releases of a specific repository
     * @param repoName Repository name
     * @param user Owner of the repository
     * @returns {Promise<object>}
     */
    getRepositoryReleases(repoName: string, user: string): Promise<any>;
    /**
     * Get the issues of a specific repository
     * @param repoName Repository name
     * @param user Owner of the repository
     * @returns {Promise<object>}
     */
    getRepositoryIssues(repoName: string, user: string): Promise<any>;
    /**
     * Get the pull requests of a specific repository
     * @param repoName Repository name
     * @param user Owner of the repository
     * @returns {Promise<object>}
     */
    getRepositoryPullRequests(repoName: string, user: string): Promise<any>;
    /**
     * Get all the information of a specific repository
     * @param repoName Repository name
     * @param user Owner of the repository
     * @returns {Promise<object>}
     */
    getRepository(repoName: string, user: string): Promise<any>;
    /**
     * Search for a specific repository
     * @param repoName Repository name
     * @returns {Promise<array>}
     */
    searchRepository(repoName: string): Promise<any>;
    /**
     * Search for a user
     * @param user Username
     * @returns {Promise<object>}
     */
    searchUser(user: string): Promise<any>;
}
export { Wrapper };
