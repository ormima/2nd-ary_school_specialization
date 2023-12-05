// alert("JD");
const btn = document.getElementById("btn");

btn.addEventListener("click", losowanie);

function losowanie(e) {
    let used = [];
    // console.log("welcome");
    for(let i = 1; i < 23; i++){
        // console.log("for");
        while(i < 23){
            let r = Math.floor(Math.random()*100);
            // console.log(r);
            if(r<23 && r>0){
                if(used.includes(r)){
                    // console.log("includes " + i);
                    r = Math.floor(Math.random()*100); 
                } else{
                    if(r==i){
                        r = Math.floor(Math.random()*100);
                    } else{
                    used.push(r);
                    // console.log("filled " + i);
                    const res = document.getElementById("nr"+ i);
                    res.innerText = r;
                    break;
                    }
                }
            } else{
                // console.log("above " + i);
                r = Math.floor(Math.random()*100);
            }
        }
    }
}