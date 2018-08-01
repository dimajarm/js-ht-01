const a = parseFloat(prompt('Enter A from Ax2+Bx+C=0'));
const b = parseFloat(prompt('Enter B from Ax2+Bx+C=0'));
const c = parseFloat(prompt('Enter C from Ax2+Bx+C=0'));


const d = calcD(a, b, c);

// alert(d);

function calcD(a, b, c) {
    const d =b*b-(4*a*c);
    return d;
}

function xResult() {
    if (d > 0) {
        const xOne = (-b + Math.sqrt(d))/(2*a);
        const xTwo = (-b - Math.sqrt(d))/(2*a);
        return ('x1 = ' + xOne + ' x2 = ' + xTwo);
    } else if (d == 0) {
        const xOne = (-b)/2*a;
        return ('x = ' + xOne);
    } else {
        alert("not have a solution D<0");
    }
    
}

const result = xResult();
alert(result);
