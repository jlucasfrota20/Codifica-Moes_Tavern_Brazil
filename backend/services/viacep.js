export async function buscarCep(cep){
    let clean_cep = cep.replace(/\D/g, '')

    if(cepLimpo.length !== 8) {
        throw new Error('O CEP deve ter 8 digitos!')
    }

    let answer = await fetch(`https://viacep.com.br/ws/${clean_cep}/json/`)
    let data = await answer.json()

    if(data.erro) {
        throw new Error ('CEP nao encontrado!')
    }

    return data
}