# Definição de Tipos

## O que é Definição de Tipo?

Sempre que estivermos usando uma variável, o Typescript vai checar a declaração daquela variavel e bater se é compativel com o código que estamos escrevendo.
O Compilador consegue fazer isso porque ele tem os arquivos em Typescript as definições dos tipos, classes, funções e metodos.
O Typescript define um padrão onde é possivel mapear uma **biblioteca** qualquer em Javascript para ser usada pelos scripts em Typescript. Podemos definir **namespaces**, **modulos**,
**variáveis**, **funções** ou outros tipos como **interfaces**. E como o nome diz, é apenas a definição de tipos daquela biblioteca não a implementação. Esses arquivos tem a extensão
**\*.d.ts**

## Como obter as definições de Tipo?

A Microsoft mantém um repositório com várias definições de tipos e também as registra para baixarmos usando a ferramenta **NPM** **Registry**, podemos também instalar manualmente obtendo de um repositório
do Github chamado **Definitely** **Typed**.

#### Usando o NPM

1. No diretório raiz da aplicação, basta iniciar com o comando:

   ```
   > npm init
   ```

   O Node fará algumas perguntas sobre nossa aplicação, como o nome, versão e várias outras. Usa-se o parametro **-f** para forçar os outros padrões

2. O próximo passo é informar que biblioteca gostariamos de instalar, por exemplo usamos o comando abaixo para instalar o lodash@4.14:

   ```
   > npm install --save lodash@4.14
   ```

   O parametro **--save** significa que o Lodash é necessário tanto em desenvolvimento quanto em runtime.

3. O passo seguinte é instalar a **definição** **de** **tipos** para o Lodash. O time do Typescript vem publicando as definições de tipo do **Definitely** **Typed** em pequenos pacotes npm usando o padrão de nome **@types/<nome_da_definição>**, exemplo:
   ```
   > npm install --save-dev @types/lodash@4.14
   ```
   O parametro **--save-dev** significa que a definição de tipos vai ser necessária apenas em desenvolvimento, mas não em runtime.

#### Arquivo package.json

Um dos resultados do uso dos comandos acima, é o arquivo **package.json** que contém informações básicas da aplicação e também suas dependencias, que significa que nossa aplicação dependerá do Lodash e da definição de tipos também

Arquivo **package.json**

```
{
    "name":"typescript",
    "version":"1.0.0",
    "dependencies":{
        "lodash":"4.14.2"
    }
    "dev-dependencies":{
        "@types/lodash":"4.14.51"
    }
}
```
