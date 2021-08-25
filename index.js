const addShow = document.getElementById('btn');

addShow.addEventListener('click', newShow);

const listOfShows = [];

function newShow(e) {
	e.preventDefault();
	const showValue = document.getElementById('shows');

	if (showValue.value !== '') {
		const li = document.createElement('li');
		li.classList.add('li-list');
		const text = document.createTextNode(showValue.value);
		li.appendChild(text);

		listOfShows.push(li);
		renderListOfShows();
		const noValue = document.getElementById('shows');
		noValue.classList.remove('error');
		showValue.value = '';
	} else {
		const noValue = document.getElementById('shows');
		noValue.classList.add('error');
	}
}

function renderListOfShows() {
	const currentlist = document.getElementById('list-container');
	if (listOfShows.length === 0) {
		currentlist.classList.remove('list-shows');
	} else {
		listOfShows.forEach(show => {
			currentlist.classList.add('list-shows');
			const ul = document.getElementById('list');
			ul.appendChild(show);
		});
	}
}

window.addEventListener('DOMContentLoaded', renderListOfShows);
