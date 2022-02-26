let students = []
let id_current = 0

function load_from_site() {
	let xhr = new XMLHttpRequest();
	xhr.open('GET','http://217.71.129.139:4035/students.php');
	xhr.send();
	xhr.onload = function() {
		if (xhr.status != 200) {
			alert(`Ошибка ${xhr.status}: ${xhr.statusText}`);
		}
		else {
			students = JSON.parse(xhr.responseText)['response']
		}
	};
	xhr.operror = function() {
		alert("Запрос не удался");
	}
}

function load_all() {
	let table = document.getElementById('tbl_all')
	for (let i = 0; i < students.length; i++) {
		let id = students[i].id
		let name = students[i].name
		let surname = students[i].surname
		
		let tr = document.createElement('tr')
		let td1 = document.createElement('td')
		let td2 = document.createElement('td')
		let td3 = document.createElement('td')

		td1.textContent = id
		td2.textContent = name
		td3.textContent = surname

		tr.appendChild(td1);
		tr.appendChild(td2);
		tr.appendChild(td3);

		table.appendChild(tr)
	}
}

function load_student(id) {
	let img = document.getElementById('logo')
	img.src = 'http://217.71.129.139:4035/'+students[id].logo
	let head = document.getElementById('zagolovok')
	head.textContent = 'Информация о студенте № ' + students[id].id
	let name = document.getElementById('name')
	name.textContent = students[id].name
	let surname = document.getElementById('surname')
	surname.textContent = students[id].surname
	let scores = document.getElementById('scores')
	scores.textContent = students[id].scores
	let sum = 0
	for (let i = 0; i < students[id].scores.length; i++) {
		sum += students[id].scores[i]
	}
	let sred = document.getElementById('sred')
	sred.textContent = sum / (students[id].scores.length)
	let logo = document.getElementById('logo')
}

function next() {
	id_current++
	if (id_current > 0) document.getElementById('btn_prev').disabled = false
	if (id_current === students.length-1) {
		document.getElementById('btn_next').disabled = true
	}
	load_student(id_current)
}

function prev() {
	id_current--
	if (id_current === 0 ) document.getElementById('btn_prev').disabled = true
	if (id_current > 0) document.getElementById('btn_next').disabled = false
	load_student(id_current)
}