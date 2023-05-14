const button = document.getElementById('myButton');
const titleOutput = document.getElementById('titleOutput');
const descriptionOutput = document.getElementById('descriptionOutput');

		button.addEventListener('click', () => {
			const title = prompt('Enter a title:');
			const description = prompt('Enter a description:');

			if (title) {
				titleOutput.innerText = title;
				alert(`Title: ${title}`);
			}

			if (description) {
				descriptionOutput.innerText = description;
				alert(`Description: ${description}`);
			}
		});