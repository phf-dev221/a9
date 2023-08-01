document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    if (!name || !email || !message) {
      showMessage('Veuillez remplir tous les champs.');
    } else if (!validateEmail(email)) {
      showMessage('Adresse e-mail invalide.');
    } else {
      showMessage('Le formulaire a été soumis avec succès!', 'success');
      
    }
  });


  function submitForm(event){
    document.getElementById('contactForm').reset()
  }
  
  function validateEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  }
  
  function showMessage(message, type = 'error') {
    const messageDiv = document.getElementById('messageDiv');
    messageDiv.textContent = message;
    messageDiv.className = type === 'error' ? 'error' : 'success';
  }
  
  