import Elysia from "elysia"

const routes = new Elysia()
    .all('/', () => 'hi') // va a devolver el mismo mensaje para todas las rutas
    
    // 
    .route('M-SEARCH', '/m-search', () => 'connect') // va a devolver el mensaje "connect" para la ruta especifica

    .get("/", ({ path }) => path)

    .get('/id/:id', ({ params: { id } }) => id)

    .get('/id/*', ({ params }) => params['*']) // es mas dinamico

    .get('/id/:id/:name', ({ params: { id, name } }) => `${id}, ${name}`)

//? en resumen
// static patch va a devolver el mismo mensaje para todas las rutas

new Elysia()
    .get('/id/1', () => 'static path')
    .get('/id/:id', () => 'dynamic path')
    .get('/id/*', () => 'wildcard path')
    .listen(3000)