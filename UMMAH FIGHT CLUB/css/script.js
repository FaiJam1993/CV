/**Erklärung */



  let mybutton = document.getElementById("btn-back-to-top");

  // Wenn der User 20px runter scrollt.Von Beginn des Dokuments,dann zeig den Button
  window.onscroll = function () {
    scrollFunction();
  };

  function scrollFunction() {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      mybutton.style.display = "block";
    } else {
      mybutton.style.display = "none";
    }
  }
  // Wenn der Userauf den Button klickt, dann scoll zum anfang des Dokuments.
  mybutton.addEventListener("click", backToTop);

  function backToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }


  function block() {
    document.getElementById("karte").src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2369.1087905722825!2d10.101505315847005!3d53.573674980027214!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b18b8bad7d4fc5%3A0xe3d9031a6e3a5a72!2sHolstenhofweg%2042-44%2C%2022043%20Hamburg!5e0!3m2!1sde!2sde!4v1677107662488!5m2!1sde!2sde"; document.getElementById("bild").style.display = "none";
    document.getElementById("karte").style.display = "block";
  }
const name =document.getElementById()