/**
 * Método de recuperação de elementos HTML
 Recupera elementos HTML a partir do  nome da tag
const todoForms= document.getElementsByTagName('form')[0]

ou 

addEventListerner serve para ouvir eventos de elementps HTML que foram emitidos

usamos uma função anônima para passá-la como parâmetro para outra
querrySelector recurpera o primeiro elemento que atenda a um seletor css informado

a propriedade value é uma propriedade que reresenta o atributo valie dos elementos de formulário do HTML, para acessarmos o valor que está contra deles

 evento.preventDefault() = cancela o comportamento padrão de um formulário
evento.stopPropagation() = que seria o recarregamento da página tentando fazer seu envio
Create é responsavel por gerar novos elementos HTML dentro do Javascript a partir do nome das tags

appendChild serve para colocar novos elementos HTML dentro de outros
append serve para colocar um ou mais elementos HTML dentro de outros 
arrow functions SEMPRE são anônimas
indexOf informa em qual índice se encontra um determinado valor dentro do seu array, ele não achar, ele retorna "-1"
*/

const todoForms = document.getElementById('todo-forms')
const todos = []

todoForm.addEventListener("submit", function(evento) {
    evento.preventDefault()
    evento.stopPropagation()
    const todoInput = document.querySelector('#todo')
    todoInput.value
    todos.push(todoInput.value)
    todoInput.value = ''
    renderizarTodos()
})

function renderizarTodos(){
    const todosListSection = document.querySelector('#todos-list')
    todosListSection.innerHTML =''

    for( let tarefa of todos){
        const divCard = document.createElement('div')
        divCard.classList.add('card' , 'bg-warning')

        const divCardBody = document.createElement('div')
        divCardBody.classList.add('card-body', 'd-flex', 'align-items-center')

        const pTodoText = document.createElement('p')
        pTodoText.classList.add('todo-text', 'flex-grow-1', 'text-truncate')
        pTodoText.innerText = tarefa

        const btnDelete = document.createElement('button')
        btnDelete.classList.add('btn', 'delete-todo')
        btnDelete.addEventListener('click' , () =>{
           const index = todos.indexOf('tarefa')
           todos.splice(index, 1)
           renderizarTodos()
        })

        const spanIcon = document.createElement('span')
        spanIcon.classList.add('material-symbols-outlined')
        spanIcon.innerText = 'delete'

        btnDelete.appendChild(spanIcon)
        divCard.append(pTodoText , btnDelete)
        divCardBody.appendChild(btnDelete, btnDelete)
        todosListSection.appendChild(divCard)
    }
}
