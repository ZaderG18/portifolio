/* ================================================= */
/* 1. SCRIPT DO TEXTO DE DIGITAÇÃO (HERO) - ATUALIZADO
/* ================================================= */
let typed = new Typed(".texto", {
    // ATUALIZADO: Strings que refletem suas funções
    strings: ["Desenvolvedor Full-Stack", "Analista de TI", "UI Designer"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});


/* ================================================= */
/* 2. SCRIPT "MOSTRAR MAIS" (SOBRE MIM) - NOVO
/* ================================================= */

// Espera o conteúdo da página carregar antes de rodar o script
document.addEventListener("DOMContentLoaded", function() {
    
    // Encontra o botão e o container do texto
    const btnMostrarMais = document.getElementById("btn-sobre-mim");
    const textoCompleto = document.getElementById("texto-completo-sobre-mim");

    // Se o botão não existir, o script para aqui
    if (!btnMostrarMais) {
        return;
    }

    // Adiciona o "escutador" de clique no botão
    btnMostrarMais.addEventListener("click", function(e) {
        
        // Previne o link de pular a página (comportamento padrão do '#')
        e.preventDefault(); 
        
        // Alterna a classe 'expandido' no container do texto
        textoCompleto.classList.toggle("expandido");

        // Atualiza o texto do botão
        if (textoCompleto.classList.contains("expandido")) {
            btnMostrarMais.textContent = "Mostrar Menos";
        } else {
            btnMostrarMais.textContent = "Mostrar Mais";
        }
    });
});