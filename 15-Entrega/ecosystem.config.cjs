module.exports = {
  apps: [
      {
      name   : "server-fork-8080",
      script: "src/app.js",
      env: {
        PORT: 8080
      }
    },
    {
      name   : "server-fork-8081",
      script: "src/app.js",
      env: {
        PORT: 8081
      }
    },{
      name: "server-cluster-8082",
      script: "src/app.js",
      env: {
        PORT: 8082
      },
      exec_mode: 'cluster',
      nod_args: "--harmony",
      instances: 8
    }
  ]
}