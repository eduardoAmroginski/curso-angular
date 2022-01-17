# Aula 23 - Passando Valores a um Componente

As propriedades que adicionamos aos componentes são **públicas** mas precisamos avisar o Angular
quais dessas propriedades podem receber dados dos seus componentes **parents** através do Property Binding. Ou listamos um atributo que queremos expor na lista de inputs do decorator **@Component** ou marcamos outro atributo com o decorator **@Input**.

## Exemplo 1

```
import { Component, Input } from '@angular/core'

@Component({
    selector: 'mt-header'
    template: '<h1>{{title}}</h1>'
})

export class HeaderComponent{

  @Input() title: string

}

```

```
<!--usando o header em outro componente -->
<mt-header title="Minha App"></mt-header>

```

```
<!--DOM em runtime -->
<mt-header title="Minha App">
    <h1>Minha App</h1> ------------------> Conteúdo renderizado
</mt-header>

```

## Exemplo 2

Usando template interpolation

```
<!--template interpolation -->
<mt-header title="{{isJedi ? 'Jedi' : 'Sith'}}"></mt-header>
```

Usando Property Binding

```
<!--template interpolation -->
<mt-header [title]="isJedi ? 'Jedi' : 'Sith'"></mt-header>
```

## Exemplo 3

Uma outra possibilidade é expor o atributo com outro nome. Por padrão, o nome do atributo é que é exposto.
No exemplo abaixo, vemos a substituição para o nome **value**, sendo assim, ao usar o componente podemos passar o valor do atributo usando o valor **value** que foi definido no decorator **@Input**.

```
import { Component, Input } from '@angular/core'

@Component({
    selector: 'mt-header'
    template: '<h1>{{title}}</h1>'
})

export class HeaderComponent{

  @Input('value') title: string

}

```

```
<!--usando o header em outro componente -->
<mt-header value="titulo"></mt-header>

```
