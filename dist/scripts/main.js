"use strict";

function find(id) {
  return document.getElementById(id);
}

// Init
document.addEventListener("DOMContentLoaded", function() {
  showHeaderImage();

  var header = find("header");
  header.onclick = function() {
    window.scrollBy({
      top: window.innerHeight,
      left: 0,
      behavior: "smooth",
      pasive: true
    });
  };

  var modals = ["civil", "fiesta"];
  modals.forEach(function(key) {
    find("trigger-" + key).onclick = function() {
      var modal = find("modal-" + key);
      modal.classList.add("active");
      modal.querySelectorAll(".js-close").forEach(function(closeButton) {
        closeButton.onclick = function() {
          modal.classList.remove("active");
        };
      });
    };
  });
});

function showHeaderImage() {
  if (window.innerWidth >= 797) {
    var image = find("main-image-desktop");
  } else {
    var image = find("main-image-mobile");
  }
  image.src = image.dataset.src;
}
