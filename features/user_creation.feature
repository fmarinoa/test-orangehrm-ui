@cuserCreation
Feature: Creación de Usuario en OrangeHRM

  @userCreationSuccessful
  Scenario: Creación de un usuario con datos válidos
    Given que el administrador ha iniciado sesión
    And el administrador está en la sección de administración de usuarios
    When el administrador hace click en "Add Employee"
    And el administrador rellena el formulario con los siguientes datos
      | First Name | Middle Name | Last Name |
      | Juan       | Alvaro      | Valera    |
    And el administrador hace click en "Save"
    Then valido se haya creado correctamente el empleado
    When el administrador hace click en "Employee List"
    Given el administrador busca el nuevo empleado
    Then valido la existencia del empleado en la lista de empleados
  
  @userCreationUnsuccessful
  Scenario: Creación de un usuario con datos inválidos
    Given que el administrador ha iniciado sesión
    And el administrador está en la sección de administración de usuarios
    When el administrador hace click en "Add Employee"
    And el administrador rellena el formulario con los siguientes datos
      | First Name | Middle Name | Last Name |
      |            |             |           |
    And el administrador hace click en "Save"
    Then se muesta mensaje de error indicando que los campos son inválidos
