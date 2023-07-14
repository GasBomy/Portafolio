let datos = localStorage.getItem('concurrencias');
console.log(datos)


const resultado =()=>{

	let datosAlumnos = document.getElementById('contenido');
	datosAlumnos.innerText= '';

	let convertirDatos = JSON.parse(datos);

	for (let i = 0; i < convertirDatos.length; i++) {

		let infoAlumnos = document.createElement('tr')

		let alumnoInfo = document.createElement('td');
		let asistenciaInfo = document.createElement('td');
		let resultadoInfo = document.createElement('td');

		alumnoInfo.textContent = convertirDatos[i].Alumnos;
		asistenciaInfo.textContent = convertirDatos[i].Asistencia


		infoAlumnos.appendChild(alumnoInfo);
		infoAlumnos.appendChild(asistenciaInfo);
		infoAlumnos.appendChild(resultadoInfo);

		contenido.appendChild(infoAlumnos)	

		if (asistenciaInfo.textContent >= 7 ) {
			resultadoInfo.textContent= 'APROBADO'
			resultadoInfo.classList.add('aprobado')
		} else if(asistenciaInfo.textContent < 7 ) {
			resultadoInfo.textContent = 'DESAPROBADO'
			resultadoInfo.classList.add('desaprobado')
		}
	}


}


let boton = document.getElementById('botonn')

 boton.addEventListener('click', (event) => {
 	event.preventDefault();


 	resultado();

 
 })