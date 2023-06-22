//?  1 ile 100 aerasinda bir sayi tut
//?  variables tanimlama
//?  Check butonuna basildiginda kontrolleri yap
//!  Eger inputtan tahmin girilmediyse kullaniciya uyari ver
//!  Eger rastgele sayi esitse inputan alinan sayidegerine
//?  tebrikler bildiniz
//?  sakli sayi =görünür
//!  eger rastgelesayi esit degilse inputtan alinan degere
//?  tahmin hakkini azalmali
//!  eger tahmin hakk >0 ise --------->
//!   inputtan alinan deger > rastgele sayidan büyük ise-> tahminini azalt : tahminini artir
//!  eger tahmin hakki < 0 degilse
//?  Üzgünüm kaybettiniz
//?  tekrar tusuna basinca oyunu basa al( tahmin hakkini düzelt,
//?  tekrar rastgele sayi üretmeli,kontrol tusunu tekrar aktif yapmaliyiz,
//?  sakli sayiya soru isareti  atamaliyiz,tahmin inputuna bos deger atamaliyiz,mesaji eski haline almaliyiz)

/* -------------------------------------------------------------------------- */
/*                      1 ile 100 aerasinda bir sayi tut                      */
/* -------------------------------------------------------------------------- */

let rastgeleSayi = Math.floor(Math.random()*100+1)
console.log(rastgeleSayi);
/* -------------------------------------------------------------------------- */
/*                             variables tanimlama                            */
/* -------------------------------------------------------------------------- */
let hakSayi = document.querySelector(".hak")
let hak= 3;

/* -------------------------------------------------------------------------- */
/*                           Selectors Tanimlamasi                            */
/* -------------------------------------------------------------------------- */

const kontrolBtn = document.querySelector(".kontrol-btn")
const tahminInput = document.querySelector(".tahmin-input")
const msg = document.querySelector(".msg")
const sakliNumber = document.querySelector(".sakli-number")
const tekrarBtn = document.querySelector(".tekrar-btn")

/* -------------------------------------------------------------------------- */
/*                 Check butonuna basildiginda kontrolleri yap                */
/* -------------------------------------------------------------------------- */

kontrolBtn.addEventListener("click", () =>{
    let tahminDegeri = Number(tahminInput.value)
    if(!tahminDegeri) msg.innerText = "Lütfen bir sayi giriniz"
    else if (rastgeleSayi === tahminDegeri){
    /* ---------- Eger rastgele sayi esitse inputan alinan tahmin degerine mesaj yaz--------- */
    msg.innerText = "Tebrikler Bildiniz 🤩";
    msg.style.color = "green";
    msg.style.fontSize = "50px";
    sakliNumber.textContent = rastgeleSayi;
    }
    else {
        hak--;
        if(hak>0){
            tahminDegeri > rastgeleSayi ? (msg.innerHTML = `<i class="fa-solid fa-arrow-trend-down fa-2x"></i> Azalt`)
            : (msg.innerHTML = `<i class="fa-solid fa-arrow-trend-up fa-2x" ></i> Artir`);
        }
        else{
            msg.innerText = "Kaybettiniz 😞"
            msg.style.color="red"
            msg.style.fontSize="50px"
            kontrolBtn.disabled = true;
            sakliNumber.textContent = rastgeleSayi;
        }
        hakSayi.innerText=hak;
    }
    tahminInput.value = "";
})

tekrarBtn.addEventListener("click", ()=>{
hak = 3;
hakSayi.innerText = hak;
rastgeleSayi = Math.floor(Math.random()*100+1)
console.log(rastgeleSayi);
kontrolBtn.disabled = false;
sakliNumber.textContent="?";
tahminInput.value = "";
msg.style.fontSize="16px"
msg.innerText=".............."

})
