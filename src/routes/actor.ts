import { Elysia, t } from "elysia";
import {
    createActor,
    deleteActor,
    getActors,
    updateActor,
    getActorById,
} from "../controllers/actor";

type Actor = {
    id: number;
}


const actorRoutes = new Elysia({ prefix: "/actor" })

    .get("/", () => {
        return getActors()
    })
    .post("/", ({ body }) => {
        return createActor(body)
    })
    .get("/:id", ({ params: { id } }) => getActorById(id), {
        params: t.Object({ id: t.Numeric() }),
    })
    .patch("/:id", ({ params: { id }, body}) => {
        return updateActor(Number(id), body)
    })
    .delete("/:id", ({ params: { id } }) => deleteActor(id),{
        params: t.Object({ id: t.Numeric() }),
    })

export default actorRoutes;