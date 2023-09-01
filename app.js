import fastify from "fastify";
import { connectDb } from "./db/db.js";
import router1 from "./routes/user.js";

const app = fastify();

app.get('/', (req, reply) => {
  reply.send("Hello World");
});

app.register(router1, { prefix: "/api/user" })

connectDb();

const PORT = 7000;
app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});