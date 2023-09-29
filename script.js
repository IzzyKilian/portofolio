document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');
    const popupNotification = document.getElementById('popupNotification');
  
    form.addEventListener('submit', function (e) {
      e.preventDefault(); // Mencegah pengiriman formulir secara otomatis
  
      // Simulasikan pengiriman formulir (Anda dapat menggantinya dengan permintaan HTTP yang sesungguhnya)
      setTimeout(function () {
        popupNotification.classList.remove('hidden');
        setTimeout(function () {
          popupNotification.classList.add('hidden');
        }, 5000); // Sembunyikan notifikasi setelah 5 detik
      }, 1000); // 1 detik setelah pengiriman formulir
    });
  });
  console.log('Fungsi notifikasi dipanggil');