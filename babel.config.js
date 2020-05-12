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
          "@constants": "./src/constants",
          "@models": "./src/models",
          "@hooks": "./src/hooks",
          "@core": "./src/core",
          "@kommon": "./src/kommon",
          "@store": "./src/store",
          "@glossy": "./src/glossy",
        },
      },
    ],
  ],
};
