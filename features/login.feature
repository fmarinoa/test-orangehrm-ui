@login
Feature: Login en OrangeHRM

  @loginSuccessful
  Scenario Outline: Login con credenciales válidas
    Given que el usuario está en la página de login
    When el usuario ingresa "<user>" en el campo de nombre de usuario
    And el usuario ingresa "<pass>" en el campo de contraseña
    And el usuario hace clic en el botón de "Login"
    Then el usuario debería ver el dashboard

    Examples:
      | user  | pass     |
      | Admin | admin123 |

  @loginUnsuccessful
  Scenario Outline: Login con credenciales inválidas
    Given que el usuario está en la página de login
    When el usuario ingresa "<user>" en el campo de nombre de usuario
    And el usuario ingresa "<pass>" en el campo de contraseña
    And el usuario hace clic en el botón de "Login"
    Then el usuario debería ver un mensaje de error indicando "Invalid credentials"

    Examples:
      | user  | pass     |
      | Admin | qwertyui |
