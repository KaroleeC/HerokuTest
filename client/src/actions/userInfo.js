export const userInfo= (data) => {
  console.log('inside of userinfo this is the data!!!', data)
    return {
      type: "USER_LOAD",
      payload: data
    }
  
}

export const userreviews  = (data) => {
  console.log('inside of userreview this is the data!!!', data)
  return {
    type: "USER_REVIEWS",
    payload: data
  }
}