module.exports = (req,res,next) => {
    console.log("Request passed through Middleware...")
    next()
}
