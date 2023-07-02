

let info = [];
const formulario = () =>{

	let userName = document.getElementById('nombre').value;
	let userEmail = document.getElementById('email').value;
	let userPhone = document.getElementById('telefono').value;
	let userAsunto = document.getElementById('asunto').value;


	let datos = {
		name: userName,
		email: userEmail,
		phone: userPhone,
		asunto: userAsunto,
	}
	
	console.log(info);
	info.push(datos);

	
}
formulario()

