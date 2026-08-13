import { ListaClientes } from "./classes.js";
import { validarCampos } from "./utils.js";
const apiClientes = new ListaClientes();

const nomes = document.getElementById("listaDeContatos");
const botao = document.getElementById("add");
const nome = document.getElementById("nome");
const email = document.getElementById("email");

async function renderizarTela() {
    nomes.innerHTML = "";

    const clientes = await apiClientes.obterLista();

    clientes.forEach(cliente=>{
       const item = document.createElement("li");
       item.textContent = cliente.cliente;

       const botaoX = document.createElement("button");
       botaoX.textContent = "X";

       botaoX.addEventListener("click", async ()=>{
            await apiClientes.deletarCliente(cliente._id);
            renderizarTela();
       })

       item.appendChild(botaoX);
       nomes.appendChild(item);

    })
}

botao.addEventListener("click", async() =>{
    const nomeCap = nome.value;
    const emailCap = email.value;

    if(!validarCampos(nomeCap, emailCap)){
        alert("Preencha todos os campos para cadastrar um cliente");
        return;
    }

    await apiClientes.adicionarCliente(nomeCap, emailCap);

    nome.value = "";
    email.value = "";
    renderizarTela();
});

renderizarTela();