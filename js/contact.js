

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
		asunto: userAsunto
	}
	
	console.log(info);
	info.push(datos);

	
}
formulario()
//=========================================0
/* const formulario = document.getElementById('registerFormulario2')
let info =[]
const login= (event) =>{
	event.preventDefault()
	console.log(event);
	console.log(formulario.userName.value)
	console.log(formulario.password.value)
	console.log(formulario.telefono.value)
	console.log(formulario.asunto.value)

	let datos ={
		name:userName.value,
		email:password.value,
		phone:telefono.value,
		asunto:asunto.value,
	}
info.push(datos);
console.log(info)
}
formulario.onsubmit = login */