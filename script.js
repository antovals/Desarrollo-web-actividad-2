let users = [
    { id: 1, nombre: "Juan Pérez", email: "juan@example.com", telefono: "123456789", direccion: "Calle Falsa 123", fecha_nacimiento: "1990-01-01", genero: "Masculino", profesion: "Ingeniero" },
    { id: 2, nombre: "María López", email: "maria@example.com", telefono: "987654321", direccion: "Avenida Siempre Viva 742", fecha_nacimiento: "1985-05-15", genero: "Femenino", profesion: "Diseñadora" },
    { id: 3, nombre: "Carlos Martínez", email: "carlos@example.com", telefono: "456789123", direccion: "Boulevard de los sueños 456", fecha_nacimiento: "1992-03-10", genero: "Masculino", profesion: "Desarrollador" }
];

// Función para agregar evento al formulario
document.getElementById("userForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita que la página se recargue

    // Obtener valores del formulario
    const id = parseInt(document.getElementById("cedula").value);
    const nombre = document.getElementById("nombre").value;
    const email = document.getElementById("email").value;
    const telefono = document.getElementById("telefono").value;
    const direccion = document.getElementById("direccion").value;
    const fecha_nacimiento = document.getElementById("fecha_nacimiento").value;
    const genero = document.getElementById("genero").value;
    const profesion = document.getElementById("profesion").value;

    // Validar ID único
    const existingUser = users.find(user => user.id === id);
    if (existingUser) {
        alert("La cédula ya está registrada. Por favor, elige otro ID.");
        return;
    }

    // Agregar usuario nuevo
    users.push({ id, nombre, email, telefono, direccion, fecha_nacimiento, genero, profesion });
    
    // Limpiar el formulario
    document.getElementById("userForm").reset();
    
    // Llamar a la función para listar usuarios
    listarUsuarios();
});

// Función para listar usuarios
function listarUsuarios() {
    const tableBody = document.getElementById("tableBody");
    tableBody.innerHTML = ""; // Limpiar tabla antes de listar

    // Agregar usuarios a la tabla
    users.forEach(user => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${user.id}</td>
            <td>${user.nombre}</td>
            <td>${user.email}</td>
            <td>${user.telefono}</td>
            <td>${user.direccion}</td>
            <td>${user.fecha_nacimiento}</td>
            <td>${user.genero}</td>
            <td>${user.profesion}</td>
        `;
        tableBody.appendChild(row);
    });
}

// Añadir evento para listar usuarios desde el botón
document.getElementById("listarBtn").addEventListener("click", listarUsuarios);
