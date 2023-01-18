Feature: Toolsqa - Agregar registro

    Feature El usuario va a agregar un registro nuevo en WebTables

    Background:
        Given El usuario se dirige hacia el mantenedor de WebTables
    Scenario: Agregar exitosamente
        When El usuario hace click en add e ingresa los datos válidos y hace click en submit
        Then El usuario visualiza el nuevo registro