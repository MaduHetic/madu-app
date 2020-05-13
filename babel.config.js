module.exports = {
  ignore: ["node_modules, node_module"],
  presets: ["module:metro-react-native-babel-preset"],
  plugins: [
    [
      "module-resolver",
      {
        root: ["./src"],
        alias: {
          "@components": "./src/components",
          "@helpers": "./src/helpers",
          "@assets": "./src/assets",
          "@middlewares": "./src/middlewares",
          "@core": "./src/core",
          "@store": "./src/store",
          "@glossy": "./src/glossy",
        },
      },
    ],
  ],
};
