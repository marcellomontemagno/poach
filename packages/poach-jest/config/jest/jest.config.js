const path = require('path');

module.exports = {
  verbose: true,
  moduleNameMapper: {
    "\\.(css|less|scss|jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": path.join(__dirname, 'jestFileMock.js')
  }
};
