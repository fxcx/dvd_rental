import { Elysia } from 'elysia'

// elicia esta construido sobre solicitudes respuestas de standar web
new Elysia()
    // Equivalent to "new Response('hi')"
    .get('/', () => 'hi')
    .get('/', () => new Response('hi')) // es igual 