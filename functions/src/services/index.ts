import * as express from 'express';
import * as cors from 'cors';

import { routesConfig as itemRoutes } from './item/routes-config';

const itemsApi = express();
itemRoutes(itemsApi);
itemsApi.use(cors({ origin: true }));
itemsApi.use(express.json());
itemsApi.use(express.urlencoded({ extended: true }))

export { itemsApi };