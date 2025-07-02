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
      shift: 1
    },
    {
      id: 2,
      name: "Lucas",
      email: "lucas@gmail.com",
      phone: "11999999999",
      course: 2,
      shift: 2
    },
    {
      id: 3,
      name: "Ferreira",
      email: "ferreira@gmail.com",
      phone: "11999999999",
      course: 3,
      shift: 3
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

  