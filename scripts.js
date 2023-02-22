const button = document.getElementById("convert-button")
const select = document.getElementById("currency-select")

const dolar = 5.2
const euro = 5.5
const bitcoin = 124000

convertValues = () => {
  const inputReal = document.getElementById("input-real").value
  const realValueText = document.getElementById("real-value-text")
  const currencyValueText = document.getElementById("currency-value-text")

  realValueText.innerHTML = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(inputReal)

  if (select.value === "US$ Dólar americano") {
    currencyValueText.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(inputReal / dolar)
  } else if (select.value === "€ Euro") {
    currencyValueText.innerHTML = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR",
    }).format(inputReal / euro)
  } else {
    currencyValueText.innerHTML = (inputReal / bitcoin).toFixed(7)
  }
}

changeElements = () => {
  const currencyName = document.getElementById("currency-name")
  const currencyImg = document.getElementById("currency-img")

  if (select.value === "US$ Dólar americano") {
    currencyName.innerHTML = "Dólar americano"
    currencyImg.src = "./assets/estados-unidos.svg"
  } else if (select.value === "€ Euro") {
    currencyName.innerHTML = "Euro"
    currencyImg.src = "./assets/euro.svg"
  } else {
    currencyName.innerHTML = "Bitcoin"
    currencyImg.src = "./assets/bitcoin.png"
  }
}

button.addEventListener("click", convertValues)
select.addEventListener("change", changeElements)
