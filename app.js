const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('<h1>¡Hola desde AWS EC2!</h1><p>Despliegue automático con CodePipeline y CodeBuild</p>');
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});
