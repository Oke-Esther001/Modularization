const express  = require("express")
const app  =  express()
require ("dotenv").config()
let PORT  = process.env.PORT
const UserRouter  =  require("./routes/user.route")

// app.use(express.json())
app.use("/", UserRouter)


app.listen(PORT, ()  => {
    console.log(`server running on port ${PORT}`);
})