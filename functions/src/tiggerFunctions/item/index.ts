import * as functions from 'firebase-functions';

/**
 * @description Will trigger only when a new item is created
 */
export const newItem = functions.firestore
  .document('/items/{itemId}')
  .onCreate(async (change, context) => {
    try{
      let itemId:string = context.params.chatId;
      
    	// Send email or anything you want to do
			console.log(itemId);   
      
    }catch(e){
      console.log(e)
      return
    }
  })

