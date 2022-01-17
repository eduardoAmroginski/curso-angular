# O que é Property Binding ?

**Property Binding** é quando desejamos "linkar" o valor de uma propriedade de um elemento a uma expressão Angular
que pode avaliar a propriedade de um componente, método ou até uma expressão mais elaborada.

A sintaxe de Property Binding é feita com **[]** (colchetes) ao redor da propriedade do elemento que desejamos atribuir
valor e pode ser aplicada a qualquer propriedade de um elemento do DOM

### ONE-WAY Binding

#### Exemplo 1

```
//no componente
user = {name: 'Luke Skywalker'}
```

```
<!--no template do componente-->
<input type="text" [value]="user.name">
```

COMPONENT => TEMPLATE

No código mostrado a cima, o **name** de **user** terá o seu valor atribuido ao **value** de **input**, além de sempre que o valor de name mudar, o valor do input também irá mudar, mostrando que eles estão ligados. Por isso é
chamado de Property Binding. Nesse caso, como a atualização é sempre em um sentido, é chamado de **ONE-WAY Binding**.
ONE-WAY Binding é sempre do **componente** para o **template**

#### Exemplo 2

```

//in component
user = {name: 'Luke Skywalker',
        isJedi: true}
```

```
<!--in template-->
<input type="text" [value]="user.name">
<div [hidden]="!user.isJedi">
    Location of the Jedi Temple
</div>
```

Nesse exemplo, caso o usuário não seja um Jedi, o div que contem a porpriedade **hidden** ficará invisivel.

```
<div [class.light]="user.isJedi"></div>
```

caso **user.isJedi** seja "true" no ultimo bloco, então o Angular adicionará a classe **light** na renderização:

```
<div class="light"></div>
```
