// variables

var a // declare
var b = 'b' // declare / assign
b = 'bb'// reassign
var a = 'aa' // redeclare

// Global Scope
var fruit = 'Apple' // global
console.log(fruit)

function bestFruit() {
  console.log(fruit)
}

bestFruit()

function countries() {
  var country = 'Colombia'
  console.log(country)
}

countries()
console.log(country)
