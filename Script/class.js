const renameClassBtn = document.getElementById('renameClassName');

  // Menambahkan event listener untuk meng-handle klik pada elemen img
  renameClassBtn.addEventListener('click', function() {
    // Menampilkan prompt untuk memasukkan teks
    const newNameClass = prompt('Masukkan nama baru:');

    // Memperbarui teks pada semua elemen dengan id "rename_agenda_child"
    const renameElementsClass = document.querySelectorAll('#rename_agenda_child');
    renameElementsClass.forEach(function(element) {
      element.textContent = newNameClass;
    });

    // Menyimpan perubahan ke local storage
    localStorage.setItem('newNameAgendaChild', newNameClass);
  });
    

  // Memeriksa apakah ada nilai teks yang tersimpan di local storage saat halaman dimuat
  document.addEventListener('DOMContentLoaded', function() {
    const savedName = localStorage.getItem('newNameAgendaChild');
    if (savedName) {
      const renameElementsClass = document.querySelectorAll('#rename_agenda_child');
      renameElementsClass.forEach(function(element) {
        element.textContent = savedName;
      });
    }
  });