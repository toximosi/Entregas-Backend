module.exports = {
  apps: [
      {
      name   : "fork",
      script: "src/app.js",
      env: {
        PORT: 8080
      }
    },{
      name: "cluster",
      script: "src/app.js",
      env: {
        PORT: 8081
      }
    }
  ]
}