# O que é um Serviço?

Serviços são classes comuns em Angular que podemos usar para injetar em componentes e em outros serviços. Serviços são usados em uma aplicação para encapsular o acesso a API de backend. Isso ocorre bastante no caso de uma aplicação Angular.

Serviços podem ser **Singletons**, isso quer dizer que são ótimos candidatos para guardar dados compartilhados para toda aplicação, se quisermos também, serviços podem gravar dados apenas para uma parte da aplicação.

```
export class MyFirstService {
    construtor() { }

    list(): MyType[] { //chama a API de backend }
}
```

No geral, são 3 os escopos que podemos usar para declarar um serviço.

## Os 3 escopos

1. **Módulo Angular**: Todo serviço declarado na **lista de Providers do módulo raiz** fica disponivel para ser injetado por todas as classes declaradas nesse mesmo módulo, isso inclui componentes e outros serviços também. Todos eles compartilham a mesma instância desse serviço.
2. **Componente e seus filhos**: Se declarado na **lista de Providers de um componente**, o serviço vai ser instanciado e compartilhado apenas pelo componente e seus componentes filhos. Mesmo se um serviço identico existir como Provider em um módulo, o componente receberá uma outra instancia.
3. **Somente Componente** Nesse caso o serviço será declarado na **lista de viewProviders** e ficará disponivel apenas para o componente e os componentes filhos não terão acesso a essa instância.

## Serviços solicitando Injeção de outros serviços

Serviços também podem solicitar Injeção de outros serviços. Para isso, eles devem usar o decorator **@Injectable()**, porém este decorator não é necessário para que nosso Serviço seja injetado em outro objeto, é usado apenas para receber "Injeções" do framework.

#### Exemplo

```
import { Injectable } from '@angular/core'
import { Http } from '@angular/http'

@Injectable() ----------------------------| RECEBER INJEÇÕES

export class MyService{
    constructor(private http: Http){}

    list() {
        return this.http.get('/url)
    }
}

```

No exemplo acima, vemos um Serviço marcado com **@Injectable()** que recebe um Serviço do framework que é o HTTP.

## Alguns Serviços

Alguns exemplos de Serviços que o Angular disponibiliza são:

1. **Title**: É um Serviço para obter e alterar o título de uma página.
2. **HTTP**: Encapsula acesso HTTP.
3. **Router**: Realiza navegação de forma programática.

### Exemplo de uso do serviço Title

O componente pode requisitar a injeção e usar o método **setTitle** para substituir para o título que quiser. Esse serviço existe porque não é possivel usar expressões Angular na página HTML inteira, como o titulo fica no **Head** e essa oarte não faz parte do bootstrap, foi criada essa alternativa como um Serviço Title

```
import { Title } from '@angular/platform-browser'

@Component({
    viewProviders: [ Title ]
})

export class MyPageComponent {

    constructor(title: Title){
        title.setTitle(':: My Fancy Title ::')
    }

}
```
