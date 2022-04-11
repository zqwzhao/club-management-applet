const webpack = require("webpack");
const path = require("path");
const resolve = dir => path.join(__dirname, dir);

const BASEURL = process.env.BASE_URL;

module.exports = {
   publicPath: "/",
   outputDir: "dist",
   devServer: {
      // open: true, //浏览器自动打开页面
      // port: 8009,
      proxy: {
         "/api": {
            //代理api
            target: BASEURL, //服务器api地址
            changeOrigin: true, //是否跨域
            ws: true, //websocket支持
            pathRewrite: {
               // 重写路径
               "^/api": "",
            },
         },
      },
   },
   configureWebpack: {
      plugins: [
         new webpack.ProvidePlugin({
            localStorage: ["mp-storage", "localStorage"],
            "window.localStorage": ["mp-storage", "localStorage"],
         }),
      ],
   },
   chainWebpack: config => {
      config.optimization.minimizer("terser").tap(args => {
         const compress = args[0].terserOptions.compress;
         // 非 App 平台移除 console 代码(包含所有 console 方法，如 log,debug,info...)
         compress.drop_console = true;
         compress.pure_funcs = [
            "__f__", // App 平台 vue 移除日志代码
            // 'console.debug' // 可移除指定的 console 方法
         ];
         return args;
      });
      config.resolve.alias
         .set("@", resolve("src"))
         .set("@com", resolve("src/components"))
         .set("@pages", resolve("src/pages"))
         .set("@static", resolve("src/static"))
         .set("@service", resolve("src/service"));
   },
   transpileDependencies: ["uview-ui"],
};
