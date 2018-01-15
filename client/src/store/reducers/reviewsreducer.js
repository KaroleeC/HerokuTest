//dummy reviews data
const dumreviews =  [
    {
        id: 1,
        userid: 1,
        score: 5,
        restaurantid: 2,
        text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa."
       
    },
    {
        id: 2,
        userid: 2,
        score: 5,
        restaurantid: 2,
        text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa."
    },
    {
        id: 3,
        userid: 1,
        score: 5,
        restaurantid: 2,
        text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa."
    }
];

export default function (state=dumreviews, action) {
    switch(action.type) {
        case "INIT_REVIEWS":
            console.log('payload', action.payload);
          return action.payload
          break;
          
        }
        return state;
}

