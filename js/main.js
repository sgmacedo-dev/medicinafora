(function () {
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.querySelector(".main-nav");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
  }

  var form = document.getElementById("pix-form");
  var status = document.getElementById("pix-status");
  if (!form || !status) return;

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    var input = document.getElementById("lead-email");
    var email = input && input.value ? input.value.trim() : "";
    var ok = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    status.hidden = false;
    if (!ok) {
      status.textContent = "Escreva um e-mail válido. Nada foi cobrado e o e-book não foi enviado.";
      if (input) input.focus();
      return;
    }
    status.textContent = "O Pix ainda não está ligado. Nenhum pagamento foi criado e o e-book não foi enviado. O e-mail ficou só neste navegador: não gravamos lead nem arquivo. Quando houver Mercado Pago (ou similar), o webhook marca o pedido como pago e só então o site manda o arquivo.";
  });
})();
