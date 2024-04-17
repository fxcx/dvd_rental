import { Elysia, t } from "elysia";
import {
    createActor,
    deleteActor,
    getActors,
    updateActor,
    getActorById,
} from "../controllers/actor";


const actorRoutes = new Elysia({ prefix: "/actor" })

    .get("/", () => {
        return getActors()
    })
    .post("/", ({ body }) => {
        return createActor(body)
    })
    .get("/:id", ({ params: { id } }) => {
        return getActorById(Number(id))
    })
    .patch("/:id", ({ params: { id }, body }) => {
        return updateActor(Number(id), body)
    })
    .delete("/:id", ({ params: { id } }) => {
        return deleteActor(Number(id))
    })

export default actorRoutes;