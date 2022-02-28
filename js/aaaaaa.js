let students = []
let id_current = 0

function load_from_site() {
	$.get('http://217.71.129.139:4035/students.php', function(data){
		students = JSON.parse(data)['response']
	});
}

function load_all() {
	let table = $('#tbl_all')
	for (let i = 0; i < students.length; i++) {
		let id = students[i].id
		let name = students[i].name
		let surname = students[i].surname
		
		let tr = document.createElement('tr')
		let td1 = document.createElement('td')
		let td2 = document.createElement('td')
		let td3 = document.createElement('td')
		let td4 = document.createElement('button')

		td1.textContent = id
		td2.textContent = name
		td3.textContent = surname
		td4.textContent = 'Подробно'

		tr.appendChild(td1);
		tr.appendChild(td2);
		tr.appendChild(td3);
		tr.appendChild(td4);


		table.after(tr)
	}
}

function load_student(id) {
	$('#logo').prop('src', 'http://217.71.129.139:4035/'+students[id].logo) 
	$('#zagolovok').prop('textContent', 'Информация о студенте № ' + students[id].id)
	$('#name').prop('textContent', students[id].name)
	$('#surname').prop('textContent', students[id].surname)
	$('#scores').prop('textContent', students[id].scores)
	let sum = 0
	for (let i = 0; i < students[id].scores.length; i++) {
		sum += students[id].scores[i]
	}
	$('#sred').prop('textContent',  sum / (students[id].scores.length))
}

function next() {
	load_student(id_current)
	id_current++

	if (id_current === students.length) {
		$('#btn_next').attr('disabled', 'true')
	}
	if (id_current > 0) $('#btn_prev').attr('disabled', 'false')
};

function prev() {
	load_student(id_current)
	id_current--

	if (id_current === 0 ) $('#btn_prev').attr('disabled', 'true')
	if (id_current > 0) $('#btn_next').attr('disabled', 'false')

}