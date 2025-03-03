# Teste-com-Jest
Iniciando estudos em testes automatizados utilizando a biblioteca Jest.

## Instalando bibliotecas

- Primeiramente instalamos as libs necessárias como dependências de desenvolvimento.

  ```bash
  $ npm i jest @types/jest ts-jest -D
  ```
## Iniciando jest.config.js
- Esse é um arquivo de configuração do jest e temos duas maneiras de criar.
- Em ambiente **JS** geralmente se inicia com o:
    ```bash
    $ npx jest --init
    ```
    > Vai me perguntar algumas coisas no terminal e no fim será gerado um arquivo maior com mais opções disponíveis.


- Em ambiente **TS** geralmente se inicia com o ts-jest por já configurar os tipos:
    ```bash
    $ npx ts-jest config:init
    ```
    > Nesse não me pergunta nada e já me gera um arquivo mais enxuto.

## Executando testes
- O jest vai analisar meus arquivos e tentar executar todos os que tiverem o **.test.ts** ou **.spec.ts**
- Então sempre que eu quiser criar um teste basta eu colocar o mesmo nome da classe/arquivo e adicionar essa extensão.
- Assim quando eu rodar meu script ele vai procurar esses arquivos.
- O comando é:
    ```
    $ npx jest
    ```
## Criando testes
- Começo chamando a função "it()" ou "test()" e elas recebe **2 parâmetros**.
- O primeiro é uma **string**, onde passamos uma descrição do que se trata o teste.
- O segundo parâmetro é uma **função anonima** onde escrevemos nosso teste dentro
