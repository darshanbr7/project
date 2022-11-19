function gen1(){
    console.log(yield 1)
}
const integer=gen1()
console.log(integer.next('a').value)