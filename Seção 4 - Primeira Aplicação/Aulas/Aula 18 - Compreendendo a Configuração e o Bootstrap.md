# Compreendendo a Configuração e o Bootstrap

Quando usamos os comandos **ng** ou **ng** **serve**, estamos disparando um servidor do **webpack**. Um servidor interno que é utilizado somente para desenvolvimento que é chamado **Live** **Development** **Server**. Então apartir disso, o webpack olhará os nossos arquivos da nossa aplicação, començando pelo arquivo **main.ts**, fará um mapeamento de todas as dependencias e scripts que temos e a partir disso, irá separar tudo em pequenos **bundles**.
Após esta divisão em bundles, quando pedirmos o **index.html**, dinamicamente será injetado o conteudo dos bundles no final do arquivo **index.html**

## Modulo Angular (app.module.ts)

É diferente do modulo do **ECMAScript** que é apenas uma maneira de declarar quais funções, variaveis, interfaces, classes queremos exportar de dentro de um arquivo TS ou JS.
Já o **Módulo** **Angular** é responsavel por agrupar uma série de componentes da nossa aplicação ou do próprio **framework**
Toda aplicação em Angular vai ter pelo menos um **módulo**, que é o **módulo** **raiz** (app.module.ts) mais um **componente** que é o **componente** **de** **Bootstrap**. Opcionalmente podemos não ter o componente de bootstrap e usar uma função para fazer o bootstrap da nossa aplicação, porém na maioria dos casos teremos um componente para fazer isso.

#### Decorator **@NgModule**

É um decorator que tem como função aplicar **metadados** em uma classe, um atributo, um método ou em um argumento de método.

## Arquivo **app.component.ts**

Nele temos o decorator **@Component** que aplica metadados especificos de **componentes**, como por exemplo:

- **selector**:
  Define o nome de como o componente será chamado em uma página, é **obrigatório**;
- **templateURL**:
  Define qual será o arquivo **template**, o corpo do nosso componente, é **obrigatório**;
- **styleUrls**
  Define qual será o arquivo de **estilo** do nosso componente, **não** **é** **obrigatório**;
