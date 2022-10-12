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
worker_processes 1;

events {}

http {
    include       mime.types;
    default_type  application/octet-stream;

    upstream node_app {
        server 127.0.0.1:8081;
        server 127.0.0.1:8082;
        server 127.0.0.1:8083 weight=3;
    }

    server {
        listen       80;
        server_name  nginx_node_server;

        root ./node_app/src/public;


        location / {
            try_files $uri $uri/ @express;
        }
        
        location @express {
            proxy_pass http://node_app;
        }


        error_page   500 502 503 504  /50x.html;
        location = /50x.html {
            root   html;
        }
    }
}
```
[nginx.config]( https://github.com/toximosi/Entregas-Backend/blob/master/15-Entrega/assets/nginx.conf)	