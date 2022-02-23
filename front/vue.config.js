module.exports = {
  css: {
    loaderOptions: {
      scss: {
        prependData: `@import "./src/style/global.scss";`,
      },
    },
  },
};
