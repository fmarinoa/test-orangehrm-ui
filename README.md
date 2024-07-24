# Test OrangeHRM UI

Este proyecto automatiza el proceso de login y creación de usuarios en la aplicación demo OrangeHRM utilizando Playwright y BDD con Gherkin.

## Prerrequisitos
1. **Node.js** y **npm**: Asegúrate de tener Node.js y npm instalados en tu máquina. Puedes verificar la instalación con los siguientes comandos:
- `node -v`
- `npm -v`

2. **Instalar Dependencias**: Antes de ejecutar las pruebas, instala las dependencias del proyecto con el siguiente comando:
- `npm install

## Ejecutar Pruebas
Para ejecutar las pruebas, puedes usar el comando npx cucumber-js. A continuación se muestran algunos ejemplos de cómo ejecutar pruebas específicas.

**Ejecutar Todas las Pruebas**

Para ejecutar todas las pruebas definidas en el proyecto, usa:
- `npx cucumber-js`


**Ejecutar Pruebas con Etiquetas Específicas**

Para ejecutar una prueba específica basada en una etiqueta, usa el siguiente comando. Sustituye @userCreationUnsuccessful por la etiqueta correspondiente a la prueba que deseas ejecutar:
- `npx cucumber-js --tags "@userCreationUnsuccessful"
`

## Casos de Prueba Identificados
**Login en OrangeHRM**

Descripción: Verificar que un usuario pueda iniciar sesión correctamente en la aplicación OrangeHRM.

**Escenario 1: Login con credenciales válidas**

Técnica de Diseño de Caso de Prueba:
- Particionamiento de Equivalencia

Precondiciones:
- Usuario tiene credenciales válidas.

Pasos:
- Navegar a la página de login de OrangeHRM.
- Ingresar el nombre de usuario y contraseña válidos.
- Hacer clic en el botón de "Login".

Resultados Esperados:
- El usuario es redirigido al panel de control con un mensaje de bienvenida.


**Escenario 2: Login con credenciales inválidas**

Técnica de Diseño de Caso de Prueba:
- Análisis de Valores Límite

Precondiciones:
- Usuario intenta iniciar sesión con credenciales inválidas.

Pasos:
- Navegar a la página de login de OrangeHRM.
Ingresar el nombre de usuario o contraseña incorrectos.
- Hacer clic en el botón de "Login".

Resultados Esperados:
- Se muestra un mensaje de error indicando que las credenciales son incorrectas.


**Creación de Usuario**

Descripción: Verificar que un administrador pueda crear un nuevo usuario en la aplicación.

**Escenario 1: Creación de un usuario con datos válidos**

Técnica de Diseño de Caso de Prueba:
- Particionamiento de Equivalencia

Precondiciones:
- El administrador ha iniciado sesión.

Pasos:
- Navegar a la sección de administración de usuarios.
- Hacer clic en "Agregar Usuario".
- Rellenar el formulario con datos válidos.
- Hacer clic en "Guardar".

Resultados Esperados:
- El nuevo usuario es creado y se muestra en la lista de usuarios.

**Escenario 2: Creación de un usuario con datos inválidos**

Técnica de Diseño de Caso de Prueba:
- Análisis de Valores Límite

Precondiciones:
- El administrador ha iniciado sesión.

Pasos:
- Navegar a la sección de administración de usuarios.
- Hacer clic en "Agregar Usuario".
- Rellenar el formulario con datos inválidos (por ejemplo, nombres muy largos o campos requeridos vacíos).
- Hacer clic en "Guardar".

Resultados Esperados:
- Se muestra un mensaje de error y el usuario no es creado.