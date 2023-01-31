// Salvar respostas em arquivo local
function saveAnswer(answer) {
  // Criar ou abrir o arquivo local
  let data = localStorage.getItem('answers');
  if (!data) {
    data = [];
  } else {
    data = JSON.parse(data);
  }

  // Adicionar a resposta ao array
  data.push(answer);

  // Salvar o array atualizado no arquivo local
  localStorage.setItem('answers', JSON.stringify(data));
}

// Enviar a resposta ao clicar no botão ou ao pressionar Enter
document.getElementById('message-form').addEventListener('submit', function(event) {
  event.preventDefault();
  let answer = document.getElementById('message').value;
  saveAnswer(answer);
});
