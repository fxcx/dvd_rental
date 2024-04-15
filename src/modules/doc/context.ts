import { Elysia } from 'elysia'

//  es un objeto o estado mutable global como el context de front
new Elysia()
    .state('version', 1)
    .get('/a', ({ store: { version } }) => version)
    .get('/b', ({ store }) => store)
    .get('/c', () => 'still ok')
    .listen(3000)

    
//todo store es una representación de un objeto mutable global la verdad para toda la app Elysia.
//? state es una función para asignar un valor inicial a store , que podría mutarse más adelante.

//** cuando llammos al estado, se agrega el valor al store y se podra usar en el controlador

/*
CONSEJO
Tenga en cuenta que no podemos utilizar el valor del estado antes de asignarlo.
Elysia registra los valores de estado en la tienda
automáticamente sin necesidad de un tipo explícito
o genérico adicional de TypeScript.
*/

