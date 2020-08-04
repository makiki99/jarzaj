function getRandomChoice(arr) {
    return arr[Math.floor(Math.random()*arr.length)]
}
window.onload= ()=>{document.getElementById("generate").addEventListener("click", ()=>{
    let str = "";
    str += getRandomChoice([
        "Arena",
        "Mtmp",
        "Factory",
        "Hota",
        "Mistrzostwa Polski",
        "H4",
        "Hirawka",
    ]) + " ";
    str += getRandomChoice([
        "to najlepsze co spotkało community",
        "to czyste PvP",
        "to kanon",
        "to esencja H3",
        "to hit",
        "jest nieironicznie spoko"
    ]) + " ";
    str += getRandomChoice([
        "a",
        "za to",
        "ale",
        "ale niestety",
        "szkoda jednak, że",
        "tylko, że"
    ]) + " ";
    str += getRandomChoice([
        "Jebus",
        "kapitol",
        "6lm10a",
        "Ubisoft",
        "H5",
        "WOG",
    ]) + " ";
    str += getRandomChoice([
        "to gówno obsrane",
        "jest bez sensu",
        "śmierdzi",
        "to jakiś żart",
        "to tragedia",
        "podoba się tylko osobom bez gustu",
        "to jedno wielkie IKS DE",
        "to... XDDDDDD"
        
    ]);
    document.getElementById("text").innerHTML = str;
})}