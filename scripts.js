const button = document.getElementById("convert-button")
const select = document.getElementById("currency-select")

convertValues = async () => {
  const inputReal = document.getElementById("input-real").value
  const realValueText = document.getElementById("real-value-text")
  const currencyValueText = document.getElementById("currency-value-text")

  const data = await fetch('https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL').then(response => response.json())

  const dolar = data.USDBRL.high
  const euro = data.EURBRL.high
  const bitcoin = data.BTCBRL.high

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
