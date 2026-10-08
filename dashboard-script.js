document.addEventListener('DOMContentLoaded', () => {
  // Pull saved driver data from localStorage
  const driverData = JSON.parse(localStorage.getItem('zarideDriverData') || '{}');

  // DOM Elements
  const driverNameDisplay = document.getElementById('driverNameDisplay');
  const infoName = document.getElementById('infoName');
  const infoPhone = document.getElementById('infoPhone');
  const infoCar = document.getElementById('infoCar');
  const infoPlate = document.getElementById('infoPlate');
  const toggleOnlineBtn = document.getElementById('toggleOnlineBtn');
  const statusText = document.getElementById('statusText');
  const logoutBtn = document.getElementById('logoutBtn');

  // Populate info fields if data exists
  if (driverData.fullName) {
    driverNameDisplay.textContent = driverData.fullName;
    infoName.textContent = driverData.fullName;
    infoPhone.textContent = driverData.phone || '-';
    infoCar.textContent = driverData.carModel || '-';
    infoPlate.textContent = driverData.plateNumber || '-';
  } else {
    // Fallback if accessed directly without registration form
    infoName.textContent = 'Partner Driver';
  }

  // Online / Offline Toggle Logic
  let isOnline = false;
  toggleOnlineBtn.addEventListener('click', () => {
    isOnline = !isOnline;
    if (isOnline) {
      toggleOnlineBtn.textContent = 'Go Offline';
      toggleOnlineBtn.className = 'toggle-btn online';
      statusText.textContent = 'Online - Searching for nearby ride requests...';
      statusText.className = 'status-online';
    } else {
      toggleOnlineBtn.textContent = 'Go Online';
      toggleOnlineBtn.className = 'toggle-btn offline';
      statusText.textContent = 'Offline - Go online to receive ride requests';
      statusText.className = 'status-offline';
    }
  });

  // Logout Button Logic
  logoutBtn.addEventListener('click', () => {
    localStorage.removeItem('zarideDriverData');
    localStorage.removeItem('driverEmailVerified');
    localStorage.removeItem('selectedRole');
    window.location.href = 'join.html';
  });
});