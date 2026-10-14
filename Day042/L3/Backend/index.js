import express from "express";

const app = express();

app.get("/", (req, res) => {
    res.send("Server is ready");
})

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log("server is runninng on port " + port);
})

app.get("/api/jokes", (req, res) => {
    
    const jokes = [
        {
            id: 1,
            title: "a joke",
            content: "this is a joke"
        },
        {
            id: 2,
            title: "a joke",
            content: "this is a joke"
        },
        {
            id: 3,
            title: "a joke",
            content: "this is a joke"
        },
        {
            id: 5,
            title: "a joke",
            content: "this is a joke"
        }
    ];

    res.send(jokes);
});
