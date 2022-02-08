# O que são Pipes

**Pipes** são responsáveis por transformações de dados para uma apresentação diferente. No **Angular 1**, pipes são chamados de **Filtros**.
Com Pipes, conseguimos transformar uma string em lowercase ou uppercase, formatar numeros, moedas, datas, limitar o tamanho de um array ou até mesmo formatar um conteúdo json.

### Exemplos

Vamos imaginar que temos uma propriedade como a abaixo em um componente, um objeto com outras duas propriedades, e desejamos ver o conteudo desse objeto diretamente na página.

```
// in component

user = {name: 'Luke Skywalker', isJedi: true}
```

Se usarmos o objeto _user_ direto em uma interpolação de template,

```
<!-- in template -->

<div>{{ user }}</div>
```

provavelmente o resultado será uma representação textual do objeto que não é o que esperamos.

```
<!-- renderizado -->

<div>[object Object]</div>
```

#### Usando o Pipe Json

```
// in component

user = {name: 'Luke Skywalker', isJedi: true}
```

Ao usar o **Pipe (|) json**,

```
<!-- in template -->

<div>{{ user | json }}</div> ------------------| JSON PIPE
```

ele irá formatar o conteúdo em uma string usando essa notação, exibirá todas as propriedades de um objeto.

```
<!-- renderizado -->

<div>{name: 'Luke Skywalker', isJedi: true}</div>
```

Esse pipe não é muito util em produção mas é bem util quando queremos debugar rapidamente o valor de um objeto.

#### Usando o Pipe Uppercase

Outro pipe que pode ser bem util é o **uppercase** que transforma todo o conteúdo da string em letras maiusculas

```
// in component

user = {name: 'Luke Skywalker', isJedi: true}
```

```
<!-- in template -->

<div>{{ user | uppercase }}</div> ------------------| UPPERCASE PIPE
```

```
<!-- renderizado -->

<div>LUKE SKYWALKER</div>
```

#### Usando o Pipe Lowercase

Assim como o uppercase também há o **lowercase** que transforma todo o conteúdo da string em letras minusculas.

```
// in component

user = {name: 'Luke Skywalker', isJedi: true}
```

```
<!-- in template -->

<div>{{ user | lowercase }}</div> ------------------| LOWERCASE PIPE
```

```
<!-- renderizado -->

<div>luke skywalker</div>
```

#### Percent Pipe

Se quisermos transformar um número em sua representação **percentual**, usamos o pipe percente

```
<!-- in template -->

<div>{{ 0.5 | percent }}</div> ------------------| PERCENT PIPE
```

```
<!-- renderizado -->

<div>50%</div>
```

#### Date Pipe

Para datas, usamos o pipe **date** que transforma usando um padrão especifico passado por parametro, os parâmetros de um pipe são separados por **:**

```
<!-- in template -->

<div>{{ birthday | date: 'dd/MM/yyyy' }}</div> ------------------|  PIPE DATE PASSANDO PARÂMETROS
```

```
<!-- renderizado -->

<div>12/12/1994</div>
```

#### Currency Pipe

Para moedas, existe o pipe **currency** que tem até três parametros opcionais

```
<!-- in template -->

<div>{{ price | currency }}</div> ------------------| CURRENCY PIPE SEM PARÂMETROS
```

```
<!-- renderizado -->

<div>USD45.90</div>
```

1. O primeiro parametro indica a string ISO, representando a moeda a ser usada.
2. O segundo indica se usa-se o simbolo ao invés da string ISO.
3. O terceiro indica o formato do numero.

```
<!-- in template -->

<div>{{ price | currency: 'BRL' : true }}</div> ------------------| CURRENCY PIPE COM PARÂMETROS
```

```
<!-- renderizado -->

<div>R$45.90</div>
```

#### Slice Pipe

Com o **Pipe Slice** conseguimos **limitar arrays e strings**

```
// in component

user = {name: 'Luke Skywalker', isJedi: true}
```

```
<!-- in template -->

<div>{{ user.name | slice: 0:4 }}</div> ------------------| SLICE PIPE
```

```
<!-- renderizado -->

<div>Luke</div>
```

No exemplo acima, o _name_ de _user_ é limitado aos 4 primeiros caracteres da string.

#### Combinando Pipes

Assim como no AngularJS, pipes podem ser combinados com outros pipes até que se chegue no resultado esperado

```
<!-- in template -->
<div>{{['one', 'two'] | slice: 0:1 | json | uppercase}}</div>
```

```
<!-- renderizado -->
<div>["ONE]</div>
```
