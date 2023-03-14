/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
// eslint-disable-next-line no-undef
module.exports = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  moduleNameMapper: {
    // eslint-disable-next-line no-undef
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": require.resolve(
      "./test/file-mock.js",
    ),
    // eslint-disable-next-line no-undef
    "\\.(css|less)$": require.resolve("./test/style-mock.js"),
  },
};
