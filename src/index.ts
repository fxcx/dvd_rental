import { Elysia, t } from "elysia"
import { swagger } from "@elysiajs/swagger"
import { errorHandler } from "middleware/errorHandler.ts"
import actorRoute from "./routes/actor"

const app = new Elysia();

app.use(swagger());

app.group("/api", (app) =>
  app.use(actorRoute))


//! implementar verciones
app.group('/api/v1',{body: t.Literal('shikamaru')},(app) => app.use(actorRoute))

app.use(errorHandler)

app.listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);