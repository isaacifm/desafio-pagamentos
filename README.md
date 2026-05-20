# Desafio Pagamentos
Crie uma classe que possua dois métodos: um para realizar pagamento e outro para consultar o último pagamento.

## Objetivo
Crie uma classe que possua dois métodos: um para realizar pagamento e outro para consultar o último pagamento. Pagamentos serão armazenados como objetos Javascript dentro de uma lista de pagamentos. Cada pagamento terá as propriedades: Código de Barras, Empresa e Valor. Quando um pagamento for realizado e o valor for maior que 100.00, o pagamento também terá a propriedade categoria como 'cara', caso contrário, a propriedade categoria ficará como 'padrão'. O método de consultar trará apenas o último pagamento.

## Instalação e Configuração

No terminal:
1. Clone este repositório:
   ```bash
   git clone https://github.com/isaacifm/desafio-pagamentos.git

2. Instale as dependências:
   ```bash
   npm install   

3. Execute os testes:
   ```bash
   npx mocha

4. Execute os testes com relatório - mochawesome:
   ```bash
   npx mocha --reporter mochawesome