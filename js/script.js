$(document).ready(function(){
    $('#inputPhone  ').mask('(00) 00000-0000');
  });

  var students = [
    {
      id: 1,
      name: "André",
      email: "andre@gmail.com",
      phone: "11999999999",
      course: 1,
      morning: true,
      afternoon: false,
      night: false,
    },
    {
      id: 2,
      name: "Lucas",
      email: "lucas@gmail.com",
      phone: "11999999999",
      course: 2,
      morning: false,
      afternoon: true,
      night: false,
    },
    {
      id: 3,
      name: "Ferreira",
      email: "ferreira@gmail.com",
      phone: "11999999999",
      course: 3,
      morning: false,
      afternoon: false,
      night: true,
    },
  ];

  var shifts = [
    { id: 1, name: "Java"},
    { id: 2, name: "Angular"},
    { id: 3, name: "Spring"}
  ];

  loadStudents();

  function loadStudents() {
    for (let stud of students) {
      addNewRow(stud);
    }
  }

  function save() {

    var stud = {
      id: students.length+1,
      name: document.getElementById("inputName").value,
      email: document.getElementById("inputEmail").value,
      phone: document.getElementById("inputPhone").value,
      course: document.getElementById("selectCourse").value,
      morning: document.getElementById("")
      afternoon:
      night: 
    };
  }