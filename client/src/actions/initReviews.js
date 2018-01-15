export const initReviews = (data) => {
  console.log('hi from initReviews')
    return {
      type: "INIT_REVIEWS",
      payload: data
    }
  
  }