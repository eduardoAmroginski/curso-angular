# Parametrizando as Rotas

Rotas Parametrizadas são rotas onde parte dela vai identificar um objeto que está armazenado no nosso backend.

Em tópicos passados vimos que um caminho pode ser parametrizado com dois pontos seguidos do nome do parametro.

```
export const ROUTES: Route = [
    { path: 'restaurant/:id', component: RestaurantComponent }
]
```

Para passar o valor, usamos a diretiva **RouterLink** que aceita um array de parâmetros.

```
<!-- passando um parâmetro -->
<a [routerLink]="['/restaurant', restaurant.id]">Bakery</a>
```

No exemplo acima, vemos que o caminho "/restaurant" está sendo passado junto com outro parametro que é o id do restaurante.

## Como obter o valor do parâmetro

Nós temos duas formas de obter o valor do parâmetro usando oque chamamos de **Snapshot** que é uma "fotografia" dos parametros do momento que pedirmos e a outra é se **inscrevendo (subscribe)** na rota e escutando as mudanças de parâmetros

### Exemplo usando Snapshot

```
export class MyComponent implements OnInit {

    myObj: any

    constructor(private route: ActivatedRoute){ } ---------| 1º

    ngOnInit(){
        const id = this.route.snapshot.params['id'] -------| 2º
        this.myObj = // ...obter os dados baseado no id
    }

}
```

Neste primeiro caso precisamos resgatar o objeto ActivatedRoute, esse objeto representa a rota ativa no momento, para obter o valor do parâmetro "id" através do **Snapshot** é da forma mostrada no exemplo acima, uma vez de posse do valor podemos consultar nosso backend para obter a informação.

O Snapshot é muito util quando não nos preocupamos se a rota vai mudar e o nosso componente sai de cena e volta depois, sendo destruido e criado novamente. Esse é o caso mais comum e provavelmente o que vamos mais fazer em uma aplicação Angular.

### Exemplo usando Subscribe

Mas há casos em que o componente ainda vai estar na tela e precisa se atualizar sempre que um item é acionado. Como por exemplo mash de atalho.
Então imaginemos o seguinte exemplo sempre que escolhermos um item em uma lista. O detalhe desse item será exibido, se clicarmos em outro item, o detalhe precisa mostrar a nova informação sem sair de cena.
Se observarmos bem, ambos os componentes lista e detalhes estão ativos na tela e o componente detalhe precisa ser atualizado a cada click. Este é o segundo cenário.

```
export class MyComponent implements OnInit {

    myObj: any

    constructor(private route: ActivatedRoute){ } ---------| 1º

    ngOnInit(){
        this.route.params.subscribe (params => { -------| 2º
            const id = params['id']
            this.myObj = // ...obter os dados baseado no id
        })
    }

}
```

No exemplo acima, o componente se inscreve (subscribe) na classe ActivatedRoute (route) para receber as notificações de mudanças de parâmetros nas rotas, então ao invés de usarmos o Snapshot, usamos o método **subscribe** que vai notificar sempre que uma rota mudar.
Neste caso bastaria ir buscar um novo dado assim que a notificação for feita.
