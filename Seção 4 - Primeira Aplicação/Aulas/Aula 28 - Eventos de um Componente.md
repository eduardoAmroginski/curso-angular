# Aula 28 - Eventos de um Componente

Nas versões anteriores a versão 8 do angular, sempre que queriamos acoplar uma ação a um evento de elemento da página, precisavamos usar diretivas providas pelo Framework como EndClick, EndBlur e tantas outras. Assim como Property Binding em que há uma sintaxe única para qualquer propriedade DOM, Eventos tem uma sintaxe única também.

Usamos **parênteses** ao redor de um evento para linka-lo ao método de um componente, assim sempre que uma ação ocorrer o método é chamado.

## Exemplo

No exemplo abaixo, temos um botão que quando clicado dispara um método chamado **clicked**

```
import { Component } from '@angular/core'

@Component({
    selector: 'mt-clickable',
    template: '<button (click)="clicked()"> Click </button>'
})

export class ClickableComponent {
    clicked(): void {
        console.log('Button clicked!')
    }
}
```

## Exemplo 2

Também podemos ter uma referencia ao evento através do objeto **$event**, ele será passado ao nosso método que poderá inspeciona-lo para maiores detalhes.

```
<!-- no template do componente -->
<button (click)="clicked($event)">Click me!</button>
```

```
clicked(event): void {
    console.log(`Button clicked: ${event}`)
}
```

## Exemplo 3

Em certos tipos de eventos como o **keydown**, podemos associar a tecla separada por ".".

No Exemplo abaixo, assim que a tecla **space** for pressionada, o nosso evento ocorrerá.

```
<!-- no template do componente -->
<input (keydown.space)="keyDown($event)">
```

```
keyDown(event): void {
    console.log(`Key down: ${event}`)
}
```
