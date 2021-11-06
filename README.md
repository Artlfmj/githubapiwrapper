# githubapiwrapper
 Simple NodeJS Github API Wrapper

## Installation
```
npm install githubapiwrapper
```

## Usage
```
var github = require('githubapiwrapper');
var github = new github(GITHUB TOKEN STRING);
```

## Example
```
github.getRepoInfo('Artlfmj/updatebot)
.then(data => {
    console.log(data);
})
.catch(err => {
    console.log(err);
});
```

## License
MIT

## Author
Artlfmj

## Contributors
Artlfmj

## Repository
https://github.com/artlfmj/githubapiwrapper

## Issues

## Changelog
### v1.0.0
- Initial release



