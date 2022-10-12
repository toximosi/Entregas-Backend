# ENTREGA 15: _Fork, cluster and NGINX_


### ECOSYSTEM: Fork and Cluster

```
> pm2 start ecosystem.config.cjs
```

```javascript
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

```
![](https://raw.githubusercontent.com/toximosi/Entregas-Backend/master/15-Entrega/assets/pm2-ecosystem.png)

index.html
![](https://raw.githubusercontent.com/toximosi/Entregas-Backend/master/15-Entrega/assets/index.html.png)

## NGINX
```
> nginx.exe
````

```javascript

```
[nginx.config]( nginx.conf)	