// Github API wrapper

// TODO:
// - Add support for pagination
// - Add support for sorting
// - Add support for filtering
// - Add support for searching
// - Add support for multiple queries
// - Add catch for errors

// Dependencies
const axios = require('axios');

// Constants
const BASE_URL = 'https://api.github.com';

// Github Class
class Github {
  constructor(token) {
    this.token = token;
  }

  // Get user info
  async getUserInfo() {
    const url = `${BASE_URL}/user`;
    const headers = {
      Authorization: `token ${this.token}`,
    };
    const response = await axios.get(url, { headers });
    return response.data;
  }

  // Get user repos
  async getUserRepos() {
    const url = `${BASE_URL}/user/repos`;
    const headers = {
      Authorization: `token ${this.token}`,
    };
    const response = await axios.get(url, { headers });
    return response.data;
  }

  // Get repo info
  async getRepoInfo(repo) {
    const url = `${BASE_URL}/repos/${repo}`;
    const headers = {
      Authorization: `token ${this.token}`,
    };
    const response = await axios.get(url, { headers });
    return response.data;
  }

  // Get repo contributors
  async getRepoContributors(repo) {
    const url = `${BASE_URL}/repos/${repo}/contributors`;
    const headers = {
      Authorization: `token ${this.token}`,
    };
    const response = await axios.get(url, { headers });
    return response.data;
  }

  // Get repo languages
  async getRepoLanguages(repo) {
    const url = `${BASE_URL}/repos/${repo}/languages`;
    const headers = {
      Authorization: `token ${this.token}`,
    };
    const response = await axios.get(url, { headers });
    return response.data;
  }

  // Get repo branches
    async getRepoBranches(repo) {
        const url = `${BASE_URL}/repos/${repo}/branches`;
        const headers = {
        Authorization: `token ${this.token}`,
        };
        const response = await axios.get(url, { headers });
        return response.data;
    }

    // Get repo tags
    async getRepoTags(repo) {
        const url = `${BASE_URL}/repos/${repo}/tags`;
        const headers = {
        Authorization: `token ${this.token}`,
        };
        const response = await axios.get(url, { headers });
        return response.data;
    }

    // Get repo releases
    async getRepoReleases(repo) {
        const url = `${BASE_URL}/repos/${repo}/releases`;
        const headers = {
        Authorization: `token ${this.token}`,
        };
        const response = await axios.get(url, { headers });
        return response.data;
    }

    // Get repo commits
    async getRepoCommits(repo) {
        const url = `${BASE_URL}/repos/${repo}/commits`;
        const headers = {
        Authorization: `token ${this.token}`,
        };
        const response = await axios.get(url, { headers });
        return response.data;
    }

    // Get user starred repos
    async getUserStarredRepos() {
        const url = `${BASE_URL}/user/starred`;
        const headers = {
        Authorization: `token ${this.token}`,
        };
        const response = await axios.get(url, { headers });
        return response.data;
    }

    // Get user subscriptions
    async getUserSubscriptions() {
        const url = `${BASE_URL}/user/subscriptions`;
        const headers = {
        Authorization: `token ${this.token}`,
        };
        const response = await axios.get(url, { headers });
        return response.data;
    }

    // Search users
    async searchUsers(query) {
        const url = `${BASE_URL}/search/users?q=${query}`;
        const headers = {
        Authorization: `token ${this.token}`,
        };
        const response = await axios.get(url, { headers });
        return response.data;
    }
}

module.exports = Github;