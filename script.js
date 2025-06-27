// Función para mostrar el formulario del proyecto al hacer clic en una card
function showProjectForm(project) {
    const formSection = document.getElementById("project-form");
    const title = document.getElementById("project-title-form");
    const form = document.getElementById("project-details-form");
  
    // Mostrar el título y el formulario dependiendo del proyecto seleccionado
    if (project === "project1") {
      title.innerText = "Formulario Proyecto 1";
    } else if (project === "project2") {
      title.innerText = "Formulario Proyecto 2";
    }
  
    // Mostrar el formulario
    formSection.classList.remove("hidden");
  }
  
  // Función para cerrar el formulario del proyecto
  function closeProjectForm() {
    const formSection = document.getElementById("project-form");
    formSection.classList.add("hidden");
  }
  
  // Modal de inicio de sesión
  function openModal() {
    document.getElementById("login-modal").classList.add("show");
  }
  
  function closeModal() {
    document.getElementById("login-modal").classList.remove("show");
  }
  