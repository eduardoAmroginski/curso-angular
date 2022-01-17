# Aula 27 - Usando Operador de Navegação Segura

Se tentarmos usar um componente que tenha propriedades definidas e não passarmos o objeto para ele, o Angular nos mostrará erros no Console porque nosso objeto é **undefined**. Uma das coisas que podemos fazer para evitar este erro é usar o **Operador de Navegação Segura** que é a **interrogação** (?)

## Exemplo:

No exemplo a baixo, utilizamos o Operador de Nevegação Segura, para dizer que caso o objeto student seja undefined, não há a necessidade de continuar lendo as outras propriedades dentro dele pois caso seja lido, irá quebrar durante a execução.

```
<!-- student.component.html -->
<div>
  Student: {{ student?.name }}
  <div *ngIf="student?.isJedi">Jedi Temple: {{ student?.temple }}</div>
</div>

```
