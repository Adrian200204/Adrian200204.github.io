const selects = document.querySelectorAll(".option_attendance");

		selects.forEach(select => {
			select.addEventListener("change", function() {
				const color = select.value === "sakit" ? "var(--blue-light)" :
							  select.value === "absen" ? "var(--red)" :
							  select.value === "izin" ? "var(--gold)" :
							  select.value === "hadir" ? "var(--green-font)" :
							  "white"; // default color
				select.style.backgroundColor = color;
			});
		});


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