const points = document.getElementById("points");
const problem = document.getElementById("problem");
const solution = document.getElementById("solution");
const buttons = document.querySelectorAll('button');

buttons.forEach((item) => {
    item.onclick = () => {
        if (item.id == 'add'){
            let a = Math.floor(10*Math.random());
            let b = Math.floor(10*Math.random());
            problem.innerHTML = a + " + " + b + " = ";
            solution.addEventListener("keypress", () => {
                if(parseFloat(solution.value) === a+b){
                    points.innerHTML = parseFloat(points.innerText) + 1;
                    problem.innerHTML = "";
                    solution.value = "";
                }
            })
        }
        else if (item.id == 'sub'){
            let a = Math.floor(10*Math.random());
            let b = Math.floor(10*Math.random());
            if(a<b){
                problem.innerHTML = b + " - " + a + " = ";
                solution.addEventListener("keypress", () => {
                    if(parseFloat(solution.value) === b-a){
                        points.innerHTML = parseFloat(points.innerText) + 1;
                        problem.innerHTML = "";
                        solution.value = "";
                    }
                })
            } else {
                problem.innerHTML = a + " - " + b + " = ";
                solution.addEventListener("keypress", () => {
                    if(parseFloat(solution.value) === a-b){
                        points.innerHTML = parseFloat(points.innerText) + 1;
                        problem.innerHTML = "";
                        solution.value = "";
                    }
                })
            }
            solution.addEventListener("keypress", () => {
                if(parseFloat(solution.value) === a+b){
                    points.innerHTML = parseFloat(points.innerText) + 1;
                    problem.innerHTML = "";
                    solution.value = "";
                }
            })
        }
        else if (item.id == 'mul'){
            let a = Math.floor(10*Math.random());
            let b = Math.floor(10*Math.random());
            problem.innerHTML = a + " * " + b + " = ";
            solution.addEventListener("keypress", () => {
                if(parseFloat(solution.value) === a*b){
                    points.innerHTML = parseFloat(points.innerText) + 1;
                    problem.innerHTML = "";
                    solution.value = "";
                }
            })
        }
        else {
            let a = Math.floor(10*Math.random());
            let b = Math.floor(10*Math.random());
            while(a%b != 0){
                a = Math.floor(10*Math.random());
                b = Math.floor(10*Math.random());
            }
            problem.innerHTML = a + " / " + b + " = ";
            solution.addEventListener("keypress", () => {
                if(parseFloat(solution.value) === a/b){
                    points.innerHTML = parseFloat(points.innerText) + 1;
                    problem.innerHTML = "";
                    solution.value = "";
                }
            })
        }
    }
});