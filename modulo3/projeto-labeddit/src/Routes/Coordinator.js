export const goBack = (navigate) => {
  navigate(-1)
}

export const goToLogin = (navigate) => {
  navigate("/login")
}


export const goToFeed = (navigate) => {
  navigate("/")
}

export const goToRegistration = (navigate) => {
  navigate("/registration")
} 

export const goToTripDetails = (navigate, postId) => {
  navigate(`/post/${postId}`)
}