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
   npm test

4. Execute os testes com relatório - mochawesome:
   ```bash
   npx test --reporter mochawesome

## Solução Implementada

### Arquitetura da Classe `ServicoPagamento`

A solução implementa uma classe com os seguintes componentes:

#### Propriedades Privadas
- `#pagamentos`: Array privado (usando sintaxe `#`) que armazena todos os pagamentos realizados. O uso de campo privado garante encapsulamento e evita manipulação direta da lista.

#### Métodos

1. **`realizarPagamentos(codigoBarras, empresa, valor)`**
   - Registra um novo pagamento na lista
   - Automaticamente categoriza o pagamento baseado no valor:
     - Se `valor > 100.00` → categoria = **'cara'**
     - Caso contrário → categoria = **'padrão'**
   - Armazena um objeto com as propriedades: `codigoBarras`, `empresa`, `valor` e `categoria`

2. **`consultarUltimoPagamento()`**
   - Retorna apenas o último pagamento registrado
   - Utiliza o método `Array.prototype.at(-1)` para acessar o último elemento de forma moderna
   - Retorna `undefined` se nenhum pagamento foi realizado

### Conceitos Implementados

- **Encapsulamento**: Uso de campos privados (`#`) protege o estado interno da classe
- **Objeto JavaScript**: Armazena dados estruturados com múltiplas propriedades
- **Lógica Condicional**: Classificação automática baseada em regras de negócio
- **Abstração**: Interface simples para operações de pagamento

## Continuous Integration (CI) - Workflows GitHub Actions

O projeto utiliza **GitHub Actions** para automação de testes e geração de relatórios. Três workflows diferentes foram configurados:

### 1. **`01-manual-exec.yaml`** - Execução Manual
- **Trigger**: `workflow_dispatch` (disparo manual via interface GitHub)
- **Uso**: Executar testes sob demanda
- **Steps**:
  - Checkout do código
  - Setup Node.js v24 com cache npm
  - Instalação de dependências
  - Execução de testes
  - Upload do relatório como artefato
  - Notificação com resultado via comentário

### 2. **`02-agenda-exec.yaml`** - Execução Agendada
- **Trigger**: 
  - `workflow_dispatch` (manual)
  - `schedule` com Cron (diariamente às 9:00 AM UTC: `0 9 * * *`)
- **Uso**: Testes automatizados em horários pré-definidos
- **Benefício**: Detecta regressões sem intervenção manual

### 3. **`03-push-exec.yaml`** - Execução por Push
- **Trigger**: Push para branches `main` e `exercicio_ci`
- **Uso**: Validação automática de código na integração contínua
- **Benefício**: Feedback imediato sobre a qualidade do código antes da mesclagem

### Conceitos de CI/CD Utilizados

#### **Automação de Testes**
- Testes executados automaticamente em múltiplas situações (manual, agendado, push)
- Garante qualidade de código consistente

#### **Ambiente Consistente**
- `runs-on: ubuntu-latest`: Execução em ambiente Linux padronizado
- `node-version: 24`: Versão Node.js fixa para reprodutibilidade
- Cache npm: Otimização de velocidade nas reinstalações

#### **Relatórios com Mochawesome**
- Geração de relatórios HTML estruturados
- Upload como artefatos do GitHub Actions
- Histórico de testes acessível por 30 dias

#### **Notificações e Feedback**
- Script customizado que lê o relatório JSON
- Cria comentário com estatísticas:
  - ✅ Testes passados
  - ❌ Testes falhados
  - ⏭️ Testes pulados
  - ⏱️ Tempo de execução
- Link direto para relatório completo

#### **Condicionalidades**
- `if: always()`: Garante execução mesmo se testes falharem
- Permite feedback completo mesmo em cenários de falha

#### **Boas Práticas Implementadas**
- Isolamento de ambientes: Cada workflow roda de forma independente
- Rastreabilidade: Logs detalhados de cada etapa
- Retenção de artefatos: 30 dias de histórico
- Mensagens descritivas: Cada step tem um nome e emoji para clareza
- DRY (Don't Repeat Yourself): Lógica reutilizada entre workflows