module.exports = {
  rootDir: '.',
  testEnvironment: 'node',
  testRegex: '.spec.(t|j)s$',
  coverageDirectory: './coverage',
  coveragePathIgnorePatterns: ['/node_modules/'],
  moduleFileExtensions: ['ts', 'js', 'json', 'node'],
  moduleDirectories: ['node_modules', 'src'],
  verbose: false,
  silent: false,
};
