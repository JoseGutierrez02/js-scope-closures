function greet() {
  let userName = 'Oscar'

  function displayUserName() {
    return `Hello ${userName}!`
  }

  return displayUserName
}

const g = greet()
console.log(g)
console.log(g())
