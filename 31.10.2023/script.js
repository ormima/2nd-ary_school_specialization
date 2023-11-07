const refstats = document.getElementById("refstats");
const refp2 = document.getElementById("refp2");
const refp3 = document.getElementById("refp3");
const refp4 = document.getElementById("refp4");

const stats = document.getElementById("stats");
const p2 = document.getElementById("p2");
const p3 = document.getElementById("p3");
const p4 = document.getElementById("p4");

refstats.addEventListener("click", () => {
    stats.scrollIntoView({behavior: "smooth"});
    console.log("test")
})
refp2.addEventListener("click", () => {
    p2.scrollIntoView({behavior: "smooth"});
})
refp3.addEventListener("click", () => {
    p3.scrollIntoView({behavior: "smooth"});
})
refp4.addEventListener("click", () => {
    p4.scrollIntoView({behavior: "smooth"});
})