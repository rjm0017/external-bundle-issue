module.exports = {
  chainWebpack: config => {
    config.merge({
      externals: process.env.NODE_ENV === "production" ? ["vue", "THREE"] : []
    });
    // config.externals = ["vue", "THREE"];

    // config.merge({
    //   externals: process.env.NODE_ENV === "production" ? ["THREE"] : []
    // });
    // config.externals = ["THREE"];

    // config.externals({
    //   vue: {
    //     commonjs: "vue",
    //     commonjs2: "vue",
    //     root: "Vue"
    //   },
    //   THREE: {
    //     commonjs: "THREE",
    //     commonjs2: "THREE",
    //     root: "THREE"
    //   }
    // });
  }
};
