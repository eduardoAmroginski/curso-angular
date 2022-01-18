# Aula 30 - Adicionando Eventos a um Elemento do Template

Exemplo adicionado ao componente **student**, adicionamos no template uma tag "a" com um evento de click.

## Váriaveis de Template

Em Angular, podemos pegar a referencia a um elemento do DOM ou um componente utilizando **váriaveis de template**. Para utilizar a váriavel de template adicionamos # (hashtag) antes do nome da váriavel no template.

### Exemplo:

No exemplo abaixo, utilizamos a váriavel de template **#description** em um elemento textarea. Adicionamos o evento de "click" em um elemento button que ao ser clicado irá focar no elemento textarea, pois este foi referenciado no evento de click do botão utilizando **description.focus()**

```
<!-- no template do componente -->
<div>
    Jedi Temple: {{ student?.temple }}
    <button (click)="description.focus()">Focus!</button>
    <br />
    <textarea #description></textarea>
</div>
```
