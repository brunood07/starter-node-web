import ExpressAdapter from './infra/http/ExpressAdapter';
import HttpController from './infra/http/HttpController';

console.log('test');
const httpServer = new ExpressAdapter();
new HttpController(httpServer);
httpServer.listen(3000);
