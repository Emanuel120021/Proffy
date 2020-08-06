// Procurar botão

document.querySelector("#add-time")
    // Quando clicar no botão
    .addEventListener('click', cloneField)




// Executar uma ação
function cloneField(){

    // Duplicar os campos. Que campos?
    const newFieldsContainer = document.querySelector(".schedule-item").cloneNode(true);

    // Limpar os campos. Qua campos?
    const fields =  newFieldsContainer.querySelectorAll("input")
    
    fields.forEach(function(field){
        field.value=""
    })

    // Colocar na página. Onde?
    document.querySelector("#schedule-items").appendChild(newFieldsContainer)
}
