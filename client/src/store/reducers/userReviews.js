export default (state=null, action)=> {
    switch(action.type) {
        case "USER_REVIEWS":
        return action.payload;
        break;
    }
    return state;
  }