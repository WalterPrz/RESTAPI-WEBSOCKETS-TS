import { Router } from 'express';
import { TickerRoutes } from './tickets/routes';




export class AppRoutes {


  static get routes(): Router {

    const router = Router();

    // Definir las rutas
    router.use('/api/tickets', TickerRoutes.routes);



    return router;
  }


}

