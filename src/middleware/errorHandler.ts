import { Elysia, NotFoundError } from 'elysia'

export const errorHandler = new Elysia()
    .onError(({ code, error, set }) => {
        if (code === 'NOT_FOUND') {
            set.status = 404,
            set.headers['content-type'] = 'text/plain'
            return 'Not Found :('
        }
        throw new NotFoundError('Not Found :(')
    })


