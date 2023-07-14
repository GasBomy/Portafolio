let planilla = document.getElementById('presencias')
let info = []

const asistencias=(event)=>{
	event.preventDefault();

	let datos = {
		Alumnos: planilla.name.value,
		Asistencia: planilla.asistencias.value,
	}
	info.push(datos)
	console.log(info)

	let datosP = JSON.stringify(info);
	localStorage.setItem('concurrencias', datosP)

}
planilla.onsubmit = asistencias;