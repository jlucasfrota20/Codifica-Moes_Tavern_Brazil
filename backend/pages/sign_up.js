import { search_cep } from "/backend/services/viacep.js";

let form = document.querySelector('#sign_up') 
let campoCep = document.querySelector('#cep') 

campoCep.addEventListener('blur', async () => {
    if(!campoCep.value) return

    try {
        let endereco = await search_cep(campoCep.value)
        document.querySelector('#city').value = endereco.localidade
        document.querySelector('#uf').value = endereco.uf
    } catch (error) {
        console.error(error.message)
    }
})