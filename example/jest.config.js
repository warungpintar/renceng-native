module.exports = {
  preset: 'react-native',
  moduleNameMapper: {
    '^react($|/.+)': '<rootDir>/node_modules/react$1', // makes sure all React imports are running off of the one in this package.
  },
};
