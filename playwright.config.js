// playwright.config.js
module.exports = {
  use: {
    baseURL: 'https://opensource-demo.orangehrmlive.com', // URL base para la aplicación a probar
    headless: true, // Si se debe ejecutar en modo headless o no
    viewport: { width: 1280, height: 720 }, // Tamaño de la ventana del navegador
    ignoreHTTPSErrors: true, // Ignorar errores HTTPS
    actionTimeout: 0, // Tiempo máximo para acciones en la página (0 significa sin límite)
  },
  testDir: './tests', // Directorio donde se encuentran tus pruebas
  timeout: 30000, // Tiempo máximo para cada prueba (en milisegundos)
  expect: {
    timeout: 5000, // Tiempo máximo para expect() (en milisegundos)
  },
  fullyParallel: true,
  retries: 1,
  workers: 2,
  projects: [
    {
      name: 'chromium',
      use: { ...require('playwright').devices['Desktop Chrome'] },
    },
    {
      name: 'firefox',
      use: { ...require('playwright').devices['Desktop Firefox'] },
    },
    {
      name: 'webkit',
      use: { ...require('playwright').devices['Desktop Safari'] },
    },
  ],
};
