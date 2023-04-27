const daysOffJs = '30 Days Of JavaScript'
console.log(daysOffJs.length)
console.log(daysOffJs.toUpperCase())
console.log(daysOffJs.slice(11, 21))
console.log(daysOffJs.includes('JavaScript'))
const empresas = 'Facebook,Google,Microsoft,Apple,IBM,Oracle,Amazon'
console.log(empresas.split(','));
console.log(typeof(empresas.split(',')));
console.log(empresas.split(',').length);
console.log(daysOffJs.replace('JavaScript', 'Coding'))
console.log (Math.floor(Math.random()* 100)+ 1)
const js = 'JavaScript'
let index = Math.floor(Math.random()* 10)
console.log(js.charAt(index))
console.log(js[index])

const frase = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'

let parts = frase.split(', ')
console.log(parts[0])
console.log(parts[0].slice(9, 13))
const salary = eval(parts[0].slice(9, 13))
console.log(parts[1])
console.log(parts[1].slice(0, 5))
const bonus = eval(parts[1].slice(0, 5))
console.log(parts[2])
console.log(parts[2].slice(0, 5))
const courses = eval(parts[2].slice(0, 5))
const total = salary + bonus + courses 
console.log(total)