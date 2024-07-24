Feature: Creación de Usuario en OrangeHRM

  Scenario: Creación de un usuario con datos válidos
    Given que el administrador ha iniciado sesión
    And el administrador está en la sección de administración de usuarios
    When el administrador hace clic en "Agregar Usuario"
    And el administrador rellena el formulario con datos válidos
      | Username     | Employee Name  | Password   | Confirm Password |
      | NewUser01    | John Doe       | password123 | password123     |
    And el administrador hace clic en "Guardar"
    Then el usuario "NewUser01" debería aparecer en la lista de usuarios

  Scenario: Creación de un usuario con datos inválidos
    Given que el administrador ha iniciado sesión
    And el administrador está en la sección de administración de usuarios
    When el administrador hace clic en "Agregar Usuario"
    And el administrador rellena el formulario con datos inválidos
      | Username     | Employee Name  | Password   | Confirm Password |
      |              |                | pass       | pass            |
    And el administrador hace clic en "Guardar"
    Then debería mostrarse un mensaje de error indicando que los campos son inválidos