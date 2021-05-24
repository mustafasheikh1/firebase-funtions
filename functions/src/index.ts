import * as functions from "firebase-functions";
import * as admin from 'firebase-admin';

// Get all micro services
import { itemsApi } from './services';

// Get all trigger funtions
import { newItem } from './tiggerFunctions';

// Get all scheduler functons
import { testJob } from './scheduleFunctions'


// initailizing firebase admin
const firebaseApp = admin.initializeApp();
const database = firebaseApp.firestore();
database.settings({ ignoreUndefinedProperties: true })


// Servies Each service is a NODE SERVER
export const common = functions.https.onRequest(itemsApi);

// Trigger functons will trigger realtive to firestore
exports.newItem = newItem;

// CronJob / Scheduler Function
exports.testJob = testJob;

export { database };
