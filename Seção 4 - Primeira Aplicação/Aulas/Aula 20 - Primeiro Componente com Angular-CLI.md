# Primeiro Componente com Angular-CLI
No console/terminal, dentro da pasta raiz do projeto utilize o comando:
```
ng generate component <nome_do_componente> --skip-tests
```
ou podemos usar também a forma reduzida:
```
ng g c <nome_do_componente> --skip-tests
```
O comando **--skip-tests** ou **--spec=false** faz com que não sejam gerados os arquivos de teste do componente.

## ngOnInit
Colocamos as funcionalidades que queremos que executem com a inicialização do componente dentro desta função, com isso, é garantido que as funcionalidades serão chamadas pelo menos uma vez durante o ciclo de vida de um componente.