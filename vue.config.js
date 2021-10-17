module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "" : "/",
  pluginOptions: {
    electronBuilder: {
      preload: "src/preload.js",
    },
  },

  chainWebpack: (config) => {
    config.plugin("html").tap((args) => {
      args[0].title = "CONET.ID";
      return args;
    });
  },
};
