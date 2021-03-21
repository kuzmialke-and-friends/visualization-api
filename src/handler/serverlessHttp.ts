import serverlessHttp from 'serverless-http';
import { app } from '../app';

export const serverlessApp = serverlessHttp(app);
