module.exports = {
  preset: 'jest-expo',
  setupFilesAfterEnv: ['./jest.setup.js'],
  transformIgnorePatterns: [
    "node_modules/(?!(react-native|react-navigation|@react-navigation/.*)/)"
  ]
};
;
