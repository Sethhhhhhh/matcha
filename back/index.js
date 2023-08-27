import express from 'express';
import { initRoutes } from './srcs/routes';

const app = express();

app.use(express.json());

initRoutes(app);

app.listen(3000, () => {
	console.log('Server is listening on port 3000');
});