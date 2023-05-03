document.querySelectorAll(".input").forEach(function (input) {
    var img = input.querySelector("img");

    input.addEventListener("focusin", function () {
        console.log('entro');
        img.style.opacity = "0";
        img.style.transition = "opacity 0.2s ease-out";
    });

    input.addEventListener("focusout", function () {
        img.style.opacity = "1";
        img.style.transition = "opacity 0.3s ease-out";
    });
});


document.querySelector(".login").addEventListener("submit", function () {
    this.querySelector(".submit i").removeAttribute('class');
    this.querySelector(".submit i").classList.add("fa", "fa-check");
    this.querySelector(".submit i").style.color = "#fff";
    document.querySelector(".submit").style.background = "#2ecc71";
    document.querySelector(".submit").style.borderColor = "#2ecc71";
    document.querySelector(".feedback").style.display = "block";
    document.querySelector(".feedback").animate({ opacity: "1", bottom: "-80px" }, 400);
    document.querySelectorAll("input").forEach(function (input) {
        input.style.borderColor = "#2ecc71";
    });
    return false;
});