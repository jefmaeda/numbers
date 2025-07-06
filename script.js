const switchBtn = document.getElementById("switch")
const btnDirection = document.querySelector("#switch button")

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
