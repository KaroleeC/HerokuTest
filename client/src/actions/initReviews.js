export const initReviews = (reviews) => {
  console.log('hi from initReviews')
    return {
      type: "INIT_REVIEWS",
      payload: reviews
    }
  
  }