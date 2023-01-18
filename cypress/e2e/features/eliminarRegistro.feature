Feature: Toolsqa - Eliminar registro

    Feature El usuario va a eliminar un registro en WebTables

    Background:
        Given El usuario se dirige hacia el mantenedor de WebTables para eliminar un registro
    Scenario: Eliminar exitosamente
        When El usuario desliza su cursor a un registro y click en eliminar
        Then El usuario visualiza el registro ha sido eliminado