// funcao que valida se os inputs não estão vazios
export function validarCampos(nome, email){
    if(nome.trim() === "" || email.trim()===""){
        return false;
    }
    return true;
}