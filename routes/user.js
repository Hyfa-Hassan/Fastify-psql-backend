import fastify from "fastify";
import { addUser, deleteUser, getUser, updateUser } from "../controllers/user.js";

const router1 = async(server) => {

    server.post("/createuser", async (req, reply) => {
        await addUser(req, reply);
    });

    server.get("/getuser", getUser);

    server.delete("/deleteuser/:id", async (req, reply) => {
        await deleteUser(req, reply);
    });
    
    server.patch("/updateuser/:id", async (req, reply) => {
        await updateUser(req, reply);
    });

}
export default router1;