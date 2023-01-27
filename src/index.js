const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

  function decode(expr) {
    let result = "";

    for (let i = 0; i < expr.length; i = i + 10) {
    //"вход" : str - все строки по 10 элементов
    let str = "";
    //"вход" : str1 - каждая строка из 10 элементов
    let str1 = expr.slice(i, i + 10);
        for (let item = 0; item < 10; item = item + 2) {
        let str2 = "";
    //"вход" : str2 - строка из 2 элементов каждой строки из 10 элементов
        str2 = str1.slice(item, item + 2);
            if (str2 === "**"){
            str = str + " ";
            }
            if (str2 === "00") {
            str = str + "";
            }
            if (str2 === "10") {
            str = str + ".";
            }
            if (str2 === "11") {
            str = str + "-";
            }
        }
    let result0 = " "
    let resultMorse = MORSE_TABLE[str]
    result += resultMorse || result0;
    }
     return result

  }

  module.exports = {
    decode,
  };


