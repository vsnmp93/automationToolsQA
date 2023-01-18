Feature: Toolsqa - Editar registro

    Feature El usuario va a editar un registro en WebTables

    Background:
        Given El usuario se dirige hacia el mantenedor de WebTables para editar un registro
    Scenario: Editar exitosamente
        When El usuario hace click en edit e ingresa los datos válidos y hace click en submit
        Then El usuario visualiza el registro modificado