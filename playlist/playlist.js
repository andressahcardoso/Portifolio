function inicio(id) {
    console.log('play')
    barra.classList.add("Barra_Status_Ativo"); // Ativa | Status Ativo - sessão verde.
    barra.classList.remove("Barra_Status_Fim"); // Desativa | Horário de FIM - sessão vermelha.
    document.getElementById('tempo_total').innerText= "Você está escutando música " + id + "!";
}
function parar() {
    console.log('pause')
    barra.classList.remove("Barra_Status_Ativo"); // Ativa | Status Ativo - sessão verde.
    barra.classList.add("Barra_Status_Fim"); // Desativa | Horário de FIM - sessão vermelha.
    document.getElementById('tempo_total').innerText= "Pause";
}
