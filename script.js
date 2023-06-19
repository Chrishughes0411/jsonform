// Obtener referencias a los elementos del DOM
const doctorForm = document.getElementById('doctorForm');
const patientForm = document.getElementById('patientForm');
const doctorList = document.getElementById('doctorList');
const patientList = document.getElementById('patientList');

// Manejar envío de formulario de doctores
doctorForm.addEventListener('submit', function(event) {
  event.preventDefault();

  // Obtener los valores de los campos del formulario
  const name = document.getElementById('doctorName').value;
  const lastName = document.getElementById('doctorLastName').value;
  const cedula = document.getElementById('doctorCedula').value;
  const specialty = document.getElementById('doctorSpecialty').value;
  const consultorio = document.getElementById('doctorConsultorio').value;
  const email = document.getElementById('doctorEmail').value;

  // Crear objeto con los datos del doctor
  const doctor = {
    nombre: name,
    apellido: lastName,
    cedula: cedula,
    especialidad: specialty,
    consultorio: consultorio,
    correo: email
  };

  // Agregar el objeto al arreglo de doctores (si no existe, crearlo)
  let doctors = JSON.parse(localStorage.getItem('doctors')) || [];
  doctors.push(doctor);

  // Almacenar el arreglo actualizado en el Local Storage
  localStorage.setItem('doctors', JSON.stringify(doctors));

  // Actualizar la lista de doctores en el DOM
  displayDoctors();

  // Limpiar el formulario
  doctorForm.reset();
});

// Manejar envío de formulario de pacientes
patientForm.addEventListener('submit', function(event) {
  event.preventDefault();

  // Obtener los valores de los campos del formulario
  const name = document.getElementById('patientName').value;
  const lastName = document.getElementById('patientLastName').value;
  const cedula = document.getElementById('patientCedula').value;
  const age = document.getElementById('patientAge').value;
  const phone = document.getElementById('patientPhone').value;
  const specialty = document.getElementById('patientSpecialty').value;

  // Crear objeto con los datos del paciente
  const patient = {
    nombre: name,
    apellido: lastName,
    cedula: cedula,
    edad: age,
    telefono: phone,
    especialidad: specialty
  };

  // Agregar el objeto al arreglo de pacientes (si no existe, crearlo)
  let patients = JSON.parse(localStorage.getItem('patients')) || [];
  patients.push(patient);

  // Almacenar el arreglo actualizado en el Local Storage
  localStorage.setItem('patients', JSON.stringify(patients));

  // Actualizar la lista de pacientes en el DOM
  displayPatients();

  // Limpiar el formulario
  patientForm.reset();
});

// Mostrar los doctores en la lista del DOM
function displayDoctors() {
  doctorList.innerHTML = '';

  // Obtener el arreglo de doctores desde el Local Storage
  const doctors = JSON.parse(localStorage.getItem('doctors')) || [];

  // Recorrer el arreglo y crear elementos <li> para cada doctor
  doctors.forEach(function(doctor) {
    const listItem = document.createElement('li');
    listItem.textContent = `Nombre: ${doctor.nombre} ${doctor.apellido}, Cédula: ${doctor.cedula}, Especialidad: ${doctor.especialidad}, Consultorio: ${doctor.consultorio}, Correo: ${doctor.correo}`;
    doctorList.appendChild(listItem);
  });
}

// Mostrar los pacientes en la lista del DOM
function displayPatients() {
  patientList.innerHTML = '';

  // Obtener el arreglo de pacientes desde el Local Storage
  const patients = JSON.parse(localStorage.getItem('patients')) || [];

  // Recorrer el arreglo y crear elementos <li> para cada paciente
  patients.forEach(function(patient) {
    const listItem = document.createElement('li');
    listItem.textContent = `Nombre: ${patient.nombre} ${patient.apellido}, Cédula: ${patient.cedula}, Edad: ${patient.edad}, Teléfono: ${patient.telefono}, Especialidad Requerida: ${patient.especialidad}`;
    patientList.appendChild(listItem);
  });
}

// Cargar los doctores y pacientes al cargar la página
displayDoctors();
displayPatients();
