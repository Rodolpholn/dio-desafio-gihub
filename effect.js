// document.addEventListener("DOMContentLoaded", function () {
//   const toggleCourses = document.getElementById("toggleCourses");
//   const coursesList = document.getElementById("coursesList");

//   toggleCourses.addEventListener("click", function () {
//     coursesList.classList.toggle("hidden");
//   });
// });

document.addEventListener("DOMContentLoaded", function () {
  // Seleciona todos os botões de toggle
  const toggleButtons = document.querySelectorAll("[id^='toggleCourses']");

  toggleButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      // Extrai o número da tabela do id do botão
      const tableId = "coursesList" + button.id.replace("toggleCourses", "");
      const coursesList = document.getElementById(tableId);

      // Alterna a classe 'hidden' para esconder ou mostrar a tabela
      if (coursesList) {
        coursesList.classList.toggle("hidden");
      }
    });
  });
});
