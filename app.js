const richestPeople = [
	'Jeff Bezos',
	'Bill Gates',
	'Warren Buffett',
	'Bernard Arnault',
	'Carlos Slim Helu',
	'Amancio Ortega',
	'Larry Ellison',
	'Mark Zuckerberg',
	'Michael Bloomberg',
	'Larry Page',
];

const sort = document.querySelector('.sort');
let sortableList;

const loadRichestPeople = () => {
	const list = document.getElementById('sortable-list');
	list.innerHTML = '';

	richestPeople.forEach((person, index) => {
		const listItem = document.createElement('li');
		listItem.classList.add('draggable');
		listItem.innerHTML = `
        <span class="number">${index + 1}</span>
        <p class="person-name">${person}</p>
        <i class="fas fa-grip-lines" aria-hidden="true"></i>
      `;
		list.appendChild(listItem);
	});

	sortableList = Sortable.create(document.getElementById('sortable-list'), {
		animation: 150,
		onEnd: () => {
			updateNumbers();
		},
	});
};

const updateNumbers = () => {
	const listItems = document.querySelectorAll('#sortable-list li');
	listItems.forEach((item, index) => {
		const numberElement = item.querySelector('.number');
		numberElement.textContent = index + 1;
	});
};

document.addEventListener('DOMContentLoaded', () => {
	loadRichestPeople();
});

sort.addEventListener('click', () => {
	sortableList.destroy();
	loadRichestPeople();
});
