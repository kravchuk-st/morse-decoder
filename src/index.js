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
    let word = [];
    let code = [];
    let letter = [];
    let arr = '';
    let decode = '';

    for(let i = 0; i < expr.length; i += 10) {
        word.push(expr.slice(i, i + 10));
    }

    word.forEach(item => {
        for(let i = 0; i < item.length; i += 2) {
            code.push(item.slice(i, i + 2));
        }
    });

    for(let i = 0; i < code.length; i++) {
        switch(code[i]) {
            case '10':
                code[i] = '.';
                break;
            case '11':
                code[i] = '-';
                break;
            case '00':
                code[i] = ' ';
                break;
            case '**':
                code[i] = '*';
                break
        }
        arr += code[i];
    }

    for(let i = 0; i < arr.length; i += 5) {
        letter.push(arr.slice(i, i + 5).trim());
    }

    decode = letter.join(' ').split(' ***** ').map(a => a.split(' ').map(b => MORSE_TABLE[b]).join('')).join('');
    return decode;
}

module.exports = {
    decode
}
