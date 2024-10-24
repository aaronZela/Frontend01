// Definimos una paleta de colores para los cursos
export const courseColors = [
    '#FF6B6B', // Rojo coral
    '#4ECDC4', // Turquesa
    '#45B7D1', // Azul claro
    '#96CEB4', // Verde menta
    '#FFEEAD', // Amarillo pastel
    '#D4A5A5', // Rosa vintage
    '#9B59B6', // Púrpura
    '#3498DB', // Azul
    '#E67E22', // Naranja
    '#2ECC71'  // Verde
  ];
  
  export const getRandomColor = () => {
    return courseColors[Math.floor(Math.random() * courseColors.length)];
  }