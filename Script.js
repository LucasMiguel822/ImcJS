let input_peso = document.querySelector('.peso')
let input_altura = document.querySelector('.altura')
let input_nome = document.querySelector('.nome')
let botao = document.querySelector('.botao')
let resposta = document.querySelector('.imc')


botao.addEventListener('click', calculo)

function calculo(){
   let peso = input_peso.value 
  let altura = input_altura.value 
  let nome = input_nome.value
let imc = peso / (altura * altura)

  if(imc <= 18){
    resposta.textContent = 'ola '+ nome +' seu imc é: ' + imc + ' voce esta com baixo peso'
  }

  else if(imc <= 24.9){
    resposta.textContent = 'ola '+ nome + ' seu imc é: ' + imc + ' voce esta com peso normal'
  }

  else if(imc <= 29.9){
    resposta.textContent = 'ola '+ nome + ' seu imc é: ' + imc + ' voce esta com sobrepeso'
  }

  else if(imc <= 34.9){
    resposta.textContent = 'ola '+ nome + ' seu imc é: ' + imc + ' voce esta com obesidade grau I'
  }

  else if(imc <= 39.9){
    resposta.textContent = 'ola '+ nome + ' seu imc é: ' + imc + ' voce esta com obesidade grau II'
  }

  else{
    resposta.textContent = 'ola '+ nome + ' seu imc é: ' + imc + ' voce esta com obesidade grau III'
  }
  
}