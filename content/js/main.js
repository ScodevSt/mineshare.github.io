let $body = document.querySelector("body");
let $mode = document.getElementById("toggleDark");
let storage = localStorage.getItem("mode");

$mode.addEventListener("click", function () {
    let value = $body.classList.toggle("dark");
    this.classList.toggle("bi-moon");
    localStorage.setItem("mode", value);
});

if (storage == "true") {
    $body.classList.add("dark");
} else {
    $body.classList.remove("dark");
}

function search() {
    let $filter = document.getElementById("find").value.toUpperCase().trim();
    let $card = document.querySelectorAll(".card");
    let $title = document.querySelectorAll(".title");

    for (let i = 0; i <= $title.length; i++) {
        let titleCard = $card[i].querySelectorAll(".title")[0];
        let value =
            titleCard.innerHTML || titleCard.innerText || titleCard.textContent;

        if (value.toUpperCase().indexOf($filter) > -1) {
            $card[i].style.display = "";
        } else {
            $card[i].style.display = "none";
        }
    }
}

let $open = document.getElementById("openMenu");
let $close = document.getElementById("closeMenu");
const sidebar = document.querySelector(".navbar__menu");

$open.addEventListener("click", function () {
    sidebar.style.visibility = "visible";
});

$close.addEventListener("click", function () {
    sidebar.style.visibility = "hidden";
});
