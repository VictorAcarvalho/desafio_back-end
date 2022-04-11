import { Router } from "express";
import { addressController } from './controller/addressController.js';

const routes = Router();
routes.get('/geopoint', addressController.geopoint); 


export default routes;