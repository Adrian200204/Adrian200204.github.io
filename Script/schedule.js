const addButtonWorkbench = document.getElementById('add-button-workbench');
const listWorkbench = document.getElementById('workbench_list');

addButtonWorkbench.addEventListener('click', () => {
  const title = prompt('Enter a title:');
  const description = prompt('Enter a description:');

  if (title && description) {
    const newItem = document.createElement('li');
    newItem.innerHTML = `<span id="titleOutput"></span><button class="delliBtnWorkbench">Delete</button><p id="descriptionOutput"></p>`;
    
    newItem.querySelector('#titleOutput').innerText = title;
    newItem.querySelector('#descriptionOutput').innerText = description;

    listWorkbench.appendChild(newItem);

    localStorage.setItem('workbench_title', title);
    localStorage.setItem('workbench_description', description);

    alert(`Title: ${title}\nDescription: ${description}`);

    let deleteTitleButton = newItem.querySelector('.delliBtnWorkbench');

    deleteTitleButton.addEventListener('click', () => {
      if (confirm('Are you sure you want to delete this item?')) {
        localStorage.removeItem('workbench_title');
        localStorage.removeItem('workbench_description');
        newItem.remove();
      }
    });
  }
});

// Memeriksa apakah ada data yang tersimpan di local storage saat halaman dimuat
document.addEventListener('DOMContentLoaded', () => {
  const savedTitle = localStorage.getItem('workbench_title');
  const savedDescription = localStorage.getItem('workbench_description');

  if (savedTitle && savedDescription) {
    const newItem = document.createElement('li');
    newItem.innerHTML = `<span id="titleOutput"></span><button class="delliBtnWorkbench">Delete</button><p id="descriptionOutput"></p>`;
    
    newItem.querySelector('#titleOutput').innerText = savedTitle;
    newItem.querySelector('#descriptionOutput').innerText = savedDescription;

    listWorkbench.appendChild(newItem);

    let deleteTitleButton = newItem.querySelector('.delliBtnWorkbench');

    deleteTitleButton.addEventListener('click', () => {
      if (confirm('Are you sure you want to delete this item?')) {
        localStorage.removeItem('workbench_title');
        localStorage.removeItem('workbench_description');
        newItem.remove();
      }
    });
  }
});

