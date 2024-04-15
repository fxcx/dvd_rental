import { Elysia } from 'elysia'

new Elysia()
    .post('/post', () => 'hi')
    .put('/put', () => 'hi')
    .delete('/delete', () => 'hi')


    .onError(({ code })=>{
      if (code === 'NOT_FOUND')
        return 'route not found'
    })
    
.listen(3000)
// app.handle(new Request('http://localhost:3000/')).then(console.log)