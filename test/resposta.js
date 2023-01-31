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

// Perguntas e respostas
const data = {
"Bem-vindo ao chat. Como posso ajudá-lo?": {
"Quero fazer uma reserva": "Ótimo! Por favor, forneça mais detalhes sobre a sua reserva.",
"Preciso de ajuda com algum problema técnico": "Claro, estou aqui para ajudá-lo. Por favor, descreva o seu problema."
},
"Ótimo! Por favor, forneça mais detalhes sobre a sua reserva.": {
"Quero reservar uma mesa para duas pessoas hoje à noite": "Perfeito! Temos disponibilidade para hoje à noite. Gostaria de fazer a reserva agora?",
"Preciso de uma reserva para uma reunião amanhã": "Certo, temos disponibilidade para amanhã. Gostaria de fazer a reserva agora?"
}
};

// Função para buscar a resposta correta na árvore de decisão
function getAnswer(question) {
let answer = data[question];
if (answer) {
return answer;
} else {
return "Desculpe, não entendi sua pergunta. Posso ajudá-lo com alguma outra coisa?";
}
}

// Enviar a resposta ao clicar no botão ou ao pressionar Enter
document.getElementById('message-form').addEventListener('submit', function(event) {
event.preventDefault();
let question = document.getElementById('message').value;
let answer = getAnswer(question);
saveAnswer(answer);
});



// Exibir respostas armazenadas em local storage
function displayAnswers() {
let data = localStorage.getItem('answers');
if (!data) {
return;
}

data = JSON.parse(data);
let html = '';
for (let i = 0; i < data.length; i++) {
html += '<li>' + data[i] + '</li>';
}

document.getElementById('answers').innerHTML = html;
}

// Chamar a função de exibição de respostas ao carregar a página
window.addEventListener('load', function() {
displayAnswers();
});
