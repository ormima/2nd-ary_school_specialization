const bird = document.querySelectorAll("img");

bird.addEventListener('click', () => {
    console.log("test");
    bird.style.display = "none";
})