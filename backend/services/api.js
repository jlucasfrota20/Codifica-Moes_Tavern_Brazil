export async function request() {
    let answer = await fetch(``)
    let data = await answer.json()

    if(data.erro) {
        throw new Error ('')
    }
    
    return data
}