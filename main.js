document.addEventListener('DOMContentLoaded', function () {

    const texto = document.querySelector('#texto')
    const result = document.querySelector('#result')
    const button = document.querySelector('#button')
    const contar_espacos = document.querySelectorAll('[name="contar_espacos"]')

    texto.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            event.preventDefault()
            button.click()
        }
    });

    let selecionado;

    button.addEventListener('click', function () {
        contar_espacos.forEach(function(contar_espacos) {
            if(contar_espacos.checked) {
                selecionado = contar_espacos.value 
                if(selecionado === 'sim') {
                    const contar = texto.value.length
                    result.innerHTML = `<p>Resultado: <strong>${contar}</strong> caracteres</p>`
                } else {
                    const contar = texto.value.replace(/\s+/g, '').length
                    result.innerHTML = `<p>Resultado: <strong>${contar}</strong> caracteres</p>`
                }
            }
        })
    });
});