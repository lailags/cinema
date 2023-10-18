document.addEventListener("DOMContentLoaded", function() {
    // Obtém todas as imagens dos filmes
    var filmeImagens = document.querySelectorAll(".filme img");

    // Adiciona um ouvinte de evento para cada imagem
    filmeImagens.forEach(function(imagem) {
        imagem.addEventListener("mouseover", function() {
            // Adiciona a classe de destaque quando o mouse passa por cima da imagem
            imagem.classList.add("highlight");
        });

        imagem.addEventListener("mouseout", function() {
            // Remove a classe de destaque quando o mouse sai da imagem
            imagem.classList.remove("highlight");
        });
    });
});