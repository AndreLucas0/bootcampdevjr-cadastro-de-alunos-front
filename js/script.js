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
      morning: document.getElementById("flexRadioMorning").checked,
      afternoon: document.getElementById("flexRadioAfternoon").checked,
      night: document.getElementById("flexRadioNight").checked
    };

    addNewRow(stud);
    students.push(stud);

    document.getElementById("formStudent").reset();
  }

  function addNewRow(stud) {
    var table = document.getElementById("studentsTable");

    var newRow = table.insertRow();

    var idNode = document.createTextNode(stud.id);
    newRow.insertCell().appendChild(idNode);

    var nameNode = document.createTextNode(stud.name);
    newRow.insertCell().appendChild(nameNode);

    var emailNode = document.createTextNode(stud.email);
    newRow.insertCell().appendChild(emailNode);

    var phoneNode = document.createTextNode(stud.phone);
    newRow.insertCell().appendChild(phoneNode);

    var courseNode = document.createTextNode(stud.course);
    newRow.insertCell().appendChild(courseNode);

    
  }