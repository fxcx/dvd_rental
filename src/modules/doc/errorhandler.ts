import Elysia from "elysia"

const errorHadler = new Elysia()
    // ESTAS SON MANERAS D MANEJAR LOS ERRORS
    // error en fiuncion
    .get('/', ({ error }) => error(404, 'bad recuest'))

    // error en el contralodaro recomendado

    .onBeforeHandle(({ set }) => {
        set.status = 404, 'undefined', 'podria poner todos ?'
        return 'este error es personalizado con el status code'
    })

    .get("/", ({ set }) => {
        set.headers['x-powered-by'] = 'Elysia'
    })