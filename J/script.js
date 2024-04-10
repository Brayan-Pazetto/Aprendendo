const convertButton = document.querySelector(".convert-button")

function convertValues(){
   const InputCurrencyValue = document.querySelector(".input-currency").value

const DolarToday = 5.2

const ConvertValue = InputCurrencyValue / DolarToday

   console.log(ConvertValue)
}

convertButton.addEventListener("click", convertValues)