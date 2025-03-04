# Teste-com-Jest
Iniciando estudos em testes automatizados utilizando a biblioteca Jest.

## Instalando bibliotecas

- Primeiramente instalamos as libs necessárias como dependências de desenvolvimento.

  ```bash
   npm i jest @types/jest ts-jest -D
  ```
## Iniciando jest.config.js
- Esse é um arquivo de configuração do jest e temos duas maneiras de criar.
- Em ambiente **JS** geralmente se inicia com o:
    ```bash
     npx jest --init
    ```
    > Vai me perguntar algumas coisas no terminal e no fim será gerado um arquivo maior com mais opções disponíveis.


- Em ambiente **TS** geralmente se inicia com o ts-jest por já configurar os tipos:
    ```bash
     npx ts-jest config:init
    ```
    > Nesse não me pergunta nada e já me gera um arquivo mais enxuto.

## Executando testes
- O jest vai analisar meus arquivos e tentar executar todos os que tiverem o **.test.ts** ou **.spec.ts**
- Então sempre que eu quiser criar um teste basta eu colocar o mesmo nome da classe/arquivo e adicionar essa extensão.
- Assim quando eu rodar meu script ele vai procurar esses arquivos.
- O comando é:
    ```
     npx jest
    ```
## Criando testes
- O teste mais básico criamos chamando a função **it**() ou **test**() e elas recebe **2 parâmetros**.
- O primeiro é uma **string**, onde passamos uma breve descrição do que se trata o teste.
- O segundo parâmetro é uma **função anonima** onde escrevemos nosso teste dentro
  ```TypeScript
    it("retorna 1", () => {
      const number = 1;

      expect(number).toBe(1);
    });
    ```

  > O expect é como realmente vamos testar o código, passamos nossa variável como parâmetro e chamamos a segunda função em cascata para confirmar o valor.
- Podemos ler esse código da seguinte maneira: "Espero que o numero seja 1"
- Quando executamos o script de teste ele vai analisar e se a variável for igual o parâmetro que passamos no toBe ele vai passar, se for diferente ele falha.

## Descrição

- Podemos envolver todo o nosso teste dentro de uma função chamada **describe** que também **2 parâmetros**.
- Com esse recurso podemos criar um "grupo de teste", fazer uma descrição do que seria testado.
- Ex: "deveria criar um novo usuário", dentro da função poderíamos colocar todos os testes que tem relação com criação de novos clientes.
  ```TypeScript
    describe("Should create a new customer ", () => {
      it("Create customer Leonardo", () => {
        const customer = new Customer("Leonardo", "000.000.000-00");
        expect(customer).toBeInstanceOf(Customer);
      });

      it("Create customer João", () => {
        const customer = new Customer("João", "111.111.111-11");
        expect(customer).toBeInstanceOf(Customer);
      });
    });


## Considerações

- É uma boa biblioteca de testes, bem intuitiva e de fácil configuração.
- A partir de agora é dar uma boa lida na documentação para entender mais a fundo sobre o que cada função toBe faz.
- Lembrando que esse repositório é apenas o introdutório a teste com foco apenas no TypeScript para back-end.
- Posteriormente continuarei aprendendo sobre testes focados em front-end.
