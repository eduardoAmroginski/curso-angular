# Módulos (ES6)

## O que é um Módulo?

É uma unidade que contem **Classes**, **Interfaces**, **Funções** e **Variáveis**. Com o objetivo de manter o conteúdo de um arquivo isolado do restante da aplicação.
O Javascript "normal" possui apenas **escopo** **global**, o que pode ocasionar problemas de sobrescrita. A ideia do Módulo é exatamente corrigir este problema do Javascript,
fazer o isolamento necessário para que não apareçam comportamentos estranhos decorrentes de declarações com o mesmo nome, apenas quando for necessário, exportamos ou importamos
as declarações de outros módulos.
Módulos em Typescript usam a sintaxe do **ECMAScript** **2015**, que funciona nativo na plataforma **NodeJS** e no **browser** é necessário usar carregadores de módulos como **requireJS**
ou **systemJS**.

## Declarando (exportado) um módulo:

Para declarar um módulo é simples, basta escolher o que exportar dentro de um arquivo.

#### Arquivo: BASE-SHIPS.TS

1. Exemplo **export** junto com o que queremos exportar

   ```
   export interface Containership{
       cargoContainers: number
   }
   ```

2. Exemplo **export** no final do arquivo, passando tudo o que queremos exportar.

   ```
   interface Containership{
       cargoContainers: number
   }

   export { Containership }
   ```

   Podemos exportar com outro nome usando **as** :

   ```
   interface Containership{
       cargoContainers: number
   }

   export { Containership as CShip }
   ```

## Importação de um módulo:

Para importar um módulo basta usarmos o **import** e o **from**

```
import { Spacecraft } from "./base-ships"

class MillenniumFalcon extends Spacecraft{
    //...
}

```

## O que é **NAMESPACES**?

É uma outra maneira que podemos organizar o código, usamos quando desejamos evitar **colisão** de nomes. **Namespaces** são antigos módulos internos do Typescript similar a módulos, apenas o que está exportado no Namespace fica disponivel para ser utilizado externamente.

Arquivo: UTILITIES.TS

```
namespace Utilities{
    export class ShipCleaner{ ... }

    function calcDistance( ... ){ ... }
}
```

Apenas **ShipCleaner** seria visivel fora deste namespace chamado **Utilities**

#### Usando Namespaces:

Para usar namespaces precisamos utilizar a sintaxe abaixo:

Arquivo: OTHER.TS

```
/// <reference path = "Utilities.ts" />

...
let cleaner = new Utilities.ShipCleaner()
...

let distance = Utilities.calcDistance( ... ) X

```

Apenas **ShipCleaner** funcionaria, pois foi exportado no namespace. **calcDistance** não seria acessivel, pois não foi exportado

#### O que não fazer:

Não trate um **NAMESPACE** como **MÓDULO**

```
export namespace Utilities {
    export class ShipCleaner{...}
}
```
