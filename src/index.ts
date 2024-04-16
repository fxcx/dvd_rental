import { Elysia } from "elysia";
import { swagger } from "@elysiajs/swagger";

import actorRoute from "./routes/actor";

const app = new Elysia();

app.use(swagger());

app.group("/api", (app) => 
  app.use(actorRoute))
  
app.listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);