module.exports = {
  apps: [
      {
      name   : "server-fork-8081",
      script: "src/app.js",
      env: {
        PORT: 8081
      },
      watch:true,
    },
    {
      name   : "server-fork-8082",
      script: "src/app.js",
      env: {
        PORT: 8082
      },
      watch:true,
    },{
      name: "server-cluster-8083",
      script: "src/app.js",
      env: {
        PORT: 8083
      },
      exec_mode: 'cluster',
      nod_args: "--harmony",
      instances: 8,
      watch:true,
    }
  ]
}