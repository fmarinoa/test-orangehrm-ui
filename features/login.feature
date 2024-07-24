Feature: Login en OrangeHRM

  Scenario: Login con credenciales válidas
    Given que el usuario está en la página de login
    When el usuario ingresa "Admin" en el campo de nombre de usuario
    And el usuario ingresa "admin123" en el campo de contraseña
    And el usuario hace clic en el botón de "Login"
    Then el usuario debería ver el dashboard con el mensaje de bienvenida

  Scenario: Login con credenciales inválidas
    Given que el usuario está en la página de login
    When el usuario ingresa "Admin" en el campo de nombre de usuario
    And el usuario ingresa "wrongpassword" en el campo de contraseña
    And el usuario hace clic en el botón de "Login"
    Then el usuario debería ver un mensaje de error indicando "Invalid credentials"
