export class ListaClientes {
    constructor() {
        this.url = "https://crudcrud.com/api/b4e536e5663e4accaeb410fb4381a8a9/cadastro";
        this.clientes = [];
    }
    //busca a lista do servidor
    async obterLista() {
        const response = await fetch(this.url)
        this.clientes = await response.json();
        return this.clientes;
    }
    //metodo para salvar um novo cliente no servidor
    async adicionarCliente(nome,email) {
        const response = await fetch(this.url,{
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({cliente: nome, email: email})
        });
        const novoCliente = await response.json();
        this.clientes.push(novoCliente);
        return novoCliente;
}
    //metodo para deletar um cliente do servidor
    async deletarCliente(id) {
        await fetch(`${this.url}/${id}`, {method: "DELETE"});

        this.clientes = this.clientes.filter(cliente => cliente._id !== id);
    }
}
