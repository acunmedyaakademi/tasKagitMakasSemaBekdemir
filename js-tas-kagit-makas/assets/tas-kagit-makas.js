
let secim = ["taş", "kağıt", "makas"];
let bilgisayar = secim[Math.floor(Math.random() * secim.length)];
let kullanici = prompt("Taş\nKağıt\nMakas\n lütfen birini seçiniz...");


if (kullanici === bilgisayar) {
  alert("Berabere");
} else if (
  (kullanici === "taş".toLocaleLowerCase()  && bilgisayar === "makas") ||
  (kullanici === "kağıt".toLocaleLowerCase() && bilgisayar === "taş") ||
  (kullanici === "makas".toLocaleLowerCase() && bilgisayar === "kağıt")
)
 {
  alert("Kazandınız");
} else {
  alert("Kaybettiniz");
}

alert("Siz:" + kullanici +   " Bilgisayar:"  + bilgisayar );
