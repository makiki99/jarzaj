function getRandomChoice(arr) {
    return arr[Math.floor(Math.random()*arr.length)]
}
window.onload= ()=>{document.getElementById("generate").addEventListener("click", ()=>{
    let str = "";
    str += getRandomChoice([
        "Arena",
        "mt_MP",
        "Factory",
        "HotA",
        "Mistrzostwa Polski",
        "Heroes 4",
        "Hirawka",
        "Forge",
        "Kolumna oczu"
    ]) + " ";
    str += getRandomChoice([
        "to najlepsze co spotkało community,",
        "to czyste PvP,",
        "to kanon,",
        "to esencja Heroesów,",
        "to hit,",
        "to nieironicznie najlepsza rzecz od lat,",
        "prawem nie towarem,",
        "przebija wszystko do tej pory,",
        "to czysty rigcz,",
        "to złoto,"
    ]) + " ";
    str += getRandomChoice([
        "a",
        "z kolei",
        "szkoda, że",
        "za to",
        "niestety",
        "ale",
        "ale nie zapominajmy, że",
        "podczas gdy"
    ]) + " ";
    str += getRandomChoice([
        "Jebus",
        "kapitol",
        "Ubisoft",
        "piątka",
        "WoG",
        "6lm10a",
        "obrotowe ekrany miast",
        "VCMI",
        "single player",
        "mobilka od Ubi"
    ]) + " ";
    str += getRandomChoice([
        "to gówno obsrane.",
        "strasznie posysa.",
        "to siermiężna manga.",
        "to jedno wielkie IKS DE.",
        "podoba się tylko osobom bez gustu.",
        "wygląda gorzej niż mój poranny stolec.",
        "to partactwo.",
        "to tragedia okrutna.",
        "śmierdzi.",
        "to jakiś kiepski żart.",
        "literalnie się do niczego nie nadaje",
        "to tania sklejanka w paintcie.",
        "to ideologia.",
        "to... XDDDDDDDD.",
        "powoduje odruchy wymiotne."
        
    ]) + " ";
    str += getRandomChoice([
        "Fakt nie opinia.",
        "Mam nadzieje, że pomogłem.",
        "Zapraszam do dyskusji!",
        "Pozdro Gnolle!",
        "Smacznej kawusi!",
        "Całuję rączki!",
        "Nie zapraszam do dyskusji bo nie ma o czym.",
        "Change my mind!",
        "Prove me wrong!",
        "Takie są fakty."
    ])
    document.getElementById("text").innerHTML = str;
})}