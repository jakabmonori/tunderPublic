/*let osszesbtn = document.getElementById("osszesbtn");
let eskuvobtn = document.getElementById("eskuvobtn");
let szulinapbtn = document.getElementById("szulinapbtn")
let egyenibtn = document.getElementById("egyenibtn")
let osszesLi = document.getElementById("osszesLi");
let eskuvoLi = document.getElementById("eskuvoLi");
let szulinapLi = document.getElementById("szulinapLi");
let egyeniLi = document.getElementById("egyeniLi");

function eskuvobutton() {
    
    if (eskuvobtn.classList.contains('active')) {
        return false;
    }
    else {
        osszesbtn.classList.remove("active");
        szulinapbtn.classList.remove("active");
        egyenibtn.classList.remove("active");

        eskuvobtn.className += " active";

        osszesLi.classList.add("d-none");
        szulinapLi.classList.add("d-none");
        egyeniLi.classList.add("d-none");
        eskuvoLi.classList.remove("d-none");
    }
}

function osszesbutton() {
    if (osszesbtn.classList.contains('active')) {
        return false;
    }
    else {
        szulinapbtn.classList.remove("active");
        egyenibtn.classList.remove("active");
        eskuvobtn.classList.remove("active");

        osszesbtn.className += " active";

        eskuvoLi.classList.add("d-none");
        szulinapLi.classList.add("d-none");
        egyeniLi.classList.add("d-none");
        osszesLi.classList.remove("d-none");
    }
}

function szuletesnapbutton () {
    if (szulinapbtn.classList.contains('active')) {
        return false;
    }
    else {
        osszesbtn.classList.remove("active");
        egyenibtn.classList.remove("active");
        eskuvobtn.classList.remove("active");

        szulinapbtn.className += " active";

        eskuvoLi.classList.add("d-none");
        osszesLi.classList.add("d-none");
        egyeniLi.classList.add("d-none");
        szulinapLi.classList.remove("d-none");
        szulinapLi.className += " d-block";
        console.log("áéá")
}}*/