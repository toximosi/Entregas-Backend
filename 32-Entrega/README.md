# ENTREGA 32: _profiling_

## profailing inicial:

```
node --prof src/app.js
```
-> [resultado profiling](https://github.com/toximosi/Entregas-Backend/blob/master/32-Entrega/resultadoProfiling.txt)

-> [profailing](https://raw.githubusercontent.com/toximosi/Entregas-Backend/master/32-Entrega/Profiling-One.log)


## Inspeccionar con chrome:

![](https://github.com/toximosi/Entregas-Backend/blob/master/32-Entrega/assets/chrome-inspector.png?raw=true)

### Random debug:

```
artillery quick --count 50  -n 20 "http://localhost:8080/random-debug"
```

![profailing](https://github.com/toximosi/Entregas-Backend/blob/master/32-Entrega/assets/chrome-random-debug.png?raw=true)

-> [profailing-cpuprofile](https://raw.githubusercontent.com/toximosi/Entregas-Backend/master/32-Entrega/chrome-random-debug.cpuprofile)

### Random no debug:

```
artillery quick --count 50  -n 20 "http://localhost:8080/random-nodebug"
```

![profailing](https://github.com/toximosi/Entregas-Backend/blob/master/32-Entrega/assets/chrome-random-nodebug.png?raw=true)

-> [profailing-cpuprofile](https://raw.githubusercontent.com/toximosi/Entregas-Backend/master/32-Entrega/chrome-random-nodebug.cpuprofile)