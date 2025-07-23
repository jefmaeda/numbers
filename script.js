// form 
// section raffle
const form = document.querySelector("form")
const switchBtn = document.getElementById("switch")
const btnDirection = document.querySelector("#switch div")
const amountInput = document.getElementById("amount")
const minInput = document.getElementById("min")
const maxInput = document.getElementById("max")
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
    switchBtn.classList.remove("active")

  } else {
    btnDirection.style.marginLeft = '10px'
    paragraph.textContent = "Não repetir o número"
    switchBtn.classList.add("active")
  }
})

// Capturando o submit do formulário
form.addEventListener("submit", (e) => {
  e.preventDefault() // removendo o carregamento padrao
  
  // Converte de string para int, 
  // trim =  remove espaços extras do começo e do fim.
  const amount = parseInt(amountInput.value.trim())
  const min = parseInt(minInput.value.trim())
  const max = parseInt(maxInput.value.trim())

  // Verificação básica
  // se são letras
  if (isNaN(amount) || isNaN(min) || isNaN(max)){
    return alert("Preencha todos os campos com números válidos.")
  }

  // se o min e maior q o max
  if (min >= max){
    return alert("O valor mínimo deve ser menor que o máximo.")
  }

  // verifica se o botão de "não repetir número" está ativado.
  const shouldAvoidRepeats = switchBtn.classList.contains("active")

  const numbers = generateRandomNumbers(amount, min, max, shouldAvoidRepeats)

  if (!numbers) {
    return alert("Não foi possível sortear com os dados fornecidos.")
  }

  //fazendo mudandsas
  // alert(`Números sorteados: ${numbers.join(", ")}`)
  console.log(numbers)

  showResult(numbers)
  //
  hiddenChange() // mudando de tela

  formClear()
})

// Função que sorteia números randômicos
function generateRandomNumbers(amount, min, max, noRepeat) {
  const result = [] // array onde serão guardados os números sorteados.
  const range = max - min + 1

  // Verifica se é possível gerar a quantidade desejada sem repetir
  if (noRepeat && amount > range) { 
    // Se a pessoa quer números sem repetir e pediu mais do que o intervalo permite, não dá pra sortear 
    return null
  }

  while (result.length < amount) {
    /**
     * Math.random() → gera número entre 0 e 1.
     * Multiplica para ajustar entre min e max, depois arredonda com Math.floor().
     */
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min

    if(noRepeat){ // Se a repetição for true 
      if (!result.includes(randomNumber)) { // só adiciona se ainda não estiver na lista.
        result.push(randomNumber)
      }
    }
    else{
      result.push(randomNumber)
    }
  }

  return result
}

// mudar de section
function hiddenChange() {
  const raffle = document.getElementById("raffle")
  const result = document.getElementById("result")

  raffle.classList.toggle("hidden")
  result.classList.toggle("hidden")

  // celecionado o campo numeros
  amountInput.focus()
}

// limpando os campos
function formClear() {
  amountInput.value = ""
  minInput.value = ""
  maxInput.value = ""
}

// manipulando cada input para receber somente numeros.
// amount
const hasCharactersRegex = /\D+/g

amountInput.addEventListener("input", () =>{
  amountInput.value = amountInput.value.replace(hasCharactersRegex,"")
})

// min
minInput.addEventListener("input", () =>{
  minInput.value = minInput.value.replace(hasCharactersRegex,"")
} )
// max
maxInput.addEventListener("input", () => {
  maxInput.value = maxInput.value.replace(hasCharactersRegex, "")
})

/*
  troca de tela !!
  
  1 - Remover o form
  2 - Reutlizar.
    1.- header 
      - mais vou deixar no centro (css), add class.
      - contador de resultado.
    
    2.- button
        - mudar o contexto. função de voltar.


  2 parte 
  1.so numero no input. ok

  ir para o random
  visao geral.

  - pegar os numeros do inputs e gerar, 
  colunas de numeros, de minimo e maximo.

  - tem a opsao de gerar numeros repetidos ou nao.

  - mostrar o resultados, contabilizar as rodadas
*/

// tela 2
againButton.addEventListener("click", () => {
  hiddenChange()
})

function showResult(randomResult) {
  const resultArea = document.getElementById("out-number")
  
  // Limpa resultados anteriores
  resultArea.innerHTML = ""

  for (let index = 0; index < randomResult.length; index++) {
    const number = randomResult[index];

    // cria <div class="number">
    const divNumber = document.createElement("div")
    divNumber.classList.add("numbers")

    // cria o <p>
    const p = document.createElement("p")
    p.textContent = number

    // Junta e adiciona na tela
    divNumber.appendChild(p)
    resultArea.appendChild(divNumber)
  }
  

}







