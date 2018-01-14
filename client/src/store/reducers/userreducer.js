//function containing object for restaurant state data
const defaultState = {  
    id: 1,
    name: 'Anonymous',
    location: 'Nowhere, CA',
    bio: 'blah, blah',
}


export default  function (state= defaultState, action){
    switch(action.type) {
        case "EDIT_BIO":
          return Object.assign({}, state, { bio: action.payload } )
          break;
          
        case "EDIT_LOCAL":
          return Object.assign({}, state, { location: action.payload } )
          break;

        default:
          return state;
    
      }
      return state;
     }