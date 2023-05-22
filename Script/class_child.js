		function updateCalendarChildClass() {
			// Get the current date
			var currentDateChildClass = new Date();
		
			// Define an array of month names
			var monthNamesChildClass = [
			  "January", "February", "March", "April", "May", "June",
			  "July", "August", "September", "October", "November", "December"
			];
		
			// Extract the day, month, and year
			var day = currentDateChildClass.getDate();
			var month = monthNamesChildClass[currentDateChildClass.getMonth()]; // Use monthNames array to get the month name
			var year = currentDateChildClass.getFullYear();
		
			// Generate the updated text
			var updatedDateChildClass = day + " " + month + " " + year;
		
			// Update the dynamicText element with the updated text
			document.getElementById("calendarClassChildText").innerHTML = updatedDateChildClass;
		
			// Add event listener to the saveButton
			var saveButtonChildClass = document.getElementById("saveButtonClassChild");
			saveButtonChildClass.addEventListener("click", function() {
			  // Save the updated text to local storage
			  localStorage.setItem("updatedDateChildClass", updatedDateChildClass);
			});
			// Add event listener to the window's beforeunload event
			window.addEventListener("beforeunload", function(event) {
				// Cancel the default event and prompt the user to save
				event.preventDefault();
				event.returnValue = ""; // For modern browsers
		  
				// Display the alert message
				var confirmationMessage = "Are you sure you want to leave? Your changes may not be saved.";
				event.returnValue = confirmationMessage; // For older browsers
		  
				return confirmationMessage;
			  });
		  }
		
		  // Call the function when the DOM is ready
		  document.addEventListener("DOMContentLoaded", updateCalendarChildClass);


// Retrieve existing table data from local storage or initialize an empty array
let tableDataClass = JSON.parse(localStorage.getItem('tableDataClass')) || [];

// Function to render the table rows
// Function to render the table rows
function renderTableAbsence() {
	const tableAbsenceClassChild = document.getElementById('tableAbsenceClassChild');
  
	tableDataClass.forEach((row, index) => {
	  const newRow = document.createElement('tr');
	  newRow.innerHTML = `
		<td>${row.Name}</td>
		<td>
		  <select class="option_attendance" id="option_attendance${index}">
			<option value="hadir" id="hadir${index}"><a>H</a></option>
			<option value="sakit" id="sakit${index}"><a>S</a></option>
			<option value="absen" id="absen${index}"><a>A</a></option>
			<option value="izin" id="izin${index}"><a>I</a></option>
		  </select>
		</td>
	  `;
	  tableAbsenceClassChild.appendChild(newRow);
  
	  // Set the selected value based on the saved data or default to "hadir"
	  const select = newRow.querySelector(`#option_attendance${index}`);
	  select.value = localStorage.getItem(`option_attendance${index}`) || "hadir";
  
	  // Update the select style based on the saved data or default to "hadir" color
	  const color = select.value === "sakit" ? "var(--blue-light)" :
		select.value === "absen" ? "var(--red)" :
		select.value === "izin" ? "var(--gold)" :
		"var(--green-font)"; // default color for "hadir" option
	  select.style.backgroundColor = color;
	});
  }
  
  renderTableAbsence();
  
  const selects = document.querySelectorAll(".option_attendance");

  selects.forEach((select, index) => {
	select.addEventListener("change", function() {
	  const color = select.value === "sakit" ? "var(--blue-light)" :
		select.value === "absen" ? "var(--red)" :
		select.value === "izin" ? "var(--gold)" :
		"var(--green-font)"; // default color for "hadir" option
	  select.style.backgroundColor = color;
  
	  // Save the selected option value in local storage
	  localStorage.setItem(`option_attendance${index}`, select.value);
	});
  });




// Get the image element
var image = document.querySelector('#renameTitleClassToday');

// Get the parent <p> element
var paragraph = image.parentNode;

// Retrieve the saved text value from local storage
var savedText = localStorage.getItem('titleClassToday');

// Set the text value if it exists
if (savedText !== null) {
  paragraph.firstChild.textContent = savedText;
}

// Add a click event listener to the image
image.addEventListener('click', function() {
  // Prompt the user for a new text value
  var newText = prompt('Enter the new text:');

  // Update the text inside the <p> element
  if (newText !== null) {
    paragraph.firstChild.textContent = newText;

    // Save the new text in local storage
    localStorage.setItem('titleClassToday', newText);
  }
});


// Function to save the renamed text to local storage
function saveTextToLocalStorage(key, text) {
	localStorage.setItem(key, text);
  }
  
  // Function to load the renamed text from local storage
  function loadTextFromLocalStorage(key) {
	return localStorage.getItem(key);
  }
  
  // Event listener for renaming the material link
  document.getElementById("renameLinkMaterial").addEventListener("click", function() {
	var newMaterialName = prompt("Enter a new name for the material link:");
	if (newMaterialName !== null) {
	  var materialLink = document.querySelector(".class_child_list_meet_task a .test1");
	  materialLink.textContent = newMaterialName;
	  saveTextToLocalStorage("materialName", newMaterialName);
	}
  });
  
  // Event listener for renaming the task link
  document.getElementById("renameLinkTask").addEventListener("click", function() {
	var newTaskName = prompt("Enter a new name for the task link:");
	if (newTaskName !== null) {
	  var taskLink = document.querySelector(".class_child_list_meet_task a:last-child .test1");
	  taskLink.textContent = newTaskName;
	  saveTextToLocalStorage("taskName", newTaskName);
	}
  });
  
  // Load the saved text from local storage when the page is loaded
  window.addEventListener("load", function() {
	var savedMaterialName = loadTextFromLocalStorage("materialName");
	var savedTaskName = loadTextFromLocalStorage("taskName");
  
	if (savedMaterialName) {
	  document.querySelector(".class_child_list_meet_task a .test1").textContent = savedMaterialName;
	}
  
	if (savedTaskName) {
	  document.querySelector(".class_child_list_meet_task a:last-child .test1").textContent = savedTaskName;
	}
  });
  
  // Open link in a new tab
  document.querySelector(".class_child_list_meet_task a").addEventListener("click", function() {
	var link = this.querySelector(".test1").textContent;
	if (isLinkValid(link)) {
	  window.open(link, "_blank");
	}
  });
  
  // Function to check if a given text is a valid link
  function isLinkValid(text) {
	// Simple validation - check if it starts with "http://" or "https://"
	return /^https?:\/\//i.test(text);
  }
  

  // table report students

// Function to save the edited values to local storage
function saveEditedValuesReportToLocalStorage() {
	const tableRows = Array.from(document.querySelectorAll('#table-score-content tr'));
	const editedData = [];
  
	tableRows.forEach(row => {
	  const name = row.cells[0].textContent;
	  const score = row.cells[1].textContent;
	  const evaluation = row.cells[2].textContent;
	  const report = row.cells[3].textContent;
  
	  editedData.push({ name, score, evaluation, report });
	});
  
	localStorage.setItem('editedData', JSON.stringify(editedData));
  }
  
  // Function to load the edited values from local storage
  function loadEditedValuesReportFromLocalStorage() {
	const editedDataJSON = localStorage.getItem('editedData');
	if (editedDataJSON) {
	  const editedData = JSON.parse(editedDataJSON);
  
	  const tableRows = Array.from(document.querySelectorAll('#table-score-content tr'));
	  tableRows.forEach((row, index) => {
		row.cells[1].textContent = editedData[index].score;
		row.cells[2].textContent = editedData[index].evaluation;
		row.cells[3].textContent = editedData[index].report;
	  });
	}
  }
  
  function renderNamesReportTable() {
	const tableBodyClassPage = document.getElementById('table-score-content');
  
	tableDataClass.forEach((row, index) => {
	  const newRow = document.createElement('tr');
  
	  const nameCell = document.createElement('td');
	  nameCell.textContent = row.Name;
	  newRow.appendChild(nameCell);
  
	  const scoreCell = document.createElement('td');
	  scoreCell.textContent = '';
	  scoreCell.addEventListener('click', function() {
		const newScore = prompt('Enter a new score:');
		if (newScore !== null) {
		  this.textContent = newScore;
		  saveEditedValuesReportToLocalStorage(); // Corrected function name
		}
	  });
	  newRow.appendChild(scoreCell);
  
	  const evaluationCell = document.createElement('td');
	  evaluationCell.textContent = '';
	  evaluationCell.addEventListener('click', function() {
		const newEvaluation = prompt('Enter a new evaluation:');
		if (newEvaluation !== null) {
		  this.textContent = newEvaluation;
		  saveEditedValuesReportToLocalStorage(); // Corrected function name
		}
	  });
	  newRow.appendChild(evaluationCell);
  
	  const reportCell = document.createElement('td');
	  reportCell.textContent = 'Link';
	  reportCell.addEventListener('click', function() {
		const newLink = prompt('Enter a new report link:');
		if (newLink !== null) {
		  this.textContent = newLink;
		  saveEditedValuesReportToLocalStorage(); // Corrected function name
		}
	  });
	  newRow.appendChild(reportCell);
  
	  tableBodyClassPage.appendChild(newRow);
	});
  }
  
  // Initial rendering
  renderNamesReportTable();
  
  // Load the edited values from local storage when the page is loaded
  window.addEventListener('load', function() {
	loadEditedValuesReportFromLocalStorage();
  });
  