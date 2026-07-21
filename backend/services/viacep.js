export async function search_cep(cep){

    if (cep.length !== 8) {
        throw new Error('O CEP deve ter 8 digitos!')
    }

    let answer = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
    let data = await answer.json()

    if (data.erro) {
        throw new Error ('CEP nao encontrado!')
    }

    return data
}