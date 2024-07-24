const common = [
    'features/**/*.feature', // Ruta a los archivos .feature
    '--require-module js:babel-register', // Si utilizas Babel para transpilar JS moderno
    '--require steps/**/*.js', // Ruta a los archivos de pasos
    '--format progress', // Formato de salida en la consola
    '--format json:reports/cucumber_report.json' // Salida de reporte en formato JSON
  ].join(' ');
  
  module.exports = {
    default: common
  };
  