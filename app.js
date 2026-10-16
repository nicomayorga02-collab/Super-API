import 'dotenv/config';
import express from 'express';

const app = express();
const port = process.env.APP_PORT || 3000;

app.get('/test', (request, response) => {
	response.status(200).json({ message: 'API funcionando' });
});

app.listen(port, () => {
	console.log(`API escuchando en el puerto ${port}`);
});
