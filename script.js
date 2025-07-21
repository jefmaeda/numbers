// form 
// section raffle
const form = document.querySelector("form")
const switchBtn = document.getElementById("switch")
const btnDirection = document.querySelector("#switch div")
const amount = document.getElementById("amount")
const min = document.getElementById("min")
const max = document.getElementById("max")
//section result
const againButton = document.querySelector('button[type="button"]')
//
/*
tela 1
*/
// Mudando de valor para mover toggle button
switchBtn.addEventListener("click", () =>{
  
  // Obtém todos os estilos computados (aplicados) do elemento btnDirection (o botão do switch)
  const styles = window.getComputedStyle(btnDirection)

  // Pega o valor atual da propriedade margin-left desse botão (por exemplo, "0px" ou "10px")
  const value = styles.marginLeft

  // Pegando a tag p
  const paragraph = document.querySelector(".switch-wrapper p")

  if (value !== '0px') {
    btnDirection.style.marginLeft = '0px'
    paragraph.textContent = "Pode repetir o número"

  } else {
    btnDirection.style.marginLeft = '10px'
    paragraph.textContent = "Não repetir o número"
  }
})

form.addEventListener("submit", (e) => {
  e.preventDefault()
  
  hiddenChange()

  formClear()
})

// mudar de section
function hiddenChange() {
  const raffle = document.getElementById("raffle")
  const result = document.getElementById("result")

  raffle.classList.toggle("hidden")
  result.classList.toggle("hidden")

  // celecionado o campo numeros
  amount.focus()
}

// limpando os campos
function formClear() {
  amount.value = ""
  min.value = ""
  max.value = ""
}

/*
  troca de tela !!
  
  1 - Remover o form
  2 - Reutlizar.
    1.- header 
      - mais vou deixar no centro (css), add class.
      - contador de resultado.
    
    2.- button
        - mudar o contexto. função de voltar.
  
*/

// tela 2
againButton.addEventListener("click", () => {
  hiddenChange()
})







