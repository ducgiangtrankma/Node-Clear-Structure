module.exports = {
  apps: [
    {
      name: "app1",
      script: "./index.js",
      env_prod: {
        NODE_ENV: "production",
      },
      env_dev: {
        NODE_ENV: "develop",
      },
    },
  ],
};
//Keyword PM2 NodeJS
