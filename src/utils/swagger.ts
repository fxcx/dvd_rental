import { swagger } from '@elysiajs/swagger'

export const wawa = swagger({
  documentation: {
    tags: [
      { name: 'App', description: 'General endpoints' },
      { name: 'Auth', description: 'Authentication endpoints' }
    ]
  }
})