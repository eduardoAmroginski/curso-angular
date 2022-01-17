# Aula 29 - Emitindo Eventos em um Componente

O componente pode emitir um evento personalizado também. Para isso, nós usamos uma classe chamada **EventEmitter** que é um _adapter_ para a biblioteca RXJS e possui um método **emit** que chamamos quando chegar o momento de emitir o evento

## Exemplo de evento personalizado

A implementação é simples, quando chegar o momento de emitir o evento, basta chamar o método **emit** de EventEmitter

```
import { Component, Output, EventEmitter } from '@angular/core'

@Component({
    selector: 'mt-clickable',
    template: '<button (click)="clicked()"> Click </button>'
})

export class ClickableComponent {

    @Output() myEvent = new EventEmitter()

    clicked(): void {
        this.myEvent.emit()
    }
}
```

### Decorator @Output

O decorator **@Output** é analogo ao decorator **@Input** só que ao inves de receber valores, ele emite eventos.
A saida do componente o tipo será e **EventEmmiter** e o nome do evento por padrão é o nome da propriedade.

## Exemplo 2

Usando o componente, podemos atribuir o método que será chamado quando o evento for emitido

```
<!-- no template que usa o componente -->
<mt-clickable (myEvent)="willBeCalled()"></mt-clickable>
```

```
willBeCalled(): void {
    console.log('Event from clickable')
}
```
