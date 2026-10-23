import 'dotenv/config';
import express from 'express';
import testRoute from './src/routes/test.route.js';

const app = express();
app.use(express.json());
app.use(testRoute);

const port = process.env.APP_PORT || 3000;

app.listen(port, () => {
	console.log(`API escuchando en el puerto ${port}`);
});
