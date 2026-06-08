import ServicoPagamento from "../src/servicoPagamento.js";
import assert from "assert";

describe('Classe de servico de pagamento', function() {
    it('Validar a realização de uma pagammento maior que 100', function() {
        // Arrange
        const servicoDePagamento = new ServicoPagamento();
        const codigoBarras = '123.456.789';
        const empresa = 'Empresa BIT';
        const valor = 100.01;
        // Act
        servicoDePagamento.realizarPagamentos(codigoBarras, empresa, valor);
        const ultimoPagamento = servicoDePagamento.consultarUltimoPagamento();
        // Assert
        assert.equal(ultimoPagamento.categoria, 'cara');
    })

    it('Validar a realização de uma pagammento menor que 100', function() {
        // Arrange
        const servicoDePagamento = new ServicoPagamento();
        const codigoBarras = '567.456.890';
        const empresa = 'Empresa XGH';
        const valor = 99.99;
        // Act
        servicoDePagamento.realizarPagamentos(codigoBarras, empresa, valor);
        const ultimoPagamento = servicoDePagamento.consultarUltimoPagamento();
        // Assert
        assert.equal(ultimoPagamento.categoria, 'padrão');
});

    it('Validar que a consulta retorna o último entre múltiplos pagamentos', function() {
        // Arrange
        const servicoDePagamento = new ServicoPagamento();
        
        // Act - Adicionar múltiplos pagamentos
        servicoDePagamento.realizarPagamentos('111.111.111', 'Empresa A', 50.00);
        servicoDePagamento.realizarPagamentos('222.222.222', 'Empresa B', 150.00);
        servicoDePagamento.realizarPagamentos('333.333.333', 'Empresa C', 75.00);
        
        const ultimoPagamento = servicoDePagamento.consultarUltimoPagamento();
        
        // Assert
        assert.equal(ultimoPagamento.codigoBarras, '333.333.333');
        assert.equal(ultimoPagamento.empresa, 'Empresa C');
        assert.equal(ultimoPagamento.valor, 75.00);
        assert.equal(ultimoPagamento.categoria, 'padrão');
    });


});