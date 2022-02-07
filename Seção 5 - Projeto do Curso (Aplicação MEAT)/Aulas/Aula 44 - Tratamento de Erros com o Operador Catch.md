# Tratamento de Erros com o Operador Catch

Existem duas formas de tratar erros no Angular, uma é implementar a interface Handler e criando uma classe que faz um tratamento de erro global. Na verdade vamos configurar essa classe como um provider da nossa aplicação do mesmo jeito que declaramos o nosso **restaurantService** e a outra forma é utilizar o operador **Catch** de observable.

Sempre que tivermos um erro na sequencia de streamings, o observable será "fechado". Então na hora de tratar o erro, teremos uma chance de "_loggar_" aquele erro porém teremos que devolver outro observable, e esse outro observable vamos decidir se queremos trocar por uma outra sequencia ou se queremos simplesmente disparar um erro.
