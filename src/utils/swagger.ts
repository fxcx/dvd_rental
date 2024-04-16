import {swagger} from '@elysiajs/swagger'
import {Elysia} from 'elysia'

new Elysia()
.use(
    swagger({
      documentation: {
        tags: [
          { name: 'App', description: 'General endpoints' },
          { name: 'Auth', description: 'Authentication endpoints' }
        ]
      }
    }))