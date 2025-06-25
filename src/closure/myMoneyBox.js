// function moneyBox(coins) {
//   let savedCoins = 0
//   savedCoins += coins
//   console.log(`MoneyBox: $${savedCoins}`)
// }

// moneyBox(5)
// moneyBox(5)

function moneyBox() {
  let savedCoins = 0
  function countCoins(coins) {
    savedCoins += coins
    console.log(`MoneyBox: $${savedCoins}`)
  }
  return countCoins
}

const myMoneyBox = moneyBox()
myMoneyBox(5)
myMoneyBox(5)
myMoneyBox(15)

const moneyBoxAna = moneyBox()
moneyBoxAna(10)
moneyBoxAna(20)
moneyBoxAna(5)
