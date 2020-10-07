module.exports = function toReadable (number) {
    const x = [
      '',
      'one',
      'two',
      'three',
      'four',
      'five',
      'six',
      'seven',
      'eight',
      'nine',
      'ten',
      'eleven',
      'twelve',
      'thirteen',
      'fourteen',
      'fifteen',
      'sixteen',
      'seventeen',
      'eighteen',
      'nineteen'
      ]
    const y = [
      'twenty',
      'thirty',
      'forty',
      'fifty',
      'sixty',
      'seventy',
      'eighty',
      'ninety'
    ]
  
    let answer;
  
    if (number === 0) return 'zero';

    if (number < 20) return x[number];

    if (number < 100) {
      if (number % 10 === 0) return y[Math.floor(number / 10)-2];
      answer = y[Math.floor(number / 10)-2] + ' ' +  x[number % 10];
    } else {
      let hundred = x[Math.floor(number / 100)] + ' hundred';
      let ten = Math.floor(number % 100 );
      
      if (ten == 0) return hundred;
      if (ten < 20) {
        answer = hundred + ' ' + x[ten];
      }
      else {
        ten = (Math.floor(number % 100  / 10 ) - 2) >= 0 ? ` ${y[Math.floor(number % 100  / 10 ) - 2]}` : ''; 
        let ed = (number % 10 > 0) ? ` ${x[number % 10]}` : '';
        answer = hundred + ten + ed;
      } 
    }
  
    return answer;
}
