const express = require('express');
const app = express();
const path = require('path');
const methodOverride = require('method-override');

const PORT = process.env.PORT || 3001

app.set('views', path.resolve(__dirname, './src/views'));
app.set('view engine', 'ejs'); 
app.use(express.static(path.resolve(__dirname, './public')));

app.use(express.json())
//URL encode  - Para que nos pueda llegar la información desde el formulario al req.body
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride('_method'));

//app.use('/', (req, res) => res.json({ clave: "con el server" }));

const homeRoutes = require('./src/routes/homeRoutes');
const operationsRoutes = require('./src/routes/operationsRoutes');
//Aquí llamo a la ruta de las api
const apiOperationsRouter = require('./src/routes/api/apiOperationsRoutes');

app.use('/', homeRoutes);
app.use('/', operationsRoutes);

app.use('/api/operations', apiOperationsRouter);



app.listen(PORT, () => {
    console.log('Servidor corriendo en el puerto ' + PORT)
});

