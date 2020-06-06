// import { createStore } from "redux"
import { withReduxStateSync } from "redux-state-sync";

let intialState = {
  urlList: [
    "https://www.youtube.com/watch?v=x3bJeJDgRJQ",
    "https://www.youtube.com/watch?v=IBr798ZSOx4",
    
  ],
  currentUrl: "IBr798ZSOx4",
};
function stateReducer(state=intialState,action){
      let stateCopy= JSON.parse(JSON.stringify(state))
      switch(action.type){
       case "SUBMIT":
           stateCopy.urlList.push(action.payload)
           stateCopy.currentUrl= action.payload.split("=")[1]
      //      console.log(stateCopy)
           break;
      case "DELETE_URL":
            stateCopy.urlList.splice(action.payload,1)
            break;
      case "CLICK_URL":
            stateCopy.currentUrl = action.payload.split("=")[1];
            break;
      case "VIDEO_END":
            stateCopy.urlList= stateCopy.urlList.filter(el=>el !== action.payload) 
            break; 
      default:
            break;
      }

      return stateCopy;
}

export default withReduxStateSync(stateReducer)
