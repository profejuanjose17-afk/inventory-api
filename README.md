# Inventory API

API REST desarrollada con Node.js, Express y PostgreSQL.

## Tecnologías

- Node.js
- Express
- PostgreSQL
- GitHub Actions
- Render

## Producción

API disponible en:

https://inventory-api-q1cj.onrender.com

Health check:

https://inventory-api-q1cj.onrender.com/health

GET, POST:

https://inventory-api-q1cj.onrender.com/api/products

Ejemplo de Body en request POST:

``{ "name":"Keyboard", "price":100, "stock":20 }``

## Logs

* web service en render

<img width="1530" height="855" alt="image" src="https://github.com/user-attachments/assets/7738e078-94c5-4fc0-8e79-72ea5f7ff3d6" />

* postgres en render

  <img width="1487" height="864" alt="image" src="https://github.com/user-attachments/assets/a12e0949-7d22-4d5b-9944-2d193cdbdf42" />


## Instalación

Clonar el repositorio:

```bash
git clone https://github.com/profejuanjose17-afk/inventory-api.git
cd inventory-api
