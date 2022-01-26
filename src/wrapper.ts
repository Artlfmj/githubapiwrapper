import axios from 'axios';

class Wrapper {
  private readonly _apikey: string;
  private readonly username: string;
  constructor(options: { apikey: string; username: string }) {
    this._apikey = options.apikey;
    this.username = options.username;
  }
  /**
   * Get the current user's repositories
   * @returns {Promise<object>}
   */
  public async getUserRepositories(): Promise<any> {
    const res = await axios
      .get('https://api.github.com/users/' + this.username + '/repos', {
        headers: {
          Authorization: this._apikey,
        },
      })
      .catch((error) => {
        throw new Error('Invalid username or apikey');
      });
    return res.data;
  }
  /**
   * Get the information of your user
   * @returns {Promise<object>}
   */
  public async getUserInfo(): Promise<any> {
    const res = await axios
      .get('https://api.github.com/users/' + this.username, {
        headers: {
          Authorization: this._apikey,
        },
      })
      .catch((error) => {
        throw new Error('Invalid username or apikey');
      });
    return res.data;
  }
  /**
   * Get the starred repositories of a specific user
   * @returns {Promise<object>}
   */
  public async getUserStarredRepositories(): Promise<any> {
    const res = await axios
      .get('https://api.github.com/users/' + this.username + '/starred', {
        headers: {
          Authorization: this._apikey,
        },
      })

      .catch((error) => {
        throw new Error('Invalid username or apikey');
      });
    return res.data;
  }
  /**
   * Get subscriptions of a specific user
   * @returns {Promise<object>}
   */
  public async getUserSubscriptions(): Promise<any> {
    const res = await axios
      .get('https://api.github.com/users/' + this.username + '/subscriptions', {
        headers: {
          Authorization: this._apikey,
        },
      })

      .catch((error) => {
        throw new Error('Invalid username or apikey');
      });
    return res.data;
  }
  /**
   * Get all information on your user
   * @returns {Promise<object>}
   */
  public async getUser(): Promise<any> {
    const user = await this.getUserInfo();
    const repos = await this.getUserRepositories();
    const starred = await this.getUserStarredRepositories();
    const subscriptions = await this.getUserSubscriptions();
    return {
      user,
      repos,
      starred,
      subscriptions,
    };
  }
  /**
   * Get Information about a specific repository
   * @param repoName Repository name
   * @param user User to whom the repository belongs
   * @returns {Promise<object>}
   */
  public async getRepositoryInfo(repoName: string, user: string): Promise<any> {
    const res = await axios
      .get('https://api.github.com/repos/' + user + '/' + repoName, {
        headers: {
          Authorization: this._apikey,
        },
      })

      .catch((error) => {
        throw new Error('Invalid repository');
      });
    return res.data;
  }
  /**
   * Get the commits of a specific repository
   * @param repoName Repository name
   * @param user Owner of the repository
   * @returns {Promise<object>}
   */
  public async getRepositoryCommits(repoName: string, user: string): Promise<any> {
    const res = await axios
      .get('https://api.github.com/repos/' + user + '/' + repoName + '/commits', {
        headers: {
          Authorization: this._apikey,
        },
      })

      .catch((error) => {
        throw new Error('Invalid repository');
      });
    return res.data;
  }
  /**
   * Get the contributors of a specific repository
   * @param repoName Repository name
   * @param user Owner of the repository
   * @returns {Promise<object>}
   */
  public async getRepositoryContributors(repoName: string, user: string): Promise<any> {
    const res = await axios
      .get('https://api.github.com/repos/' + user + '/' + repoName + '/contributors', {
        headers: {
          Authorization: this._apikey,
        },
      })

      .catch((error) => {
        throw new Error('Invalid repository');
      });
    return res.data;
  }
  /**
   * Get the languages of a specific repository
   * @param repoName Repository name
   * @param user Owner of the repository
   * @returns {Promise<object>}
   */
  public async getRepositoryLanguages(repoName: string, user: string): Promise<any> {
    const res = await axios
      .get('https://api.github.com/repos/' + user + '/' + repoName + '/languages', {
        headers: {
          Authorization: this._apikey,
        },
      })

      .catch((error) => {
        throw new Error('Invalid repository');
      });
    return res.data;
  }
  /**
   * Get the branches of a specific repository
   * @param repoName Repository name
   * @param user Owner of the repository
   * @returns {Promise<object>}
   */
  public async getRepositoryBranches(repoName: string, user: string): Promise<any> {
    const res = await axios
      .get('https://api.github.com/repos/' + user + '/' + repoName + '/branches', {
        headers: {
          Authorization: this._apikey,
        },
      })

      .catch((error) => {
        throw new Error('Invalid repository');
      });
    return res.data;
  }
  /**
   * Get the tags of a specific repository
   * @param repoName Repository name
   * @param user Owner of the repository
   * @returns {Promise<object>}
   */
  public async getRepositoryTags(repoName: string, user: string): Promise<any> {
    const res = await axios
      .get('https://api.github.com/repos/' + user + '/' + repoName + '/tags', {
        headers: {
          Authorization: this._apikey,
        },
      })

      .catch((error) => {
        throw new Error('Invalid repository');
      });
    return res.data;
  }
  /**
   * Get the releases of a specific repository
   * @param repoName Repository name
   * @param user Owner of the repository
   * @returns {Promise<object>}
   */
  public async getRepositoryReleases(repoName: string, user: string): Promise<any> {
    const res = await axios
      .get('https://api.github.com/repos/' + user + '/' + repoName + '/releases', {
        headers: {
          Authorization: this._apikey,
        },
      })

      .catch((error) => {
        throw new Error('Invalid repository');
      });
    return res.data;
  }
  /**
   * Get the issues of a specific repository
   * @param repoName Repository name
   * @param user Owner of the repository
   * @returns {Promise<object>}
   */
  public async getRepositoryIssues(repoName: string, user: string): Promise<any> {
    const res = await axios
      .get('https://api.github.com/repos/' + user + '/' + repoName + '/issues', {
        headers: {
          Authorization: this._apikey,
        },
      })

      .catch((error) => {
        throw new Error('Invalid repository');
      });
    return res.data;
  }
  /**
   * Get the pull requests of a specific repository
   * @param repoName Repository name
   * @param user Owner of the repository
   * @returns {Promise<object>}
   */
  public async getRepositoryPullRequests(repoName: string, user: string): Promise<any> {
    const res = await axios
      .get('https://api.github.com/repos/' + user + '/' + repoName + '/pulls', {
        headers: {
          Authorization: this._apikey,
        },
      })

      .catch((error) => {
        throw new Error('Invalid repository');
      });
    return res.data;
  }
  /**
   * Get all the information of a specific repository
   * @param repoName Repository name
   * @param user Owner of the repository
   * @returns {Promise<object>}
   */
  public async getRepository(repoName: string, user: string): Promise<any> {
    const branches = await this.getRepositoryBranches(repoName, user);
    const contributors = await this.getRepositoryContributors(repoName, user);
    const languages = await this.getRepositoryLanguages(repoName, user);
    const releases = await this.getRepositoryReleases(repoName, user);
    const tags = await this.getRepositoryTags(repoName, user);
    const commits = await this.getRepositoryCommits(repoName, user);
    const info = await this.getRepositoryInfo(repoName, user);
    const issues = await this.getRepositoryIssues(repoName, user);
    const pullRequests = await this.getRepositoryPullRequests(repoName, user);
    return {
      branches,
      contributors,
      languages,
      releases,
      tags,
      commits,
      info,
      issues,
      pullRequests,
    };
  }
  /**
   * Search for a specific repository
   * @param repoName Repository name
   * @returns {Promise<array>}
   */
  public async searchRepository(repoName: string): Promise<any> {
    const res = await axios
      .get('https://api.github.com/search/repositories?q=' + repoName, {
        headers: {
          Authorization: this._apikey,
        },
      })

      .catch((error) => {
        throw new Error('Invalid repository');
      });
    return res.data;
  }
  /**
   * Search for a user
   * @param user Username
   * @returns {Promise<object>}
   */
  public async searchUser(user: string): Promise<any> {
    const res = await axios
      .get('https://api.github.com/search/users?q=' + user, {
        headers: {
          Authorization: this._apikey,
        },
      })

      .catch((error) => {
        throw new Error('Invalid repository');
      });
    return res.data;
  }
}

export { Wrapper };
