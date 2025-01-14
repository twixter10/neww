  
document.addEventListener('DOMContentLoaded', () => {
  const messageContainer = document.getElementById('message-container');
  const closeBtn = document.querySelector('.close-button');


  if (messageContainer && closeBtn) {
    document.querySelector('.styled-button').addEventListener('click', function() {
      if (messageContainer.classList.contains('show')) {
        messageContainer.classList.remove('show');
        setTimeout(function() {
          messageContainer.style.display = 'none';
        }, 500); 
      } else {
        messageContainer.style.display = 'block'; 
        setTimeout(function() {
          messageContainer.classList.add('show'); 
        }, 10); 
      }
    });

   
    closeBtn.addEventListener('click', function() {
      messageContainer.classList.remove('show');
      setTimeout(function() {
        messageContainer.style.display = 'none';
      }, 500);
    });
  }
});

  