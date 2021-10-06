const express = require('express');
const app = express();
const port = 3000;

app.get('/',(req,res) => {
    res.send('Hola mi server en express')
})

app.get('/nueva-ruta',(req,res) => {
  res.send('Hola soy una nueva ruta')
})

app.get('/products',(req,res) => {
  res.json([
    {
      name: 'Producto1',
      Precio: 1000
    },
    {
      name: 'Producto2',
      Precio: 2000
    }
  ])
})

app.get('/products/:id', (req,res)=> {
  const { id } = req.params;
  res.json({
    id,
    name: 'Producto2',
    Precio: 2000
  });
})

app.get('/categories/:categoryId/products/:productsId', (req, res) => {
  const { categoryId, productsId } = req.params;
  res.json({
    categoryId,
    productsId,
  })
})

app.listen(port, () => {
  console.log('Mi port' + port);
})
