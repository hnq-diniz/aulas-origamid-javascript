//Selecionando um item pelo ID
const idAnimais = document.getElementById('animais')
console.log(idAnimais)

//Selecionando um item pela Classe, retorna uma HTMLCollection
const gridSection = document.getElementsByClassName('grid-section')
console.log(gridSection)
console.log(gridSection[0])

//Selecionando um item pela tag (Ex: ul), retorna uma HTMLCollection
const tags = document.getElementsByTagName('ul')
console.log(tags)

//Selecionando um item usando querySelector, selecionamos igual selecionamos no CSS
const primeiraLi = document.querySelector('li')
console.log(primeiraLi)

const primeiraUl = document.querySelector('ul')
console.log(primeiraUl)

const linkInterno = document.querySelector('[href^="#"]') //Para selecionar itens que começam com #
console.log(linkInterno)

//Selecionando itens usando querySelectorAll, selecionamos igual selecionamos no CSS e retorna uma NodeList
const animaisImg = document.querySelectorAll('.animais img')
console.log(animaisImg)

//Diferenças entre HTMLCollection e NodeList
const gridSectionHTML = document.getElementsByClassName('grid-section')
const gridSectionNode = document.querySelectorAll('.grid-section')

primeiraUl.classList.add('grid-section')

console.log(gridSectionHTML) //HTMLCollection atualiza ao vivo conforme adiciona itens
console.log(gridSectionNode) //NodeList não atualiza, é estático
