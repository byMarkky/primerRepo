let label = document.getElementById('paco');

function saludar() {
    const texto = document.getElementById('text').value;
    label.innerHTML = `<strong>Paco: </strong>${texto}`;
}