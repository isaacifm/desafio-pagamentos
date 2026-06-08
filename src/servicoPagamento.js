export default class ServicoPagamento {
    #pagamentos;
    constructor() {
        this.#pagamentos = [];
    }

    realizarPagamentos(codigoBarras, empresa, valor) {


        const categoria = valor > 100.00 ? 'cara' : 'padrão';

        this.#pagamentos.push({

            codigoBarras: codigoBarras,
            empresa: empresa,
            valor: valor,
            categoria: categoria
        });

    }

    consultarUltimoPagamento() {
        return this.#pagamentos.at(-1);
    }
}