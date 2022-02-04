# O que são Rotas ?

Na maioria das aplicações será muito comum uma parte do conteúdo fixa e outra parte que muda de acordo com a navegação do usuário.

Imagine que temos um template que dentro temos um componente principal que há um **HEADER**, geralmente conteudo o menu, e sempre que o usuário entra com uma url ou aciona um link relacionado, o conteudo principal muda de acordo com o que foi requisitado.

Então, para a url **/home**, teremos o conteúdo da **HOME**, da mesma forma que sempre que o novo conteúdo é pedido ele é apresentado.

## Exemplo 1

se quisermos marcar uma área como dinâmica para ser trocada sempre que o novo componente entrar em cena, precisaremos colocar um elemento especial chamado **router-outlet**, é nessa região que os componente serão colocados.

```
<!-- no template do componente -->
<div>
    <mt-header></mt-header> <!-- FIXO -->
</div>
<div>
    <router-outlet></router-outlet> <!-- DINÂMICO -->
</div>
```

Para isso precisamos mapear cada componente em algo chamado de rota. As rotas são basicamente um **array** que contém um mapeamento de cada caminho para um componente, rotas aceitam parâmetros usando a sintaxe de dois pontos seguido do nome do parâmetro. Por fim, precisamos indicar que rotas serão usadas no modo através da função **forRoot** no modulo raiz ou **forChild** nos outros módulos

```
/* Arquivo ROUTES */

export const ROUTES: Route = [
    {path: '', component: RestaurantsComponent },
    {path: 'restaurant/:id', component: RestaurantsComponent },
    {path: 'about', component: AboutComponent },
]

```

```
/* app.module.ts / Módulo Raiz*/

@NgModule({
    declarations: [...],
    imports: [..., RouterModule.forRoot(ROUTES)],
})

export class AppModule
```

## Como conseguimos navegar?

O módulo de roteamento, disponibiliza uma diretiva chamada **routerLink** onde podemos passar um caminho a ser acionado ou um conjunto de parâmetros. Podemos usar das duas maneiras mostradas abaixo.

```
<!-- no template de algum componente -->
<a routerLink="/restaurants">Restaurantes</a>
```

```
<!-- ou -->
<a [routerLink]="['/restaurants']">Restaurantes</a>
```
