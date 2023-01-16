<h1>Proyecto de introduccion a <strong>Nest.JS</strong>.</h1>
<P>Pokedex</P>
<br>
<h2>Tecnologias</h2>
<ul>
    <li><strong>NPM VERSION: </strong> 8.5.0</li>
    <li><strong>NODE VERSION: </strong> v16.14.2</li>
    <li><strong>NEST CLI: </strong> <code>npm i -g @nest/cli</code></li>
</ul>
<br>
<h2>Instrucciones</h2>
<ul>
    <li> <code>cd ./03-Pokedex/</code></li>
    <li> <code>npm i</code></li>
    <li> <code>docker-compose up -d</code></li>
    <li> <code>npm run start:dev</code></li>
</ul>
<h2>Instrucciones produccion</h2>
<ul>
    <li> <code>cd ./03-Pokedex/</code></li>
    <li> <code>npm i</code></li>
    <li> <code>docker-compose up -d</code></li>
    <li> <code>npm run build</code></li>
    <li> <code>npm run start:prod</code></li>
</ul>
<br>
<h2>dependencias</h2>
<p>Solo para recordar que fue instalado</p>
<ul>
    <li> <code>npm i axios</code> | Para peticiones HTTP.</li>
    <li> <code>npm i uuid</code> | Para generar identificadores unicos.</li>
    <li> <code>npm i -D @types/uuid</code> | Para poder identificar los tipos de uuid del paquete anterior.</li>
    <li> <code>npm i class-validator class-transformer</code> | Para poder utilizar los validation pipes en una ruta.</li>
    <li> <code>npm i @nestjs/serve-static</code> | Para desplegar un servidor estatico o landing </li>
    <li> <code>npm i --save @nestjs/mongoose mongoose</code> | Manejador de MongoDB</li>
</ul>
<br>

# Pokedex

PopulateDB

```
http://localhost:3000/api/v2/seed
```
