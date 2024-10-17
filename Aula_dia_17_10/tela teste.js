const participantes = [];

document.getElementById("restroForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const nome = document.getElementById("nome").value;
    const cpf = document.getElementById("cpf").value;
    const email = document.getElementById("email").value;

    if (nome && cpf && email) {
        participantes.push({ nome, cpf, email });
        document.getElementById("nome").value = "";
        document.getElementById("cpf").value = "";
        document.getElementById("email").value = "";
        alert("Participante registrado com sucesso!");
    } else {
        alert("Por favor, preencha todos os campos");
    }
});

document.getElementById("mostrarLista").addEventListener("click", function () {
    const lista = document.getElementById("listaparticipantes");
    lista.innerHTML = "";
    participantes.forEach(participante => {
        const li = document.createElement("li");
        li.textContent = `nome: ${participante.nome}, cpf: ${participante.cpf}, email: ${participante.email}`;
        lista.appendChild(li);
    });

})




