/* =========================
   FILTRO DE CATEGORIAS
========================= */

function filtrarCategoria(categoria) {

    const produtos = document.querySelectorAll(".product-card");
    const filtros = document.querySelectorAll(".filter");

    filtros.forEach(function (filtro) {
        filtro.classList.remove("active");
    });

    produtos.forEach(function (produto) {

        const categoriaProduto = produto.dataset.category;

        if (
            categoria === "todos" ||
            categoriaProduto === categoria
        ) {

            produto.style.display = "block";

        } else {

            produto.style.display = "none";

        }

    });

    document.querySelector("#produtos").scrollIntoView({
        behavior: "smooth"
    });
}


/* =========================
   WHATSAPP
========================= */

function comprar(produto, preco) {

    const numero = "5567999999999";

    const mensagem =
        Olá! Vi o produto *${produto}* no site da Luna Boutique e gostaria de saber mais. O valor é R$ ${preco}. Ainda está disponível?;

    const url =
        https://wa.me/${numero}?text=${encodeURIComponent(mensagem)};

    window.open(url, "_blank");
}


/* =========================
   FAVORITOS
========================= */

const favoritos =
    document.querySelectorAll(".favorite");

favoritos.forEach(function (botao) {

    botao.addEventListener("click", function () {

        if (botao.textContent === "♡") {

            botao.textContent = "♥️";

        } else {

            botao.textContent = "♡";

        }

    });

});


/* =========================
   MENU MOBILE
========================= */

function abrirMenu() {

    const menu = document.querySelector(".menu");

    if (menu.style.display === "flex") {

        menu.style.display = "none";

    } else {

        menu.style.display = "flex";
        menu.style.flexDirection = "column";
        menu.style.position = "absolute";
        menu.style.top = "82px";
        menu.style.left = "0";
        menu.style.right = "0";
        menu.style.background = "#fffaf9";
        menu.style.padding = "25px";
        menu.style.gap = "20px";

    }

