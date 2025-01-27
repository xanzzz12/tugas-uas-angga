// Registrasi Service Worker
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('service-worker.js')
        .then(registration => {
          console.log('Service Worker terdaftar dengan scope:', registration.scope);
        })
        .catch(error => {
          console.error('Pendaftaran Service Worker gagal:', error);
        });
    });
  }
  
  // Event Listener untuk tombol "Selamat Datang"
  document.getElementById('welcome-btn').addEventListener('click', () => {
    const welcomeModal = new bootstrap.Modal(document.getElementById('welcomeModal'));
    welcomeModal.show();
  });
  