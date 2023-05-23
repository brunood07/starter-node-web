import HttpServer from './HttpServer';

export default class HttpController {
  constructor(httpServer: HttpServer) {
    httpServer.on('post', '/test', async function (params: any, body: any) {
      return 'ROTA POST test';
    });

    httpServer.on('get', '/test', async function (params: any, body: any) {
      return 'Rota GET test';
    });
  }
}
