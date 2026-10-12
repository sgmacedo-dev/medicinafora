/* Pix direto (QR + copia e cola) — Medicina Fora */
(function () {
  var API = "https://jolly-cell-74c0.enzo-toysreview.workers.dev";
  function money(n) { return "R$\u00a0" + n.toFixed(2).replace(".", ","); }
  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return {"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]; }); }

  function showQR(box, data) {
    box.hidden = false;
    box.innerHTML =
      '<div class="pix-qr" aria-live="polite">' +
      '<p class="pix-total">Pix de <strong>' + money(data.total) + '</strong> para Silvana Gomes Macedo</p>' +
      '<img src="data:image/png;base64,' + data.qr_code_base64 + '" alt="QR Code do Pix" width="240" height="240">' +
      '<ol class="pix-steps"><li>Abra o app do seu banco (Banco do Brasil, Caixa, Nubank, Itaú…).</li>' +
      '<li>Vá em <strong>Pix</strong> e escolha <strong>ler QR Code</strong> ou <strong>Pix copia e cola</strong>.</li>' +
      '<li>Confira o valor e confirme. Não precisa ter conta no Mercado Pago.</li></ol>' +
      '<label class="pix-code-label">Código Pix copia e cola<textarea readonly rows="3" class="pix-code">' + esc(data.qr_code) + '</textarea></label>' +
      '<button type="button" class="btn pix-copy">Copiar código Pix</button>' +
      '<p class="pix-status">Aguardando o pagamento… esta página atualiza sozinha.</p></div>';
    var ta = box.querySelector(".pix-code");
    box.querySelector(".pix-copy").addEventListener("click", function (ev) {
      var b = ev.currentTarget;
      function ok() { b.textContent = "Código copiado ✓"; setTimeout(function () { b.textContent = "Copiar código Pix"; }, 2500); }
      if (navigator.clipboard) navigator.clipboard.writeText(data.qr_code).then(ok, function () { ta.select(); document.execCommand("copy"); ok(); });
      else { ta.select(); document.execCommand("copy"); ok(); }
    });
    poll(box, data.id, 0);
  }

  function poll(box, id, n) {
    if (n > 360) { box.querySelector(".pix-status").textContent = "Ainda não vimos o pagamento. Se já pagou, o e-book chega no seu e-mail assim que o Pix for confirmado."; return; }
    setTimeout(function () {
      fetch(API + "/status?id=" + encodeURIComponent(id)).then(function (r) { return r.json(); }).then(function (d) {
        if (d.status === "approved") {
          box.innerHTML = '<div class="pix-ok" role="status"><h3>Pagamento confirmado!</h3><p>O e-book chega no seu e-mail em instantes. Confira também a caixa de spam.</p></div>';
        } else if (d.status === "rejected" || d.status === "cancelled") {
          box.querySelector(".pix-status").textContent = "Este Pix expirou ou foi cancelado. Gere um novo código.";
        } else poll(box, id, n + 1);
      }).catch(function () { poll(box, id, n + 1); });
    }, 5000);
  }

  window.MFPix = {
    create: function (items, email, box) {
      return fetch(API + "/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ items: items, email: email })
      }).then(function (res) {
        return res.json().then(function (d) {
          if (!res.ok) throw new Error((d && d.error) || "Falha ao gerar o Pix");
          showQR(box, d); return d;
        });
      });
    }
  };

  // Formulários simples das páginas de cada e-book
  document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll("form.pix-form[data-item]").forEach(function (f) {
      var box = f.parentNode.querySelector(".pix-box");
      var err = f.querySelector(".alert");
      var btn = f.querySelector("button[type=submit]");
      f.addEventListener("submit", function (ev) {
        ev.preventDefault();
        err.hidden = true;
        var email = f.querySelector("input[type=email]").value.trim();
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { err.hidden = false; err.textContent = "Informe um e-mail válido. É para lá que o e-book vai."; return; }
        btn.disabled = true; btn.textContent = "Gerando o Pix…";
        MFPix.create([f.getAttribute("data-item")], email, box).then(function () { f.hidden = true; })
          .catch(function (e) { err.hidden = false; err.textContent = e.message + " Tente de novo ou escreva para silvanagomesmacedo.dev.br@gmail.com."; btn.disabled = false; btn.textContent = "Gerar Pix de R$ 5,20"; });
      });
    });
  });
})();
