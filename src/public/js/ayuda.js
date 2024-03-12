function fechaNacimiento (element, destino) {
  var edad = document.getElementById(element).value;
  var year = new Date().getFullYear();
  var mes = ("0" + (new Date().getMonth() + 1)).slice(-2);
  var dia = ("0" + (new Date().getDay() + 1)).slice(-2);
  var fechaNacimiento = (year - edad) + "-" + mes + "-" + dia;
  document.getElementById(destino).value = fechaNacimiento;
}
