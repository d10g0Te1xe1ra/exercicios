const findLargest = (num1, num2) => {
    if(num1 > num2) return num1
    else return num2
}

function score(percentagem){
  if(percentagem>=0 && percentagem<=49) return 'F'
  else if(percentagem>=50 && percentagem<=59) return 'D'
  else if(percentagem>=60 && percentagem<=69) return 'C'
  else if(percentagem>=70 && percentagem<=89) return 'B'
  else if(percentagem>=90 && percentagem<=100) return 'A'
  else return 'percentagem invalida'
}

function days(mes){
    let days = 0
    switch (mes) {
        case 'Fevereiro':
            days = 28
            break;
        case 'Abril' || 'Junho' || 'Setembro' || 'Novembro':
            days = 30
            break;
        default:
            days=31
            break;
      }
      return days
}

console.log(days('Março'))
