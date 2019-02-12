"use strict";

function find(id) {
  return document.getElementById(id);
}

// Init
document.addEventListener("DOMContentLoaded", function() {
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
      find("modal-close-" + key).onclick = function() {
        modal.classList.remove("active");
      };
    };
  });
});
