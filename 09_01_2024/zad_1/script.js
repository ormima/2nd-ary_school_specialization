const tab = document.getElementById('tab');
const par = document.getElementById('par');
const sum = document.getElementById('sum');
const ilo = document.getElementById('ilo');

const arr = [-1, 2, 7, 9, 17, 30, 69, 1068.5];

arr.forEach(element => {
    tab.innerText += ` ${element},`
});

arr.forEach(element => {
    if(element % 2 == 0) {
        par.innerText += ` ${element},`
    }
});

let suma = 0

arr.forEach(element => {
    suma += element
});

sum.innerText += ` ${suma}`

arr.forEach(element => {
    ilo.innerText += ` ${element * 2},`
});