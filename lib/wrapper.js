"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Wrapper = void 0;
var axios_1 = require("axios");
var Wrapper = /** @class */ (function () {
    function Wrapper(options) {
        this._apikey = options.apikey;
        this.username = options.username;
    }
    /**
     * Get the current user's repositories
     * @returns {Promise<object>}
     */
    Wrapper.prototype.getUserRepositories = function () {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, axios_1.default
                            .get('https://api.github.com/users/' + this.username + '/repos', {
                            headers: {
                                Authorization: this._apikey,
                            },
                        })
                            .catch(function (error) {
                            throw new Error('Invalid username or apikey');
                        })];
                    case 1:
                        res = _a.sent();
                        return [2 /*return*/, res.data];
                }
            });
        });
    };
    /**
     * Get the information of your user
     * @returns {Promise<object>}
     */
    Wrapper.prototype.getUserInfo = function () {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, axios_1.default
                            .get('https://api.github.com/users/' + this.username, {
                            headers: {
                                Authorization: this._apikey,
                            },
                        })
                            .catch(function (error) {
                            throw new Error('Invalid username or apikey');
                        })];
                    case 1:
                        res = _a.sent();
                        return [2 /*return*/, res.data];
                }
            });
        });
    };
    /**
     * Get the starred repositories of a specific user
     * @returns {Promise<object>}
     */
    Wrapper.prototype.getUserStarredRepositories = function () {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, axios_1.default
                            .get('https://api.github.com/users/' + this.username + '/starred', {
                            headers: {
                                Authorization: this._apikey,
                            },
                        })
                            .catch(function (error) {
                            throw new Error('Invalid username or apikey');
                        })];
                    case 1:
                        res = _a.sent();
                        return [2 /*return*/, res.data];
                }
            });
        });
    };
    /**
     * Get subscriptions of a specific user
     * @returns {Promise<object>}
     */
    Wrapper.prototype.getUserSubscriptions = function () {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, axios_1.default
                            .get('https://api.github.com/users/' + this.username + '/subscriptions', {
                            headers: {
                                Authorization: this._apikey,
                            },
                        })
                            .catch(function (error) {
                            throw new Error('Invalid username or apikey');
                        })];
                    case 1:
                        res = _a.sent();
                        return [2 /*return*/, res.data];
                }
            });
        });
    };
    /**
     * Get all information on your user
     * @returns {Promise<object>}
     */
    Wrapper.prototype.getUser = function () {
        return __awaiter(this, void 0, void 0, function () {
            var user, repos, starred, subscriptions;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getUserInfo()];
                    case 1:
                        user = _a.sent();
                        return [4 /*yield*/, this.getUserRepositories()];
                    case 2:
                        repos = _a.sent();
                        return [4 /*yield*/, this.getUserStarredRepositories()];
                    case 3:
                        starred = _a.sent();
                        return [4 /*yield*/, this.getUserSubscriptions()];
                    case 4:
                        subscriptions = _a.sent();
                        return [2 /*return*/, {
                                user: user,
                                repos: repos,
                                starred: starred,
                                subscriptions: subscriptions,
                            }];
                }
            });
        });
    };
    /**
     * Get Information about a specific repository
     * @param repoName Repository name
     * @param user User to whom the repository belongs
     * @returns {Promise<object>}
     */
    Wrapper.prototype.getRepositoryInfo = function (repoName, user) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, axios_1.default
                            .get('https://api.github.com/repos/' + user + '/' + repoName, {
                            headers: {
                                Authorization: this._apikey,
                            },
                        })
                            .catch(function (error) {
                            throw new Error('Invalid repository');
                        })];
                    case 1:
                        res = _a.sent();
                        return [2 /*return*/, res.data];
                }
            });
        });
    };
    /**
     * Get the commits of a specific repository
     * @param repoName Repository name
     * @param user Owner of the repository
     * @returns {Promise<object>}
     */
    Wrapper.prototype.getRepositoryCommits = function (repoName, user) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, axios_1.default
                            .get('https://api.github.com/repos/' + user + '/' + repoName + '/commits', {
                            headers: {
                                Authorization: this._apikey,
                            },
                        })
                            .catch(function (error) {
                            throw new Error('Invalid repository');
                        })];
                    case 1:
                        res = _a.sent();
                        return [2 /*return*/, res.data];
                }
            });
        });
    };
    /**
     * Get the contributors of a specific repository
     * @param repoName Repository name
     * @param user Owner of the repository
     * @returns {Promise<object>}
     */
    Wrapper.prototype.getRepositoryContributors = function (repoName, user) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, axios_1.default
                            .get('https://api.github.com/repos/' + user + '/' + repoName + '/contributors', {
                            headers: {
                                Authorization: this._apikey,
                            },
                        })
                            .catch(function (error) {
                            throw new Error('Invalid repository');
                        })];
                    case 1:
                        res = _a.sent();
                        return [2 /*return*/, res.data];
                }
            });
        });
    };
    /**
     * Get the languages of a specific repository
     * @param repoName Repository name
     * @param user Owner of the repository
     * @returns {Promise<object>}
     */
    Wrapper.prototype.getRepositoryLanguages = function (repoName, user) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, axios_1.default
                            .get('https://api.github.com/repos/' + user + '/' + repoName + '/languages', {
                            headers: {
                                Authorization: this._apikey,
                            },
                        })
                            .catch(function (error) {
                            throw new Error('Invalid repository');
                        })];
                    case 1:
                        res = _a.sent();
                        return [2 /*return*/, res.data];
                }
            });
        });
    };
    /**
     * Get the branches of a specific repository
     * @param repoName Repository name
     * @param user Owner of the repository
     * @returns {Promise<object>}
     */
    Wrapper.prototype.getRepositoryBranches = function (repoName, user) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, axios_1.default
                            .get('https://api.github.com/repos/' + user + '/' + repoName + '/branches', {
                            headers: {
                                Authorization: this._apikey,
                            },
                        })
                            .catch(function (error) {
                            throw new Error('Invalid repository');
                        })];
                    case 1:
                        res = _a.sent();
                        return [2 /*return*/, res.data];
                }
            });
        });
    };
    /**
     * Get the tags of a specific repository
     * @param repoName Repository name
     * @param user Owner of the repository
     * @returns {Promise<object>}
     */
    Wrapper.prototype.getRepositoryTags = function (repoName, user) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, axios_1.default
                            .get('https://api.github.com/repos/' + user + '/' + repoName + '/tags', {
                            headers: {
                                Authorization: this._apikey,
                            },
                        })
                            .catch(function (error) {
                            throw new Error('Invalid repository');
                        })];
                    case 1:
                        res = _a.sent();
                        return [2 /*return*/, res.data];
                }
            });
        });
    };
    /**
     * Get the releases of a specific repository
     * @param repoName Repository name
     * @param user Owner of the repository
     * @returns {Promise<object>}
     */
    Wrapper.prototype.getRepositoryReleases = function (repoName, user) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, axios_1.default
                            .get('https://api.github.com/repos/' + user + '/' + repoName + '/releases', {
                            headers: {
                                Authorization: this._apikey,
                            },
                        })
                            .catch(function (error) {
                            throw new Error('Invalid repository');
                        })];
                    case 1:
                        res = _a.sent();
                        return [2 /*return*/, res.data];
                }
            });
        });
    };
    /**
     * Get the issues of a specific repository
     * @param repoName Repository name
     * @param user Owner of the repository
     * @returns {Promise<object>}
     */
    Wrapper.prototype.getRepositoryIssues = function (repoName, user) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, axios_1.default
                            .get('https://api.github.com/repos/' + user + '/' + repoName + '/issues', {
                            headers: {
                                Authorization: this._apikey,
                            },
                        })
                            .catch(function (error) {
                            throw new Error('Invalid repository');
                        })];
                    case 1:
                        res = _a.sent();
                        return [2 /*return*/, res.data];
                }
            });
        });
    };
    /**
     * Get the pull requests of a specific repository
     * @param repoName Repository name
     * @param user Owner of the repository
     * @returns {Promise<object>}
     */
    Wrapper.prototype.getRepositoryPullRequests = function (repoName, user) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, axios_1.default
                            .get('https://api.github.com/repos/' + user + '/' + repoName + '/pulls', {
                            headers: {
                                Authorization: this._apikey,
                            },
                        })
                            .catch(function (error) {
                            throw new Error('Invalid repository');
                        })];
                    case 1:
                        res = _a.sent();
                        return [2 /*return*/, res.data];
                }
            });
        });
    };
    /**
     * Get all the information of a specific repository
     * @param repoName Repository name
     * @param user Owner of the repository
     * @returns {Promise<object>}
     */
    Wrapper.prototype.getRepository = function (repoName, user) {
        return __awaiter(this, void 0, void 0, function () {
            var branches, contributors, languages, releases, tags, commits, info, issues, pullRequests;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getRepositoryBranches(repoName, user)];
                    case 1:
                        branches = _a.sent();
                        return [4 /*yield*/, this.getRepositoryContributors(repoName, user)];
                    case 2:
                        contributors = _a.sent();
                        return [4 /*yield*/, this.getRepositoryLanguages(repoName, user)];
                    case 3:
                        languages = _a.sent();
                        return [4 /*yield*/, this.getRepositoryReleases(repoName, user)];
                    case 4:
                        releases = _a.sent();
                        return [4 /*yield*/, this.getRepositoryTags(repoName, user)];
                    case 5:
                        tags = _a.sent();
                        return [4 /*yield*/, this.getRepositoryCommits(repoName, user)];
                    case 6:
                        commits = _a.sent();
                        return [4 /*yield*/, this.getRepositoryInfo(repoName, user)];
                    case 7:
                        info = _a.sent();
                        return [4 /*yield*/, this.getRepositoryIssues(repoName, user)];
                    case 8:
                        issues = _a.sent();
                        return [4 /*yield*/, this.getRepositoryPullRequests(repoName, user)];
                    case 9:
                        pullRequests = _a.sent();
                        return [2 /*return*/, {
                                branches: branches,
                                contributors: contributors,
                                languages: languages,
                                releases: releases,
                                tags: tags,
                                commits: commits,
                                info: info,
                                issues: issues,
                                pullRequests: pullRequests,
                            }];
                }
            });
        });
    };
    /**
     * Search for a specific repository
     * @param repoName Repository name
     * @returns {Promise<array>}
     */
    Wrapper.prototype.searchRepository = function (repoName) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, axios_1.default
                            .get('https://api.github.com/search/repositories?q=' + repoName, {
                            headers: {
                                Authorization: this._apikey,
                            },
                        })
                            .catch(function (error) {
                            throw new Error('Invalid repository');
                        })];
                    case 1:
                        res = _a.sent();
                        return [2 /*return*/, res.data];
                }
            });
        });
    };
    /**
     * Search for a user
     * @param user Username
     * @returns {Promise<object>}
     */
    Wrapper.prototype.searchUser = function (user) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, axios_1.default
                            .get('https://api.github.com/search/users?q=' + user, {
                            headers: {
                                Authorization: this._apikey,
                            },
                        })
                            .catch(function (error) {
                            throw new Error('Invalid repository');
                        })];
                    case 1:
                        res = _a.sent();
                        return [2 /*return*/, res.data];
                }
            });
        });
    };
    return Wrapper;
}());
exports.Wrapper = Wrapper;
