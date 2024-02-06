export function toCapital(str) {
    // Verifica si str es undefined o null
    if (str === undefined || str === null) {
      return '';
    }
    
    // Convierte la primera letra a mayúscula y devuelve la cadena
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
  