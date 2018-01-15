//function containing object for restaurant state data
<<<<<<< HEAD
// const defaultState = {  
//     id: 1,
//     name: 'Anonymous',
//     location: 'Nowhere, CA',
//     bio: 'blah, blah',
// }
=======
const defaultState = {  
    id: 1,
    name: 'Anonymous',
    location: 'Los Angeles, CA',
    bio: 'Your info here',
}
>>>>>>> master


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