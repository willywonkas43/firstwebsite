function turkish() {
  document.getElementById("nav-text-1").innerHTML = "paketler";
  document.getElementById("nav-text-2").innerHTML = "iletişim";
  document.getElementById("baslık").innerHTML = "<span>Biz Kimiz?</span>";
  document.getElementById("yazı").innerHTML =
    "Dose Yazılım olarak müşterilerimize tüm İmkanlarımızla yardımcı oluyoruz ve onlarla beraber projelerimizi yürütüyoruz.modern ve mobil uyumlu projelerimizle kendimizi ve bilgimizi yeniliyoruz.";
  document.getElementById("yazı2").innerHTML =
    "Kurumsal ve Modern Bir Web Sitesi Yapmak İstiyorsanız Şimdi Bize Katılın.";

  document.getElementById("rights").innerHTML =
    "tüm hakları dose tarafından saklıdır";
    var turkishActive2=document.getElementById("translate-button2");
    turkishActive2.style.backgroundColor="black";
    var turkishActive=document.getElementById("translate-button");
    turkishActive.style.backgroundColor="white";
}
function english() {
  document.getElementById("nav-text-1").innerHTML = "packages";
  document.getElementById("nav-text-2").innerHTML = "contact";
  document.getElementById("baslık").innerHTML = "who are we?";
  document.getElementById("yazı").innerHTML =
    "We Are Dose.We are Web Designer.<br>We Are <span>dogukan</span> And <span>ufuk Sefa</span>.<br>up-to-date and modern designs, websites suitable for today<BR> and you can choose us for 24/7 communication<br>";
  document.getElementById("yazı2").innerHTML =
    "If You Want To Make A Corporate And Modern Website, Join Us.";
  document.getElementById("rights").innerHTML =
    "all rights reserved by dose";

    var turkishActive=document.getElementById("translate-button");
    turkishActive.style.backgroundColor="black";
    var turkishActive2=document.getElementById("translate-button2");
    turkishActive2.style.backgroundColor="white";
}
function buy(){
  alert("LÜTFEN SİPARİŞ VERMEK İÇİN BİZİMLE İLETİŞİME GEÇİN.");
}

