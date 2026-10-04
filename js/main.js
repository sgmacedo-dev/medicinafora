(function () {
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.querySelector(".main-nav");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
  }

  var copy = document.getElementById("copy-pix");
  var status = document.getElementById("pix-status");
  if (!copy || !status) return;
  copy.addEventListener("click", function () {
    var key = "410075a0-09f1-4cc1-a234-762e27187fcd";
    function done() {
      status.hidden = false;
      status.textContent = "Chave copiada. No app do banco, Pix, colar, R$ 5,00. O nome tem de ser Silvana Gomes Macedo.";
    }
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(key).then(done, done);
    } else {
      done();
    }
  });
})();
