export default (state=null, action)=> {
  switch(action.type) {
      case "USER_LOAD":
      return action.payload;
  }
  return state;
}