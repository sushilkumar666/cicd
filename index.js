import express from 'express';

const app = express();


app.get("/", (req, res) => {
    res.json({
        sucess: true,
        message: " test successful"
    })
})

app.get("/test", (req, res) => {
    res.json({
        sucess: true,
        message: " this is test routes test successful"
    })
})

app.get("/test1", (req, res) => {
    res.json({
        sucess: true,
        message: " test1 successfull"
    })
})


console.log("ci/cd test");

app.listen(3000, () => console.log("app listening on port 3000"));