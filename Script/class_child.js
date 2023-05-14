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
