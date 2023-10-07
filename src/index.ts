import 'dotenv/config';
import 'express-async-errors';
import express from 'express';
import helmet from 'helmet';
import swaggerUI from 'swagger-ui-express';

import { PORT } from './globals/constants';
import { handleErrors } from './middlewares/handle.errors';
import { routes } from './routes';
import { docs, swaggerOptions } from './globals/docs';

const app = express();

app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/docs', swaggerUI.serve, swaggerUI.setup(docs, swaggerOptions));
app.use(routes);
app.use(handleErrors);

app.listen(PORT, () => {
  console.info(`Servidor ONN.`);
  console.info(`Porta: ${PORT}`);
});
