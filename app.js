const dark = document.querySelector(".toggle");
const body = document.getElementById('bod')

dark.addEventListener("click", togs);

function togs() {
    body.classList.toggle('dark');
}
