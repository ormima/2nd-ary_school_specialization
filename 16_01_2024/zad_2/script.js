const sign = document.getElementById("sign");
const result = document.getElementById("result");
const submit = document.getElementById("submit");
const add = document.getElementById("add");
const sub = document.getElementById("sub");
const mul = document.getElementById("mul");
const div = document.getElementById("div");
const reset = document.getElementById("reset");

reset.addEventListener("click", () => {
    var1.innerText = " ";
    var2.innerText = " ";
    sign.innerText = "?";
    result.innerText = " ";
});

let sgn = 0;

add.addEventListener("click", () => {
    sign.innerText = "+";
    sgn = 1;
});

sub.addEventListener("click", () => {
    sign.innerText = "-";
    sgn = 2;
});

mul.addEventListener("click", () => {
    sign.innerText = "*";
    sgn = 3;
});

div.addEventListener("click", () => {
    sign.innerText = "/";
    sgn = 4;
});

submit.addEventListener("click", () => {
    const var1 = document.getElementById("var1");
    const var2 = document.getElementById("var2");
    let a = parseFloat(var1.value);
    let b = parseFloat(var2.value);
    if(sgn==1){
        let r = a+b;
        result.innerText = Math.round(r*100)/100;
    } else if(sgn==2){
        let r = a-b;
        result.innerText = Math.round(r*100)/100;
    } else if(sgn==3){
        let r = a*b;
        result.innerText = Math.round(r*100)/100;
    } else if(sgn==4){
        if(b==0){
            result.innerText = "b is equal to 0! change it like your gender!"
        } else{
            let r = a/b;
            result.innerText = Math.round(r*100)/100;
        }
    } else{
        result.innerText = "something is wrong"
    }
});