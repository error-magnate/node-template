// Import this routes in index.js
const express = require("express")
const router = express.Router()

// Edit the 'route-address' with your route address

router.get("/route-address", (req,res)=>{
  // Edit your business logic for the route here
  res.send("Route is working")
})

module.exports = router
