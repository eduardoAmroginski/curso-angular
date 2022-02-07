# Criando a Classe de Serviço para Restaurantes

Um Serviço geralmente é utilizado para acessa o backend da nossa aplicação, podemos declarar em vários lugares, podemos por na lista de Providers do componente ou na lista de Providers do módulo. Dependendo de onde é declarada, a visibilidade do Serviço pode ser maior ou menor e nosso componente pode ganhar uma **instancia global** que seria a declarada no **Módulo** ou uma **instância própria** que seria declarada na **lista de providers do próprio componente**

Nessa aula foram feitas as seguintes coisas:

1. Criado o Serviço **RestaurantsService**
2. **restaurants.component.ts** foi refatorado para utilziar o **RestaurantsService**
3. **RestaurantsService** foi declarado no **app.module.ts**
