//function containing object for restaurant state data
const defaultState = {  
    id: 1,
    name: 'Anonymous',
    location: 'Los Angeles, CA',
    bio: 'Your info here',
}


export default  function (state=null, action){
    switch(action.type) {
        case "EDIT_BIO":
          return Object.assign({}, state, { bio: action.payload } )
          break;
          
        case "EDIT_LOCAL":
          return Object.assign({}, state, { location: action.payload } )
          break;
      }
      return state;
}