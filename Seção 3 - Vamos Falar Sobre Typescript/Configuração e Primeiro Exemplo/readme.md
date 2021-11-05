# Usando Compilador TSC

### Instalação

1. No terminal utilize o comando:
   ```
   npm install -g typescript
   ```
2. Para verificar se foi instalado, utilize o comando:
   ```
   tsc --version
   ```

### Compilação

1. Para compilar um arquivo use o comando:
   ```
   tsc <nome_do_arquivo>.ts
   ```
2. Será gerado um arquivo compilado com mesmo nome, porém com a extensão .js

### Monitoramento de arquivos para compilação

1. Para monitorar os arquivos .ts, na pasta raiz do projeto execute o comando:
   ```
   tsc -w
   ```
