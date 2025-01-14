// Get elements
const requirementsPanel = document.getElementById('requirements-panel');
const notificationPanel = document.getElementById('notification-panel');
const settingsBtn = document.getElementById('settings-btn');
const closeBtn = document.getElementById('close-btn');
const messageContainer = document.getElementById('message-container');

settingsBtn.addEventListener('click', () => {
  requirementsPanel.style.transform = 'translateX(-100%)';
  notificationPanel.style.transform = 'translateX(0)';
});

closeBtn.addEventListener('click', () => {
  requirementsPanel.style.transform = 'translateX(0)';
  notificationPanel.style.transform = 'translateX(100%)';
  messageContainer.style.display = 'none';
});
