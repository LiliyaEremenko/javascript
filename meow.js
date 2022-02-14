let id = 1;

function hi() {
	let table = document.getElementById("tbl");
	let name = document.getElementById("name").value;
	let tr = document.createElement('tr');
	let td1 = document.createElement('td');
	let td2 = document.createElement('td');

	td1.textContent = id;
	td2.textContent = name;
	tr.appendChild(td1);
	tr.appendChild(td2);
	table.appendChild(tr);

	id += 1;
}