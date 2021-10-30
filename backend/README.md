# Bienvenido al Backend 

Creado en express y patron API Rest. 
Recorda instalar las dependencias con **npm i** o **npm install**

# Configurar el archivo .ENV antes de ejecutar los comandos de Sequelize ⌨

<pre><code>
DB_USERNAME= root  // Nombre de usuario para la DB
DB_PASSWORD=contraseña de la DB
DB_HOST=localhost o Ip local
DB_DATABASE=summary
DB_PORT=3306 // Puerto de conexion
DB_DIALECT=mysql
</code></pre>


# Sequelize ⌨

La DB fue creada con sequelize. Para que la misma funcione, se deben ejecutados los comandos. Respetar el orden

- **1** sequelize db:create  //  "node_modules/.bin/sequelize" db:create // opcion 2
- **2** sequelize db:migrate  //  "node_modules/.bin/sequelize" db:migrate // opcion 2
- **3 (opcional si queres cargar datos en la db)** sequelize db:seed:all

# Rutas de API disponibles 🔛

- **Consulta de operaciones general:** "https://localhost:3001/api/operations"
- **Consulta de operaciones egresos:** "http://localhost:3001/api/operations/out"
- **Consulta de operaciones ingresos:** "http://localhost:3001/api/operations/in"
- **Consulta por id:** "http://localhost:3001/api/operations/:id"
