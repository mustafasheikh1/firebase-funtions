import { Application } from "express";
import { getAllItems } from "./controller";
// import { isAuthenticated, isAuthorized } from '../../middlewares'; 

export function routesConfig(app: Application) {

	app.post('/user/location',
		// isAuthenticated, // For simple Auth
		// isAuthorized({ hasRole: ['admin'], allowSameUser: true }), // For role base autherization
		getAllItems
	)
}