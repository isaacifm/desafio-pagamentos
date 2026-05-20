export default class ServicoDePagamento {
    #pagamentos;
    constructor() {
        this.#pagamentos = [];
    }

    realizarPagamentos(codigoDeBarras, empresa, valor) {


        const categoria = valor > 100.00 ? 'Cara' : 'Padrão';

        this.#pagamentos.push({

            codigoDeBarras: codigoDeBarras,
            empresa: empresa,
            valor: valor,
            categoria: categoria
        });

    }

    consultarUltimoPagamento() {
        return this.#pagamentos.at(-1);
    }
}