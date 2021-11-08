# Funções em TS

Em typescript podemos dizer que uma variável será uma função informando os argumentos e o tipo de retorno, da seguinte forma:

```
let call: (name:string) => void
```

Posteriormente podemos utilizar essa variavel declarada como uma função da seguinte forma (usando Arrow Function):

```
call = name => console.log("Do you copy, " + name + "?")
```

### Parametros opcionais

Podemos dizer para as funções em typescript que um parametro é opcional, atribuindo um **?** logo após o fim do nome do argumento ou atribuindo um valor **default** logo após a declaração do argumento

#### Exemplo 1 usando "?":

```
function inc(speed: number, inc?: number):number{
    let i = inc || 1
    return speed + 1
}
```

#### Exemplo 2 usando valor default:

```
function inc(speed: number, inc: number = 1):number{
    return speed + inc
}
```

### Parametros Rest

Permite indicarmos que o ultimo parametro da função irá receber multiplos valores, e o transforma automaticamente em um array dentro da função

#### Exemplo 1, sem parametros Rest:

```
function countJedis(jedis: number[]): number {
    return jedis.reduce((a, b) => a + b, 0)
}

countJedis([2, 3, 4])

> 9
```

#### Exemplo 2, com parametros Rest:

Usa-se **...** antes do nome do argumento para marcarmos o parametro, para tornar a chamada mais simples. evitando a necessidade de se passar um array

```
function countJedis(...jedis: number[]): number {
    return jedis.reduce((a, b) => a + b, 0)
}

countJedis(2, 3, 4)

> 9
```
