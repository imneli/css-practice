const userInput = document.getElementById('user-input');
const sendButton = document.getElementById('send-button');
const chatArea = document.querySelector('.chat-area');

sendButton.addEventListener('click', sendMessage);

function sendMessage() {
    const userMessage = userInput.value.trim();
    if (userMessage) {
      appendMessage(userMessage, 'user-message');
      userInput.value = '';
  
      let botMessage = 'Desculpe, ainda estou em desenvolvimento e aprendendo a responder!';
      if (userMessage.includes('tempo')) {
        botMessage = 'Hmm, deixe-me verificar a previsão do tempo para hoje.';
      } else if (userMessage.includes('ajuda')) {
        botMessage = 'Posso te ajudar com [lista de funcionalidades do chatbot].';
      }
  
      setTimeout(() => {
        appendMessage(botMessage, 'bot-message');
      }, 1000);
    }
  }
  
function appendMessage(message, type) {
    const messageElement = document.createElement('div');
    messageElement.classList.add(type);
    messageElement.textContent = message;
    chatArea.appendChild(messageElement);
    chatArea.scrollTop = chatArea.scrollHeight;
}


  
