# Conhecendo a Estrutura Gerada

## Arquivo **package.json**

O **package.json** é um arquivo de configuração da nossa aplicação. Nele também podemos encontrar todas as **dependencias** da nossa aplicação, teremos também alguns **scripts** **iniciais** que podemos utilizar

## Arquivo **.angular-cli.json**

É o arquivo de configuração do Angular CLI, nele encontramos algumas coisas que podemos customizar, como quais arquivos de estilo usamos na aplicação, quais arquivos de script usamos. Podemos encontrar também os assets principais, por exemplo, a pasta **assets** e o **favicon.ico**. Temos como configurar qual será nosso arquivo **index**, o nosso arquivo **main**, a configuração do nosso **compilador** **Typescript**, o **tsconfig** que é utilizado pelos testes, o **prefix**, que será utilizado na frente de cada **componente** que criarmos através do Angular CLI, temos o **styles** que é onde podemos colocar outros arquivos de estilo que queremos que o **Webpack** processe, além de outras configurações para testes.

## O que é **Webpack**?

Em versões anteriores do Angular CLI, gerava as aplicações utilizando outro **módulo** **bundle** chamado **SystemJS** mas a partir de uma determinada versão, o angular mudou e começou a utilizar o **Webpack**.
O **Webpack** é uma **biblioteca** em Javascript responsavel por criar bundles na nossa aplicação, ele tem a função de compilar os arquivos e separá-los em bundles especificos.

## Arquivo Styles

Este arquivo pode ser tanto **.sass**, **.scss**, **.less** ou **.css**. Este arquivo representa o local onde podemos colocar todos os estilos globais da nossa aplicação. Ele está listado no arquivo **.angular-cli.json** no elemento **styles**. Tudo que colocarmos dentro dele, será aplicado como estilo global na aplicação.

## Arquivo **polyfills.ts**

Neste arquivo incluimos scripts que darão suporte a **funcionalidades** **novas** a **browsers** **antigos**, por exemplo browsers que não implementam as **features** do EcmaScript 2015 ou versões mais futuras do Javascript ou algumas outras features como **internacionalização**
