module.exports = {
  default: [
    'features/**/*.feature',
    '--require tests/setup.js',
    '--require steps/**/*.js',
    '--format progress',
    '--format json:reports/cucumber_report.json'
  ].join(' ')
};
