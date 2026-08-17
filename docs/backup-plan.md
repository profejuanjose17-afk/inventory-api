# Plan de Backups

## Información respaldada

Se respaldará la base de datos PostgreSQL de la aplicación, incluyendo:

- Estructura de las tablas.
- Registros almacenados.
- Configuración necesaria para restaurar la base de datos.

Las credenciales y variables de entorno no forman parte del backup.

## Frecuencia

Se realizará un backup diario de la base de datos.

Se conservarán los respaldos de los últimos 7 días.

## Almacenamiento

Los respaldos se almacenarán en un servicio de almacenamiento externo separado de la instancia principal de PostgreSQL.

## Procedimiento de recuperación

Ante una pérdida o corrupción de la base de datos:

1. Obtener el backup más reciente disponible.
2. Crear o preparar una nueva base de datos PostgreSQL.
3. Restaurar el backup utilizando las herramientas de PostgreSQL.
4. Verificar la existencia e integridad de los datos.
5. Configurar la aplicación con la nueva cadena de conexión.
6. Reiniciar la aplicación.
7. Comprobar el endpoint `/health`.
8. Verificar los endpoints de productos.

## Objetivo

El procedimiento permite recuperar la información almacenada en PostgreSQL ante fallos de infraestructura, pérdida de datos o corrupción de la base de datos.