module.exports.isAuthenticated = (req, res, next) => {
  if(req.shop){
    console.log('Authenticated!!!!')
    next();
  } else {
    console.log("Not authenticated :(")
    next();
  }
}