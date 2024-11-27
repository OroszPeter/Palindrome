let szoveg = document.querySelector('.bemenet input');
let gomb = document.querySelector('.bemenet button');
let kimenet = document.querySelector('.kimenet');

gomb.addEventListener("click", () => {
    let forditottSzoveg = szurtSzoveg.split("").reverse().join("");
    kimenet.style.display = "block"
    if (szurtSzoveg != forditottSzoveg) {
        return kimenet.innerHTML = `Nem, a(z) <span>"${szoveg.value}"</span> nem palindróma!`
    }
    kimenet.innerHTML = `Igen a(z) <span>"${szoveg.value}"</span> palindróma`
    
});

szoveg.addEventListener("keyup", () =>{
    szurtSzoveg = szoveg.value.toLowerCase().replace(/[^A-Z0-9]/ig, "");
    if (szurtSzoveg) {
        return gomb.classList.add('active');
    }
    gomb.classList.remove('active');
});