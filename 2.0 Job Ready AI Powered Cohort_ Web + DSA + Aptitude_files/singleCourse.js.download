var input = document.querySelector("#phoneNumber");
// window.intlTelInput(input, {
//   utilsScript: "https://cdn.jsdelivr.net/npm/intl-tel-input@18.1.1/build/js/utils.js",
// });



document.addEventListener('DOMContentLoaded', () => {
  const playOverlay = document.querySelector('#playOverlay');
  const embeddedPromo = document.querySelector('#embedded-promo');
  const promoVideo = document.querySelector('#promo-video');
  if (playOverlay && embeddedPromo && promoVideo) {
    playOverlay.addEventListener('click', () => {
      // embeddedPromo.style.display = "initial";
      playOverlay.style.display = "none";
      promoVideo.src += '?autoplay=1&vq=hd720';
    });
  } else {
    console.error('One or more elements not found in the DOM');
  }
});

// document.querySelector('#embedded-promo').addEventListener('click', () => {
//     document.querySelector('#embedded-promo').style.display = "none";
//     var pframe = document.querySelector('#embedded-promo iframe');
//     var psrc = pframe.src;
//     window.history.back();
//     pframe.src = psrc.split('?autoplay=1')[0];
//     console.log("yes")
// })

// document.querySelector('#promo-close-btn').addEventListener('click', () => {
//     document.querySelector('#embedded-promo').style.display = "none";
//     var psrc = pframe.src;
//     pframe.src = psrc.split('?autoplay=1')[0];
//     window.history.back();
//     console.log("yes")

// })

document.querySelector('#phonePopup').addEventListener('click', (e) => {
  if(e.target.id == "phonePopup"){
    document.querySelector('#phonePopup').style.display = "none";
  }
})
document.querySelector('#popupClose').addEventListener('click', () => {
  document.querySelector('#phonePopup').style.display = "none";
})