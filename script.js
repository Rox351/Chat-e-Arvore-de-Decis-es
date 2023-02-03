const questions = [
  {
    question: "Assistência Médica Objetivos",
    answer: `Cobertura através de Plano de Assistência Saúde (PAS), modelo de prestação de Assistência Médica escolhido pela Companhia.`
  },
  {
    question: "Assistência Médica Aplicabilidade",
    answer: "Válido para as categorias conforme quadro abaixo: <img src=\"imagens/Aplicabilidade.png\" alt=\"Minha imagem\">" +
"<br><br><strong>Importante:</strong><span><br>Extensivo aos dependentes legais, conforme política da Cia.<br>Dúvidas consulte a PO Dependentes.</span>"
  },
  {
    question: "Operadoras de Assistência Médica",
    answer: "Atualmente existem duas operadoras de assistência médica, a Unimed e a Sul América.<br>Ambas disponíveis para colaboradores de todas as localidades."
  },
  {
    question: "Tipos de Plano - Qual a diferença entre os planos?",
    answer: "<img src=\"imagens/diferença-entre-os-planos.png\" alt=\"Minha imagem\">"
  },
    {
   question: "Tipos de Plano -  Assistência Médica Expatriado",
    answer: "Em caso de contato de colaboradores transferidos de outros países para BAT, ou da BAT para outros países, registre atendimento para o 2º Nível com as informações solicitadas anotando telefone e e-mail de contato.<br>Oriente ao colaborador a aguardar o retorno."
  },
  {
    question: "Qual é a sua cor favorita?",
    answer: "Minha cor favorita é azul."
  }
];

localStorage.setItem("questions", JSON.stringify(questions));

const storedQuestions = JSON.parse(localStorage.getItem("questions"));

const chatForm = document.querySelector("#chat-form");
const chatInput = document.querySelector("#chat-input");
const chatOutput = document.querySelector("#chat-output");
const suggestionList = document.querySelector("#suggestion-list");

// Esconde a lista de sugestões
suggestionList.style.display = "none";

chatForm.addEventListener("submit", function(e) {
  e.preventDefault();

  for (let i = 0; i < storedQuestions.length; i++) {
    if (chatInput.value === storedQuestions[i].question) {
      chatOutput.innerHTML += `<p><strong>Você:</strong> ${storedQuestions[i].question}</p>`;
      chatOutput.innerHTML += `<p><strong>Chatbot:</strong> ${storedQuestions[i].answer}</p>`;
      break;
    }
  }

  // Adicione isto:
  if (chatOutput.innerHTML === "") {
    chatOutput.innerHTML += `<p><strong>Chatbot:</strong> Desculpe, não tenho uma resposta para essa pergunta.</p>`;
  }

  chatInput.value = "";
  suggestionList.innerHTML = "";
});

chatInput.addEventListener("input", function() {
  suggestionList.innerHTML = "";
  
  // Mostra a lista de sugestões se houver pelo menos um caractere digitado
  if (chatInput.value) {
    suggestionList.style.display = "block";
  } else {
    suggestionList.style.display = "none";
    return;
  }

  for (let i = 0; i < storedQuestions.length; i++) {
    if (storedQuestions[i].question.toLowerCase().includes(chatInput.value.toLowerCase())) {
      const suggestionItem = document.createElement("li");
      suggestionItem.innerHTML = storedQuestions[i].question;
      suggestionItem.addEventListener("click", function() {
        chatInput.value = storedQuestions[i].question;
        suggestionList.innerHTML = "";
        suggestionList.style.display = "none";
      });
      suggestionList.appendChild(suggestionItem);
    }
  }
});
