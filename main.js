// Seleciona o botão
const btn = document.getElementById("tema-btn");

// Quando clicar, alterna a classe "dark" no body
btn.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    // Muda o ícone do botão
    if(document.body.classList.contains("dark")){
        btn.textContent = "☀️"; // Sol para tema escuro
    } else {
        btn.textContent = "🌙"; // Lua para tema claro
    }
});