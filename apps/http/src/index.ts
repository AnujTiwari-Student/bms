import express from "express";
import {client} from "@repo/prisma/client"

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hello World!");
})

app.post("/signup", async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    const email = req.body.email;

    const user = await client.user.create({
        data: {
            username: username,
            password: password,
            email: email
        }
    })

    res.send({
        id: user.id,
        username: user.username,
        email: user.email,
        message: "User created successfully",
        status: 200
    });
})

app.listen(3002, () => {
  console.log("Server is running on port 3002");
})