import ServicoDePagamento from "../src/servicoDePagamento.js";
import assert from "assert";

describe('Classe de servico de pagamento', function() {
    it('Validar a realização de uma pagammento maior que 100', function() {
        // Arrange
        const servicoDePagamento = new ServicoDePagamento();
        const codigoDeBarras = '123.456.789';
        const empresa = 'Empresa BIT';
        const valor = 100.01;
        // Act
        servicoDePagamento.realizarPagamentos(codigoDeBarras, empresa, valor);
        const ultimoPagamento = servicoDePagamento.consultarUltimoPagamento();
        // Assert
        assert.equal(ultimoPagamento.categoria, 'Cara');
    })

    it('Validar a realização de uma pagammento menor que 100', function() {
        // Arrange
        const servicoDePagamento = new ServicoDePagamento();
        const codigoDeBarras = '567.456.890';
        const empresa = 'Empresa XGH';
        const valor = 99.99;
        // Act
        servicoDePagamento.realizarPagamentos(codigoDeBarras, empresa, valor);
        const ultimoPagamento = servicoDePagamento.consultarUltimoPagamento();
        // Assert
        assert.equal(ultimoPagamento.categoria, 'Padrão');
});    
});