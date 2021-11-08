# Classes e Interfaces

## Classes

### O que é uma Classe?

São representações de objetos no mundo real, podem ter caracteristicas ou atributos e também podem realizar ações que chamamos de Methods
Uma Classe é um modelo, é a definição de um objeto. Ela diz exatamente o que um objeto vai ter e como ele vai se comportar.
Um objeto é basicamente uma instancia dessa Classe. A partir do "Modelo", podemos criar vários objetos que podem ficar na memória da nossa aplicação.
Classes podem herdar caracteristicas de outras classes, e assim ganhar atributos e comportamentos mantendo a simplicidade do código.

### Como definir uma classe?

Existe uma convenção que classes devem começar com letra maiscula.

#### Atributos:

Classes podem ter atributos, que por padrão são publicos. Isso quer dizer que outros objetos poderão acessar e modificar o valor diretamente.

#### Constructors:

Os construtores são usados para inicializar os objetos criados a partir dessa classe. Em geral serão uma série de argumentos tipados que terão
seus valores atribuidos aos campos daquela classe. Sempre que precisarmos acessar um atributo de uma classe estando dentro da classe, será necessário
o uso da palavra reservada **this**

#### Methods

Classes também podem definir **Métodos**, que são ações pertencentes aos objetos dessa classe. A sintaxe de um método não precisa da palavra **function**.

#### Exemplo de classe

```
class Spacecraft {
    propulsor: string

    constructor(propulsor: string){
        this.propulsor = propulsor
    }

    jumpIntoHyperspace(){
        console.log("Entering hyperspace with " + this.propulsor)
    }

}
```

#### Exemplo de criação de objeto a partir de uma classe

```
let falcon = new Spacecraft("Hyperdrive")

falcon.jumpIntoHyperspace()

> Entering hyperspace with Hyperdrive
```

### Exemplo de classe escrida de maneira mais enxuta

Dessa forma, os atributos não seriam mais acessados diretamente por outros objetos como acontece com atributos publicos

```
class Spacecraft {

    constructor(public propulsor: string){}

}
```

#### Herança

Heranças são caracteristicas herdadas/extendidas de uma classe padrão, que serve como **modelo basico**.
No exemplo abaixo, criamos uma nova classe chamada **MilleniumFalcon** extendendo da nossa classe já existente **Spacecraft**.
Precisamos informar um **propulsor** toda vez que criarmos uma nave basica porque o construtor de toda a classe base exige isso. Então passamos este valor usando a palavra reservada **super** dentro do construtor da nossa nova classe.
Podemos redefinir um **metodo** já existente heradado da nossa classe **Spacecraft**, no exemplo passaremos um teste aleatório que nos permite ter sorte ou não de ir para o hyperespaço. Utilizamos a palavra **super** quando quisermos invocar a implementação original de um metodo da classe extendida.

```
class MillenniumFalcon extends Spacecraft{
    construtor(){
        super("Hyperdrive")
    }

    jumpIntoHyperspace(){
        if(Math.random() >= 0.5){
            super.jumpIntoHyperspace()
        }else{
            console.log("Failed")
        }
    }
}
```

## Interfaces

### O que são Interfaces?

Uma **Interface** define um "contrato" que classes que implementam devem obedecer. Isso pode ser um conjunto de atributos ou um determinado comportamento que pode ser comum a vários objetos. O conceito é **similar** à **herança** porém aqui não há a implementação, apenas o que deve ser implementado.

### Exemplo:

Imaginemos que temos uma **interface** chamada Containership, que define quantos container uma nave de carga deve ter, qualquer nave que implementar essa interface automaticamente se torna nave de carga e na interface podemos definir propriedades para as naves de carga como, por exemplo, a quantidade dos containers de carga.

#### Criação de uma Interface:

```
interface Containership{
    cargoContainers: number
}
```

#### Utilização de uma Interface

```
class MillenniumFalcon extends Spacecraft implements ContainerShip{
    cargoContainer: number

    construtor(){
        super("Hyperdrive")
        this.cargoContainers = 4
    }

}
```

Usando **implements <nome_da_interface>**, precisamos definir exatamente o que foi definido no "contrato". Com isso, qualquer código que saiba lidar com **Containership**, poderá lidar com a **MillenniumFalcon**. Com isso podemos ter uma função chamada **GoodForTheJob**, que verifica se a nave é boa para transporte caso tenha mais de 2 containers de carga

```
function goodForTheJob(ship: Containership): boolean {
    return ship.cargoContainers > 2
}

let falcon = new Millennium()
console.log(goodForTheJob(falcon))

> true

```

### Interfaces extendendo outras Interfaces

Interfaces podem extender outras interfaces. E assim como as classes, herdará o conteudo da outra interface.

```
interface Smugglership extends Containership{
    hiddenContainers: number
}
```
