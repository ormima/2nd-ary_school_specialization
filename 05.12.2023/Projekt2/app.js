const osoby = [
    {id: 1, imie: "Jerzy", nazwisko: "Kowalski"}, 
    {id: 2, imie: "Adam", nazwisko: "Nowak"}, 
    {id: 3, imie: "Jan", nazwisko: "Nowy"},
    {id: 4, imie: "Wojciech", nazwisko: "Wielki"},
];

let min = 1;
let max = osoby.length;

function los (min, max) {
    return Math.floor( Math.random() * ( max - min + 1 ) + min );
}

osoby.forEach(osoba => {
    let tr = document.createElement("tr");
        tr.classList.add("rekord");
        tr.setAttribute("id","os_"+osoba.id);
        document.getElementById("rekordy").appendChild(tr);

        let td = document.createElement("td");
        td.innerText = osoba.id;
        document.querySelector("#os_"+osoba.id).appendChild(td);

        let td_nazwisko = document.createElement("td");
        td_nazwisko.innerText = osoba.nazwisko;
        document.querySelector("#os_"+osoba.id).appendChild(td_nazwisko);
        
        let td_imie = document.createElement("td");
        td_imie.innerText = osoba.imie;
        document.querySelector("#os_"+osoba.id).appendChild(td_imie);
    }
)

osoby.forEach(osoba => {
    let tr = document.createElement("tr");
        tr.classList.add("rekord");
        tr.setAttribute("id","los_"+osoba.id);
        document.getElementById("rekordy_losowe").appendChild(tr);

        let td_nazwisko = document.createElement("td");
        td_nazwisko.innerText = `${osoba.id} ${osoba.nazwisko} ${osoba.imie}`;
        document.querySelector("#los_"+osoba.id).appendChild(td_nazwisko);

        let td_los = document.createElement("td");
        td_los.innerText = los(min, max);
        document.querySelector("#los_"+osoba.id).appendChild(td_los);
    }
)
