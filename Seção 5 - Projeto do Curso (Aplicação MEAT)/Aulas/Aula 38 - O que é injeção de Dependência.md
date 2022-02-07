# O que é injeção de Dependência?

Injeção de dependência é um **padrão de projeto** onde **a aplicação deixa de instanciar seus objetos manualmente** e passa a depender do framework para obter os objetos que ela quer usar.
O framework gerencia a instanciação dos objetos bem como suas dependências e disponibiliza isso para os componentes da aplicação.

## Exemplo

Imaginemos que um objeto A depende de um objeto B, no nosso caso um componente precisa de um serviço chamado _firstService_. Ao invés de instanciarmos diretamente dentro do construtor o componente pode receber o serviço diretamente pronto como argumento. A vantagem disso é que se o serviço depender de outro objeto, o componente A não precisa se preocupar, ele já vai recebe-lo pronto.

Se instanciassemos manualmente, cada ponto que usasse precisaria também atribuir todas as dependencias de objetos de terceiros. Ao inverter essa responsabilidade e deixarmos com o framework, o código fica mais testavel e mais limpo.

```
@Component({...})

export class MyFirstComponent {
    constructor(private firstService: MyFirstService) {}
}
```

## Informando ao Angular o que será **Injetado**

Para deixar um serviço disponivel para ser injetado em componentes é **necessário declará-lo** na **lista de providers** de um componente ou módulo.

### Para o componente e os filhos

Se for no componente uma instância do serviço fica disponivel para o componente e seus filhos.

```
@Component({providers: [ MyFirstService ]})

export class MyFirstComponent {
    constructor(private firstService: MyFirstService) {}
}
```

### Declarado no módulo

Se for declarado no módulo, o serviço fica disponível para todos os componentes da aplicação.

```
@NgModule([
    declarations: [...],
    providers: [ MyFirstService ]
])

export class AppModule {}
```
