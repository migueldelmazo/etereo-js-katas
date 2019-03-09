# Etereo JS katas

Estas katas se basan en las instrucciones de `./STATEMENTS.md` de la empresa [etereo.io](https://etereo.io).

## HOW TO

Ejecutar `make install` para instalar las dependencias del proyecto.

Ejecutar `make test` para correr los test unitarios que validen las funciones implementadas.

## Evaluación de la prueba

* He optado por una programación muy legible y mantenible, para que cualquier desarrollador pudiera evolucionar el código.
* He optado por realizar métodos lo más pequeños posbiles y auto descriptibles para facilitar los refactors y minimizar la documentación.
* Para la `kata-1.js` había optado en un primer momento por manejar strings, del tipo `parseInt((12321 + '').split('').sort().reverse().join(''), 10)`. Al final he optado por manejar siempre números enteros porque creía que esta era la intencionalidad de la prueba.
* Ante cualquier duda o si se desea que explique las decisiones tomadas no duden en ponerse en contacto conmigo.
