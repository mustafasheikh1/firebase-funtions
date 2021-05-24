import * as functions from 'firebase-functions';

export const testJob = functions.pubsub.schedule('every 1 minutes')
  .timeZone('America/New_York') // Users can choose timezone - default is America/Los_Angeles
  .onRun((context) => {
      console.log('Something');
});