export const positionTrans = position => {
  switch (position) {
    case "GOALKEEPER":
      return "Portero";
      /* eslint-disable no-unreachable */
      break;
    case "CENTRE_BACK":
      return "Defensa central";
      break;
    case "LEFT_BACK":
      return "Lateral izquierdo";
      break;
    case "RIGHT_BACK":
      return "Lateral derecho";
      break;
    case "DEFENSIVE_MIDFIELD":
      return "Pivote defensivo";
      break;
    case "CENTRE_MIDFIELD":
      return "Centrocampista";
      break;
    case "LEFT_MIDFIELD":
      return "Volante izquierdo";
      break;
    case "RIGHT_MIDFIELD":
      return "Volante derecho";
      break;
    case "ATTACKING_MIDFIELD":
      return "Media punta";
      break;
    case "LEFT_WINGER":
      return "Extremo izquierdo"; 
      break;
    case "RIGHT_WINGER":
      return "Extremo derecho";
      break;
    case "SECOND_STRIKE":
      return "Segundo delantero";    
      break;
    case "CENTRE_FORWARD":
      return "Delantero centro";
      break;
    default:
      return "* Sin definir *";
  }
}

export const footTrans = foot => {
  switch (foot) {
    case "LEFT":
      return "Zurdo";
      /* eslint-disable no-unreachable */
      break;
    case "RIGHT":
      return "Diestro";
      break;
    case "AMB":
      return "Ambidiestro";
      break;
    default:
      return "Desconocido";
  }
}

export const formatDate = date => {
  var monthNames = [
    "Enero", "Febrero", "Marzo",
    "Abril", "Mayo", "Junio", "Julio",
    "Agosto", "Septiembre", "Octubre",
    "Noviembre", "Deciembre"
  ];

  let d = new Date(date),
      monthIndex = d.getMonth(),
      day = '' + d.getDate(),
      year = d.getFullYear();

  if (day.length < 2) day = '0' + day;

  return [day, monthNames[monthIndex], year].join('-');
}

export const calculateAge = birthday => { // birthday is a date
  let d = new Date(birthday);
  let ageDifMs = Date.now() - d.getTime();
  let ageDate = new Date(ageDifMs); // miliseconds from epoch
  return Math.abs(ageDate.getUTCFullYear() - 1970);
}
    
