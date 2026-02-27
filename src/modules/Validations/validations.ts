// Verifica se a descrição tem pelo menos 4 caracteres e não contém números
function validarTexto(descricaoAdicionar: HTMLInputElement): boolean {
    const textotest = descricaoAdicionar.value.trim();

    if (textotest.length < 4) return false;

    for (let char of textotest){
        if (!isNaN(Number(char)) && char !== ' ') {
            return false; 
        }
    }
    return true
}

// Verifica se o valor é um número válido e maior que 0
function validarNumeros(valorAdicionar: HTMLInputElement): boolean {
    const valorTest = Number(valorAdicionar.value)
    if (isNaN(valorTest) || valorTest <= 0){
        return false
    } else {
        return true
    }
}

// Verifica se a data não é no futuro
function validarData(inputDate: HTMLInputElement): boolean {
    const dataAtual = new Date()
    const dataSelecionada = new Date(inputDate.value)

    if (dataSelecionada > dataAtual) return false
    return true
}

export function validarInputs(inputTexto: HTMLInputElement,inputNumero: HTMLInputElement,inputDate: HTMLInputElement): boolean {
    if (validarTexto(inputTexto) && validarNumeros(inputNumero) && validarData(inputDate)){
        return true
    }
    return false
}