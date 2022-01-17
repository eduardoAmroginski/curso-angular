# Aula 25 - O que são Diretivas?

Componentes são diretivas com templates, então portanto componentes herdam tudo de diretivas.
Então, diretivas de forma comum e simples, serve para adicionar comportamento a um elemento do DOM mas não tem o template de um componente.

## Tipos de diretivas

No Angular, temos 3 tipos de diretivas

1. **Componentes**: São as mais comuns;
2. **Estruturais**: Estas mudam o template e a estrutura do DOM, o Angular trás algumas delas como o **ngFor** e **ngIf**;
3. **Atributos**: Nessas associamos um atributo a um elemento do DOM e um determinado comportamento é aplicado a aquele elemento.

## Diretiva ngIf

Permite renderizar um conteudo caso a expressão associada seja verdadeira. Se não for, o conteudo não é exibido.
As diretivas estruturais trabalham com um padrão de template do HTML5, o **asterisco** é a forma abreviada da diretiva para fazer com que não seja necessário digitar o elemento template

### Exemplo **Forma Abreviada**

```
<!--ng if-->
<input type="text" [value]="user.name">
<div *ngIf="user.isJedi">
    location of the jedi temple
</div>
```

### Exemplo **Forma não Abreviada**

```
<!--ng if-->
<input type="text" [value]="user.name">
<template [ngIf]="user.isJedi">
    <div>
        location of the jedi temple
    </div>
</template>
```

## Diretiva ngFor

A diretiva **ngFor** vai repetir o conteudo de um elemento para cada item de uma coleção de objetos. Como ela é estrutural, ela também vai repetir o template de cada elemento.
Nos exemplos abaixo, a variável **user** representa cada item da lista de **users**

### Exemplo 1

```
<ul>
    <li *ngFor="let user of users">{{user.name}}</li>
</ul>
```

### Exemplo 2

Podemos também declarar uma variável para saber o índice de cada elemento da lista, o primeiro começando com o valor **zero**

```
<ul>
    <li *ngFor="let user of users; let i=index">
        {{i+1}} - {{user.name}}
    </li>
</ul>
```

## Diretiva ngSwitch, ngSwitchCase e ngSwitchDefault

A diretiva **ngSwitch** avalia uma condição, a diretiva **ngSwitchCase** renderiza o conteúdo equivalente e a diretiva **ngSwitchDefault** mostra o conteúdo caso nenhum dos cases for verdadeiro.
Funciona como um switch-case.

```
<div> [ngSwitch]="profile">
    <p *ngSwitchCase="root"> You can read & write</p>
    <p *ngSwitchCase="user"> You can read</p>
    <p *ngSwitchDefault>go back, please!</p>
</div>
```
