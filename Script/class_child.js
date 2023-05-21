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
  paragraph.innerHTML = 'Operasi Hitung Pecahan ' + '<img id="renameTitleClassToday" src="./Assets/icon_rename_class.svg">';
  paragraph.firstChild.textContent = savedText;
}

// Add a click event listener to the image
image.addEventListener('click', function() {
  // Prompt the user for a new text value
  var newText = prompt('Enter the new text:');

  // Update the text inside the <p> element
  if (newText !== null) {
    paragraph.innerHTML = 'Operasi Hitung Pecahan ' + '<img id="renameTitleClassToday" src="./Assets/icon_rename_class.svg">';
    paragraph.firstChild.textContent = newText;

    // Save the new text in local storage
    localStorage.setItem('titleClassToday', newText);
  }
});
