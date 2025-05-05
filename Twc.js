function sendMessage() {
    const msgInput = document.getElementById('message');
    const chatBox = document.getElementById('chatBox');
    const confirmationBox = document.getElementById('confirmation-box');
    const msg = msgInput.value.trim();

    if (!msg) {
      alert("Please type a message before sending.");
      return;
    }

    const confirmPay = confirm("Pay ₹500 to send this message?");
    if (confirmPay) {

      const bubble = document.createElement('div');
      bubble.className = 'message-bubble';
      bubble.textContent = msg;
      chatBox.appendChild(bubble);

     
      msgInput.value = "";

    
      confirmationBox.style.display = "block";
      setTimeout(() => {
        confirmationBox.style.display = "none";
      }, 4000);
    }
  }