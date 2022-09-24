const myDIV = document.querySelector('#myDIV')
const myinput = document.querySelector('#myinput')
const addBtn = document.querySelector('.addBtn')
const searchBtn = document.querySelector('#search-button')
const searchWrapper = document.querySelector('#search-wrapper')

const ul = document.createElement('ul')

//EVENTOS

addBtn.addEventListener('click', () => {
    const li = document.createElement('li')
    const delBtn = document.createElement('button')
    delBtn.addEventListener('click', deleteItem)

    li.innerText = myinput.value
    delBtn.innerText = 'Deletar'

    li.appendChild(delBtn)
    ul.appendChild(li)
    myDIV.appendChild(ul)
})

searchBtn.addEventListener('click', () => {    
    const p = document.createElement('p')
    const searchInput = document.querySelector('#search')
    const listItems = document.getElementsByTagName('li')

    const item = Array.from(listItems).find(i => i.innerText === searchInput.value)
    console.log(item)

    if (item) {
        p.innerText = `A fruta ${item} foi encontrada na lista`
        searchWrapper.appendChild(p)
    } else {
        p.innerText = `A fruta ${item} NÃO foi encontrada na lista`
        searchWrapper.appendChild(p)
    }                     

})

//FUNÇÕES

function deleteItem(e) {
    console.log('ENTROU', e.target)
    const li = e.target.parentElement

   li.remove()

}






