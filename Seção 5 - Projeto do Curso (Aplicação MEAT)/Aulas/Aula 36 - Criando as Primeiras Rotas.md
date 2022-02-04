# Criando as Primeiras Rotas

1. Criado novo componente chamado **about**
2. Criado arquivo **app.routes.ts** no mesmo nivel do **app.module.ts**, ele conterá nossas rotas declaradas.
3. Importar as rotas dentro do nosso modulo principal **app.module.ts**, através do método **forRoot**.

## Importação de rotas

Importamos as rotas de duas formas:

1. Se estivermos no módulo raiz (app.module.ts), importamos através de um método chamado **forRoot** no **RouterModule** e passamos nosso array de rotas, o **ROUTES**
2. Se estivermos em outro módulo, utilizamos o método **forChild**.
