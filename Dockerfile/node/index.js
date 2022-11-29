const express = require("express")

const app = express(
)

const port = 3000


app.get("/", (req, res) => {
    res.json({
        status: 200,
        message: "OK"
    })
})


app.listen(port, () => {
    console.log("Server is running...")
})

// docker run -it --rm -p 3000:3000 -v $(pwd):/usr/src/app --name node node:15 bash